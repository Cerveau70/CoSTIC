import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { verifyPayment } from '../services/geniuspay';
import { updateDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';
import { serverTimestamp } from 'firebase/firestore';

const PaymentCallback: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [message, setMessage] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<string>('wave');

  const RECEIPT_EMAIL = 'moustapha.diaby@esatic.edu.ci';
  const ORANGE_MONEY_NUMBER = '0707898952';

  useEffect(() => {
    const handleCallback = async () => {
      // Récupérer les paramètres de l'URL
      const urlParams = new URLSearchParams(window.location.search);
      const paymentId = urlParams.get('payment_id') || searchParams.get('payment_id');
      const reference = urlParams.get('reference') || searchParams.get('reference');
      const registrationDocId = urlParams.get('registration_doc_id') || searchParams.get('registration_doc_id');
      const statusParam = urlParams.get('status') || searchParams.get('status');
      const method = urlParams.get('payment_method') || searchParams.get('payment_method') || 'wave';

      setPaymentMethod(method);

      // Si Orange Money, afficher directement les instructions
      if (method === 'orange') {
        setStatus('success');
        setMessage('Veuillez effectuer le paiement Orange Money et envoyer votre reçu de paiement par email.');

        // Mettre à jour Firestore avec le statut pending_receipt
        if (registrationDocId) {
          await updateDoc(doc(db, "registrations", registrationDocId), {
            paymentStatus: 'pending_receipt',
            paymentMethod: 'orange',
            paymentReference: `ORANGE_${Date.now()}`,
            paymentDate: serverTimestamp()
          });
        }
        return;
      }

      // Si on a un status dans l'URL, on peut vérifier directement
      if (statusParam === 'success' && paymentId) {
        try {
          // Vérifier le statut du paiement
          const verification = await verifyPayment(paymentId);

          if (verification.success && verification.status === 'completed') {
            // Mettre à jour Firestore
            if (registrationDocId) {
              await updateDoc(doc(db, "registrations", registrationDocId), {
                paymentStatus: 'completed',
                paymentMethod: 'wave',
                paymentReference: reference || paymentId,
                paymentDate: serverTimestamp()
              });
            }

            setStatus('success');
            setMessage('Paiement Wave effectué avec succès ! Veuillez envoyer votre reçu de paiement Wave par email.');

            // Ne pas rediriger automatiquement pour laisser le temps de lire le message
          } else {
            setStatus('error');
            setMessage(verification.message || 'Paiement non complété');
          }
        } catch (error: any) {
          console.error('Erreur vérification paiement:', error);
          setStatus('error');
          setMessage(error.message || 'Erreur lors de la vérification du paiement');
        }
      } else if (statusParam === 'cancelled' || statusParam === 'failed') {
        setStatus('error');
        setMessage('Paiement annulé ou échoué. Vous pouvez réessayer.');
      } else if (paymentId) {
        // Si on a un payment_id mais pas de status, on vérifie quand même
        try {
          const verification = await verifyPayment(paymentId);
          if (verification.success && verification.status === 'completed') {
            if (registrationDocId) {
              await updateDoc(doc(db, "registrations", registrationDocId), {
                paymentStatus: 'completed',
                paymentMethod: 'wave',
                paymentReference: reference || paymentId,
                paymentDate: serverTimestamp()
              });
            }
            setStatus('success');
            setMessage('Paiement Wave effectué avec succès ! Veuillez envoyer votre reçu de paiement Wave par email.');
          } else {
            setStatus('error');
            setMessage('Paiement non complété');
          }
        } catch (error: any) {
          setStatus('error');
          setMessage('Erreur lors de la vérification du paiement');
        }
      } else {
        setStatus('error');
        setMessage('Paramètres de paiement manquants');
      }
    };

    handleCallback();
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-neutral-100 flex items-center justify-center px-4">
      <div className="max-w-3xl w-full bg-white rounded-xl shadow-2xl p-8 text-center">
        {status === 'loading' && (
          <>
            <div className="mb-6">
              <div className="h-16 w-16 border-4 border-primary border-t-transparent rounded-full mx-auto animate-spin"></div>
            </div>
            <h2 className="text-2xl font-bold text-primary mb-4 font-sans">Vérification du paiement...</h2>
            <p className="text-neutral-600">Veuillez patienter pendant que nous vérifions votre paiement.</p>
          </>
        )}

        {status === 'success' && (
          <>
            <div className="mb-6">
              <img
                src={paymentMethod === 'orange' ? '/img/orange.png' : '/img/wave.jpg'}
                alt={paymentMethod === 'orange' ? 'Orange Money' : 'Wave'}
                className="w-24 h-24 mx-auto object-contain"
                loading="eager"
              />
            </div>
            <h2 className="text-2xl font-bold text-neutral-800 mb-6 font-sans">
              {paymentMethod === 'orange' ? 'Instructions de paiement Orange Money' : 'Paiement Wave réussi !'}
            </h2>

            <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-6 mb-6 text-left">
              {paymentMethod === 'orange' ? (
                <>
                  <p className="text-neutral-800 mb-4 text-lg font-semibold">Comment payer :</p>
                  <div className="bg-white rounded p-4 mb-4 border border-neutral-200">
                    <p className="text-sm text-neutral-600 mb-2">1. Ouvrez votre application Orange Money</p>
                    <p className="text-sm text-neutral-600 mb-2">2. Transférez l'argent au numéro :</p>
                    <p className="text-2xl font-bold text-neutral-900 mb-3">{ORANGE_MONEY_NUMBER}</p>
                    <p className="text-sm text-neutral-600">3. Enregistrez votre reçu de paiement</p>
                  </div>
                  <p className="text-neutral-800 mb-4 text-lg font-semibold">Envoyer le reçu :</p>
                  <div className="bg-white rounded p-4 border border-neutral-200">
                    <p className="text-sm text-neutral-600 mb-2">Envoyez votre reçu de paiement Orange Money par email à :</p>
                    <p className="text-base font-bold text-neutral-900 break-all">{RECEIPT_EMAIL}</p>
                  </div>
                </>
              ) : (
                <>
                  <p className="text-neutral-800 mb-4 text-lg font-semibold">Paiement effectué !</p>
                  <p className="text-neutral-700 mb-4">Votre paiement Wave a été effectué avec succès.</p>
                  <p className="text-neutral-800 mb-4 text-lg font-semibold">Envoyer le reçu :</p>
                  <div className="bg-white rounded p-4 border border-neutral-200">
                    <p className="text-sm text-neutral-600 mb-2">Envoyez votre reçu de paiement Wave par email à :</p>
                    <p className="text-base font-bold text-neutral-900 break-all">{RECEIPT_EMAIL}</p>
                  </div>
                </>
              )}
              <p className="text-sm text-neutral-600 mt-4">
                Votre inscription sera confirmée une fois le reçu reçu et validé.
              </p>
            </div>

            <div className="flex flex-col space-y-5">
              <a
                href={`mailto:${RECEIPT_EMAIL}?subject=Reçu de paiement ${paymentMethod === 'orange' ? 'Orange Money' : 'Wave'} - CoSTIC 2026&body=Bonjour,%0D%0A%0D%0AVeuillez trouver ci-joint mon reçu de paiement ${paymentMethod === 'orange' ? 'Orange Money' : 'Wave'} pour ma participation au CoSTIC 2026.%0D%0A%0D%0ACordialement`}
                className={`font-bold py-5 px-2 rounded-lg transition-all duration-200 font-sans inline-flex items-center justify-center ${paymentMethod === 'orange'
                  ? 'bg-black text-white hover:bg-neutral-800'
                  : 'bg-blue-500 text-white hover:bg-blue-600'
                  }`}
              >
                Envoyer le reçu par email
              </a>
              <button
                onClick={() => window.location.href = '/#inscription'}
                className="bg-neutral-200 text-neutral-700 font-bold py-3 px-6 rounded-lg hover:bg-neutral-300 transition-all duration-200 font-sans"
              >
                Retour à l'accueil
              </button>
            </div>
          </>
        )}

        {status === 'error' && (
          <>
            <div className="mb-6">
              <div className="h-16 w-16 bg-red-100 rounded-full mx-auto flex items-center justify-center">
                <span className="text-red-600 text-3xl font-bold">✕</span>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-red-600 mb-4 font-sans">Paiement échoué</h2>
            <p className="text-neutral-600 mb-6">{message}</p>
            <button
              onClick={() => window.location.href = '/#inscription'}
              className="mt-6 bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-primary/90 transition-all duration-200 font-sans"
            >
              Réessayer
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default PaymentCallback;

