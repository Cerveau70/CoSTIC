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

  useEffect(() => {
    const handleCallback = async () => {
      // Récupérer les paramètres de l'URL
      const urlParams = new URLSearchParams(window.location.search);
      const paymentId = urlParams.get('payment_id') || searchParams.get('payment_id');
      const reference = urlParams.get('reference') || searchParams.get('reference');
      const registrationDocId = urlParams.get('registration_doc_id') || searchParams.get('registration_doc_id');
      const statusParam = urlParams.get('status') || searchParams.get('status');

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
                paymentReference: reference || paymentId,
                paymentDate: serverTimestamp()
              });
            }

            setStatus('success');
            setMessage('Paiement effectué avec succès ! Vous recevrez un email de confirmation.');

            // Rediriger après 5 secondes
            setTimeout(() => {
              window.location.href = '/#inscription';
            }, 5000);
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
                paymentReference: reference || paymentId,
                paymentDate: serverTimestamp()
              });
            }
            setStatus('success');
            setMessage('Paiement effectué avec succès !');
            setTimeout(() => {
              window.location.href = '/#inscription';
            }, 5000);
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
      <div className="max-w-md w-full bg-white rounded-xl shadow-2xl p-8 text-center">
        {status === 'loading' && (
          <>
            <div className="mb-6">
              <svg className="animate-spin h-16 w-16 text-primary mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-primary mb-4 font-sans">Vérification du paiement...</h2>
            <p className="text-neutral-600">Veuillez patienter pendant que nous vérifions votre paiement.</p>
          </>
        )}

        {status === 'success' && (
          <>
            <div className="mb-6">
              <svg className="h-16 w-16 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-green-600 mb-4 font-sans">Paiement réussi !</h2>
            <p className="text-neutral-600 mb-6">{message}</p>
            <p className="text-sm text-neutral-500">Vous allez être redirigé dans quelques secondes...</p>
            <button
              onClick={() => window.location.href = '/#inscription'}
              className="mt-6 bg-accent text-white font-bold py-3 px-6 rounded-lg hover:bg-accent/90 transition-all duration-300 font-sans"
            >
              Retour à l'accueil
            </button>
          </>
        )}

        {status === 'error' && (
          <>
            <div className="mb-6">
              <svg className="h-16 w-16 text-red-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-red-600 mb-4 font-sans">Paiement échoué</h2>
            <p className="text-neutral-600 mb-6">{message}</p>
            <button
              onClick={() => window.location.href = '/#inscription'}
              className="mt-6 bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-primary/90 transition-all duration-300 font-sans"
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

