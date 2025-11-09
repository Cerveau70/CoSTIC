import React, { useState } from 'react';
import { collection, addDoc, serverTimestamp, updateDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';
import { initiatePayment } from '../services/geniuspay';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose }) => {
  const [registration, setRegistration] = useState({
    name: '', email: '', participantType: 'chercheur',
  });
  const [registrationStatus, setRegistrationStatus] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [registrationDocId, setRegistrationDocId] = useState<string | null>(null);

  const handleRegistrationChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setRegistration(prev => ({ ...prev, [id]: value }));
  };

  // Configuration des prix (TEST: 100 FCFA pour les tests)
  const prices = {
    chercheur: { amount: 100, currency: 'XOF' },
    etudiant: { amount: 100, currency: 'XOF' },
  };

  const handleRegistrationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!registration.name || !registration.email) {
      setRegistrationStatus('Erreur : Veuillez renseigner votre nom et votre e-mail.');
      return;
    }
    setRegistrationStatus('');
    setIsRegistering(true);

    try {
      // 1. Sauvegarder l'inscription dans Firestore
      const docRef = await addDoc(collection(db, "registrations"), {
        ...registration,
        paymentStatus: 'pending',
        registeredAt: serverTimestamp(),
        amount: prices[registration.participantType as keyof typeof prices].amount,
        currency: 'XOF'
      });

      setRegistrationDocId(docRef.id);

      // 2. Initier le paiement GeniusPay
      const paymentReference = `costic_${Date.now()}_${registration.email}`;
      const paymentData = {
        amount: prices[registration.participantType as keyof typeof prices].amount,
        currency: 'XOF',
        customer_email: registration.email,
        customer_name: registration.name,
        reference: paymentReference,
        callback_url: `${window.location.origin}/payment-callback?registration_doc_id=${docRef.id}`,
        metadata: {
          name: registration.name,
          participantType: registration.participantType,
          registrationDocId: docRef.id
        }
      };

      const paymentResponse = await initiatePayment(paymentData);

      if (paymentResponse.success && paymentResponse.data?.payment_url) {
        // Rediriger vers la page de paiement GeniusPay
        window.location.href = paymentResponse.data.payment_url;
      } else {
        throw new Error(paymentResponse.message || paymentResponse.error || 'Erreur lors de l\'initiation du paiement');
      }

    } catch (error: any) {
      console.error("Error saving registration: ", error);
      setRegistrationStatus(error.message || "Erreur : Impossible d'enregistrer l'inscription. Veuillez réessayer.");
      setIsRegistering(false);
    }
  };

  const inputStyle = "w-full px-4 py-3 bg-white border border-neutral-300 rounded-lg shadow-sm transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent font-body";
  const labelStyle = "block text-neutral-700 font-semibold mb-2 font-sans";

  return (
    <div className={`fixed inset-0 z-50 overflow-y-auto ${isOpen ? 'block' : 'hidden'}`}>
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          onClick={onClose}
        ></div>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-primary font-sans">Inscription & Paiement</h3>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <p className="text-center text-lg text-neutral-600 mb-6">
              Finalisez votre participation en remplissant le formulaire ci-dessous.
            </p>

            <form onSubmit={handleRegistrationSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className={labelStyle}>Nom complet*</label>
                <input type="text" id="name" value={registration.name} onChange={handleRegistrationChange} className={inputStyle} required disabled={isRegistering} />
              </div>
              <div>
                <label htmlFor="email" className={labelStyle}>E-mail*</label>
                <input type="email" id="email" value={registration.email} onChange={handleRegistrationChange} className={inputStyle} required disabled={isRegistering} />
              </div>
              <div>
                <label htmlFor="participantType" className={labelStyle}>Type de participant*</label>
                <select id="participantType" value={registration.participantType} onChange={handleRegistrationChange} className={inputStyle} disabled={isRegistering}>
                  <option value="chercheur">Chercheur / Professionnel</option>
                  <option value="etudiant">Étudiant</option>
                </select>
              </div>

              <div className="bg-neutral-100 p-4 rounded-lg">
                <h4 className="font-bold text-primary mb-2 font-sans">Résumé de l'inscription</h4>
                <div className="flex justify-between items-center text-lg">
                  <span className="text-neutral-600">Catégorie :</span>
                  <span className="font-bold text-primary font-sans">{registration.participantType === 'etudiant' ? 'Étudiant' : 'Chercheur'}</span>
                </div>
                <div className="flex justify-between items-center text-2xl pt-2">
                  <span className="text-neutral-600 font-sans">Total :</span>
                  <div className="text-right">
                    <span className="font-extrabold text-primary font-sans">100 FCFA (TEST)</span>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4 pt-4">
                <button type="submit" disabled={isRegistering} className="flex-1 bg-accent text-white font-bold py-3 px-6 rounded-lg hover:bg-accent/90 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 font-sans disabled:bg-neutral-400 disabled:cursor-not-allowed flex justify-center items-center">
                  {isRegistering ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                      Enregistrement...
                    </>
                  ) : (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
                      Procéder au paiement
                    </>
                  )}
                </button>
                <button type="button" onClick={onClose} className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200 font-sans">
                  Annuler
                </button>
              </div>

              {registrationStatus && <p className={`mt-4 text-center text-sm ${registrationStatus.startsWith('Erreur') ? 'text-red-600' : 'text-green-600'}`}>{registrationStatus}</p>}
              <p className="text-xs text-neutral-500 text-center mt-2">Paiement sécurisé via GeniusPay (Wave).</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationModal;
