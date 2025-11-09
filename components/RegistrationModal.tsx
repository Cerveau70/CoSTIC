import React, { useState } from 'react';
import { collection, addDoc, serverTimestamp, updateDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';
import { initiatePayment } from '../services/geniuspay';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FieldErrors {
  name: string;
  email: string;
}

const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose }) => {
  const [registration, setRegistration] = useState({
    name: '', email: '', participantType: 'chercheur',
  });
  const [registrationStatus, setRegistrationStatus] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [registrationDocId, setRegistrationDocId] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({ name: '', email: '' });
  const [touched, setTouched] = useState({ name: false, email: false });

  // Validation de l'email
  const validateEmail = (email: string): string => {
    if (!email.trim()) {
      return 'L\'adresse e-mail est requise';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return 'Veuillez entrer une adresse e-mail valide (ex: nom@exemple.com)';
    }
    return '';
  };

  // Validation du nom complet
  const validateName = (name: string): string => {
    if (!name.trim()) {
      return 'Le nom complet est requis';
    }
    if (name.trim().length < 2) {
      return 'Le nom complet doit contenir au moins 2 caractères';
    }
    if (name.trim().length > 100) {
      return 'Le nom complet ne peut pas dépasser 100 caractères';
    }
    return '';
  };

  // Validation en temps réel
  const handleRegistrationChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setRegistration(prev => ({ ...prev, [id]: value }));

    // Valider le champ modifié
    if (id === 'email') {
      const error = validateEmail(value);
      setFieldErrors(prev => ({ ...prev, email: error }));
    } else if (id === 'name') {
      const error = validateName(value);
      setFieldErrors(prev => ({ ...prev, name: error }));
    }
  };

  // Gérer le blur (quand l'utilisateur quitte le champ)
  const handleBlur = (field: 'name' | 'email') => {
    setTouched(prev => ({ ...prev, [field]: true }));
    if (field === 'email') {
      const error = validateEmail(registration.email);
      setFieldErrors(prev => ({ ...prev, email: error }));
    } else if (field === 'name') {
      const error = validateName(registration.name);
      setFieldErrors(prev => ({ ...prev, name: error }));
    }
  };

  // Vérifier si le formulaire est valide
  const isFormValid = (): boolean => {
    const nameError = validateName(registration.name);
    const emailError = validateEmail(registration.email);
    return !nameError && !emailError;
  };

  // Configuration des prix
  const prices = {
    chercheur: { amount: 50000, currency: 'XOF' },
    etudiant: { amount: 35000, currency: 'XOF' },
  };

  const handleRegistrationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Marquer tous les champs comme touchés
    setTouched({ name: true, email: true });

    // Valider tous les champs
    const nameError = validateName(registration.name);
    const emailError = validateEmail(registration.email);

    setFieldErrors({
      name: nameError,
      email: emailError
    });

    // Si erreurs, ne pas soumettre
    if (nameError || emailError) {
      setRegistrationStatus('Erreur : Veuillez corriger les erreurs dans le formulaire.');
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
        // Message de succès avant redirection
        setRegistrationStatus('Succès : Redirection vers la page de paiement...');
        // Rediriger vers la page de paiement GeniusPay
        setTimeout(() => {
          window.location.href = paymentResponse.data.payment_url;
        }, 500);
      } else {
        throw new Error(paymentResponse.message || paymentResponse.error || 'Erreur lors de l\'initiation du paiement');
      }

    } catch (error: any) {
      console.error("Error saving registration: ", error);
      // Améliorer les messages d'erreur
      let errorMessage = "Erreur : Impossible d'enregistrer l'inscription. Veuillez réessayer.";

      if (error.message) {
        if (error.message.includes('email') || error.message.includes('Email') || error.message.includes('e-mail')) {
          errorMessage = 'Erreur : L\'adresse e-mail est incorrecte. Veuillez vérifier votre e-mail.';
        } else if (error.message.includes('name') || error.message.includes('nom')) {
          errorMessage = 'Erreur : Le nom complet est incorrect. Veuillez vérifier votre nom.';
        } else if (error.message.includes('Validation')) {
          errorMessage = 'Erreur : Les informations fournies ne sont pas valides. Veuillez vérifier votre e-mail et votre nom complet.';
        } else {
          errorMessage = `Erreur : ${error.message}`;
        }
      }

      setRegistrationStatus(errorMessage);
      setIsRegistering(false);
    }
  };

  const inputStyle = (hasError: boolean) =>
    `w-full px-4 py-3 bg-white border rounded-lg shadow-sm transition duration-300 ease-in-out focus:outline-none focus:ring-2 font-body ${hasError
      ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
      : 'border-neutral-300 focus:ring-secondary focus:border-transparent'
    }`;

  const labelStyle = "block text-neutral-700 font-semibold mb-2 font-sans";
  const errorTextStyle = "text-red-600 text-sm mt-1 font-body";

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

            {/* Panneau d'erreur global */}
            {registrationStatus && (
              <div className={`mb-4 p-4 rounded-lg ${registrationStatus.startsWith('Erreur')
                  ? 'bg-red-50 border border-red-200'
                  : 'bg-green-50 border border-green-200'
                }`}>
                <div className="flex items-start">
                  {registrationStatus.startsWith('Erreur') ? (
                    <svg className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                  <p className={`text-sm font-medium ${registrationStatus.startsWith('Erreur') ? 'text-red-800' : 'text-green-800'
                    }`}>
                    {registrationStatus}
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleRegistrationSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className={labelStyle}>Nom complet*</label>
                <input
                  type="text"
                  id="name"
                  value={registration.name}
                  onChange={handleRegistrationChange}
                  onBlur={() => handleBlur('name')}
                  className={inputStyle(touched.name && !!fieldErrors.name)}
                  required
                  disabled={isRegistering}
                  placeholder="Ex: Jean Luc"
                />
                {touched.name && fieldErrors.name && (
                  <p className={errorTextStyle}>{fieldErrors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className={labelStyle}>E-mail*</label>
                <input
                  type="email"
                  id="email"
                  value={registration.email}
                  onChange={handleRegistrationChange}
                  onBlur={() => handleBlur('email')}
                  className={inputStyle(touched.email && !!fieldErrors.email)}
                  required
                  disabled={isRegistering}
                  placeholder="Ex: jean.luc@exemple.com"
                />
                {touched.email && fieldErrors.email && (
                  <p className={errorTextStyle}>{fieldErrors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="participantType" className={labelStyle}>Type de participant*</label>
                <select
                  id="participantType"
                  value={registration.participantType}
                  onChange={handleRegistrationChange}
                  className={inputStyle(false)}
                  disabled={isRegistering}
                >
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
                    <span className="font-extrabold text-primary font-sans">{registration.participantType === 'etudiant' ? '35 000 FCFA' : '50 000 FCFA'}</span>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4 pt-4">
                <button
                  type="submit"
                  disabled={isRegistering || !isFormValid()}
                  className="flex-1 bg-accent text-white font-bold py-3 px-6 rounded-lg hover:bg-accent/90 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 font-sans disabled:bg-neutral-400 disabled:cursor-not-allowed disabled:hover:transform-none disabled:hover:shadow-md flex justify-center items-center"
                >
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
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200 font-sans"
                  disabled={isRegistering}
                >
                  Annuler
                </button>
              </div>

              <p className="text-xs text-neutral-500 text-center mt-2">Paiement sécurisé via GeniusPay (Wave).</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationModal;
