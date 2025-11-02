import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import Footer from './components/Footer';
import Section from './components/Section';
import TimelineItem from './components/TimelineItem';
import AdvancedCalendar from './components/AdvancedCalendar';
import ComiteCarousel from './components/ComiteCarousel';
import PartenairesCarousel from './components/PartenairesCarousel';
import UnifiedPartenairesCarousel from './components/UnifiedPartenairesCarousel';
import ResultatsCarousel from './components/ResultatsCarousel';
import SocialMediaSticky from './components/SocialMediaSticky';
import PartenaireForm from './components/PartenaireForm';
import VisitorCounterSticky from './components/VisitorCounterSticky';
import { partenairesDefaut } from './config/partenaires';
import { TimelineEvent } from './types';
import { db, storage } from './firebase';
import { collection, addDoc, serverTimestamp, updateDoc, doc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { usePaystackPayment } from 'react-paystack';
import './styles/global.css';



// Custom Hook for observing intersection
const useIntersectionObserver = (options: IntersectionObserverInit) => {
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setEntry(entry);
        if (ref.current) {
          observerRef.current.unobserve(ref.current);
        }
      }
    }, options);

    if (ref.current) {
      observerRef.current.observe(ref.current);
    }

    return () => {
      if (observerRef.current && ref.current) {
        observerRef.current.unobserve(ref.current);
      }
    };
  }, [options]);

  return [ref, entry] as const;
};

// Animated component wrapper
const Animated: React.FC<{ animationClass: string, delay?: number, children: React.ReactNode }> = ({ children, animationClass, delay = 0 }) => {
  const [ref, entry] = useIntersectionObserver({ threshold: 0.1 });
  const isVisible = !!entry;

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`${isVisible ? animationClass : 'opacity-0'}`}
      style={{ transition: `opacity 0.7s ease-out ${delay}ms, transform 0.7s ease-out ${delay}ms` }}
    >
      {children}
    </div>
  );
};

// Countdown Timer Component
const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    jours: 0, heures: 0, minutes: 0, secondes: 0
  });
  const [isEventStarted, setIsEventStarted] = useState(false);

  useEffect(() => {
    const calculateAndSetTime = () => {
      // Début du colloque: 21 mai 2026 à 00:00:00 (UTC)
      const eventDate = new Date('2026-05-21T00:00:00Z').getTime();
      const now = new Date().getTime();
      const difference = eventDate - now;

      if (difference > 0) {
        setTimeLeft({
          jours: Math.floor(difference / (1000 * 60 * 60 * 24)),
          heures: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          secondes: Math.floor((difference / 1000) % 60)
        });
        setIsEventStarted(false);
      } else {
        setIsEventStarted(true);
      }
    };

    calculateAndSetTime();
    const timer = setInterval(calculateAndSetTime, 1000);

    return () => clearInterval(timer);
  }, []);

  if (isEventStarted) {
    return <span className="text-white bg-accent px-6 py-3 rounded-lg text-xl font-semibold shadow-lg font-sans">L'événement a commencé !</span>;
  }

  const TimePart: React.FC<{ value: number; label: string }> = ({ value, label }) => (
    <div className="flex flex-col items-center">
      <span className="text-6xl lg:text-7xl font-bold tracking-tighter font-sans">{String(value).padStart(2, '0')}</span>
      <span className="text-sm uppercase opacity-75 tracking-widest font-sans">{label}</span>
    </div>
  );

  return (
    <div className="text-white flex items-center justify-center space-x-6 md:space-x-10">
      <TimePart value={timeLeft.jours} label="Jours" />
      <TimePart value={timeLeft.heures} label="Heures" />
      <TimePart value={timeLeft.minutes} label="Minutes" />
      <TimePart value={timeLeft.secondes} label="Secondes" />
    </div>
  );
};


// Mock data for timeline events now built inside component with i18n

const conferenceTracks = [
  { title: 'Intelligence Artificielle et ODD' },
  { title: 'Réseaux, Télécommunications et Infrastructures durables' },
  { title: 'Cybersécurité et Résilience numérique' },
  { title: 'Transformation digitale et Innovation responsable' },
  { title: 'Mathématiques appliquées et Recherche opérationnelle pour le développement durable' },
  { title: 'Éducation numérique et Inclusion' },
  { title: 'Technologies émergentes et Durabilité' },
  { title: 'Coopération scientifique et Innovation pour les ODD' },
  { title: 'Mathématiques, Modélisation et Analyse numérique pour les systèmes durables' },
  { title: 'Statistique, Science des données et Économie appliquée' },
  { title: 'Culture, Patrimoine et Société numérique' },
  { title: 'TIC, Biologie et Sciences du vivant' },
  { title: 'Prix Jeune Chercheur' },
  { title: 'Autre' }
];


const budgetItems = [
  {
    title: 'Logistique',
    details: 'Salles, équipements, internet, badges, sécurité',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    title: 'Communication',
    details: 'Site web, affiches, médias, réseaux sociaux',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-2.236 9.168-5.514C18.358 1.84 18.668 1.5 19 1.5v1.5a1.5 1.5 0 01-1.5 1.5H16v2.083a6.001 6.001 0 00-6 6H6.436z" />
      </svg>
    )
  },
  {
    title: 'Impression',
    details: 'Programmes, actes, supports',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
      </svg>
    )
  },
  {
    title: 'Prise en charge des invités',
    details: 'Keynotes et invités internationaux',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    title: 'Frais de publication',
    details: 'Revues, indexation',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  },
  {
    title: 'Activités sociales',
    details: 'Cocktail et activités de networking',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4m18-3l-3-3m0 0l-3 3m3-3v12" />
      </svg>
    )
  },
];

const App: React.FC = () => {
  const initialSubmissionState = {
    authorName: '', authorEmail: '', affiliation: '', articleTitle: '', themeSelect: '',
  };
  const [submission, setSubmission] = useState(initialSubmissionState);
  const [file, setFile] = useState<File | null>(null);
  const [submissionStatus, setSubmissionStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const initialRegistrationState = {
    name: '', email: '', participantType: 'chercheur',
  };
  const [registration, setRegistration] = useState(initialRegistrationState);
  const [registrationStatus, setRegistrationStatus] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [registrationDocId, setRegistrationDocId] = useState<string | null>(null);

  const handleSubmissionChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setSubmission(prev => ({ ...prev, [id]: value }));
  };

  const handleRegistrationChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setRegistration(prev => ({ ...prev, [id]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleArticleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionStatus('');

    if (!submission.authorName || !submission.authorEmail || !submission.articleTitle || !file) {
      setSubmissionStatus('Erreur : Veuillez remplir tous les champs obligatoires et sélectionner un fichier.');
      return;
    }
    setIsSubmitting(true);
    try {
      // 1. Upload file to Firebase Storage
      const storageRef = ref(storage, `submissions/${Date.now()}_${file.name}`);
      await uploadBytes(storageRef, file);

      // 2. Get file URL
      const downloadURL = await getDownloadURL(storageRef);

      // 3. Save submission data to Firestore
      await addDoc(collection(db, "submissions"), {
        ...submission,
        fileUrl: downloadURL,
        fileName: file.name,
        submittedAt: serverTimestamp()
      });

      setSubmissionStatus('Succès : Votre article a été soumis avec succès !');
      setSubmission(initialSubmissionState);
      setFile(null);
      // Clear file input
      const fileInput = document.getElementById('fileUpload') as HTMLInputElement;
      if (fileInput) fileInput.value = "";

    } catch (error) {
      console.error("Error submitting article: ", error);
      setSubmissionStatus("Erreur : Impossible de soumettre l'article. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Configuration Paystack
  const prices = {
    chercheur: { amount: 15000, currency: 'XOF', equivalent: '~98 000 XOF' },
    etudiant: { amount: 7500, currency: 'XOF', equivalent: '~49 000 XOF' },
  };

  // Configuration pour Paystack
  const config = {
    reference: `costic_${Date.now()}_${registration.email}`,
    email: registration.email,
    amount: registration.participantType ? prices[registration.participantType as keyof typeof prices].amount : 15000,
    currency: 'XOF', // Franc CFA pour l'Afrique de l'Ouest
    publicKey: 'pk_test_5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f',
    metadata: {
      name: registration.name,
      participantType: registration.participantType,
      registrationDocId: registrationDocId
    }
  };

  // Hook Paystack
  const initializePayment = usePaystackPayment(config);

  const onSuccess = async (reference: any) => {
    console.log('Paiement réussi:', reference);

    try {
      // Mettre à jour le statut de paiement dans Firestore
      if (registrationDocId) {
        await updateDoc(doc(db, "registrations", registrationDocId), {
          paymentStatus: 'completed',
          paymentReference: reference.reference,
          paymentDate: serverTimestamp()
        });
      }

      setRegistrationStatus('Succès : Votre paiement a été effectué avec succès ! Vous recevrez un email de confirmation.');
      setRegistration(initialRegistrationState);
      setRegistrationDocId(null);

      // Optionnel : Rediriger vers une page de confirmation
      // window.location.href = '/confirmation';

    } catch (error) {
      console.error("Erreur lors de la mise à jour du statut de paiement:", error);
      setRegistrationStatus('Paiement réussi mais erreur lors de la mise à jour. Contactez-nous avec la référence: ' + reference.reference);
    }
  };

  const onClose = () => {
    console.log('Paiement annulé');
    setRegistrationStatus('Paiement annulé. Vous pouvez réessayer quand vous le souhaitez.');
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
      // 1. Save registration intent to Firestore
      const docRef = await addDoc(collection(db, "registrations"), {
        ...registration,
        paymentStatus: 'pending',
        registeredAt: serverTimestamp(),
        amount: prices[registration.participantType as keyof typeof prices].amount,
        currency: 'XOF'
      });

      setRegistrationDocId(docRef.id);

      // 2. Initialize Paystack payment
      initializePayment(onSuccess, onClose);

    } catch (error) {
      console.error("Error saving registration: ", error);
      setRegistrationStatus("Erreur : Impossible d'enregistrer l'inscription. Veuillez réessayer.");
    } finally {
      setIsRegistering(false);
    }
  };

  const inputStyle = "w-full px-4 py-3 bg-white border border-neutral-300 rounded-lg shadow-sm transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent font-body";
  const labelStyle = "block text-neutral-700 font-semibold mb-2 font-sans";

  // Défilement des universités: mesure dynamique de la piste
  const universitiesContainerRef = useRef<HTMLDivElement | null>(null);
  const universitiesTrackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = universitiesContainerRef.current;
    const track = universitiesTrackRef.current;
    if (!container || !track) return;

    const measure = () => {
      let totalWidth = 0;
      track.childNodes.forEach((node) => {
        if (node instanceof HTMLElement) {
          totalWidth += node.offsetWidth + 48; // space-x-12 ≈ 48px
        }
      });
      const end = -(totalWidth);
      const durationPerPixel = 0.015; // secondes par pixel (vitesse très rapide)
      const duration = Math.max(10, Math.round(Math.abs(end) * durationPerPixel));
      track.style.setProperty('--scroll-end', `${end}px`);
      track.style.setProperty('--scroll-duration', `${duration}s`);
    };

    measure();
    const resizeObserver = new ResizeObserver(() => measure());
    resizeObserver.observe(container);
    return () => resizeObserver.disconnect();
  }, []);

  const { t } = useTranslation();

  const timelineEvents: TimelineEvent[] = useMemo(() => ([
    { date: t('tl_1_date'), description: t('tl_1_desc'), icon: '📢', status: 'upcoming' },
    { date: t('tl_2_date'), description: t('tl_2_desc'), icon: '📄', status: 'upcoming' },
    { date: t('tl_3_date'), description: t('tl_3_desc'), icon: '📧', status: 'upcoming' },
    { date: t('tl_4_date'), description: t('tl_4_desc'), icon: '✅', status: 'upcoming' },
    { date: t('tl_5_date'), description: t('tl_5_desc'), icon: '🎉', isHighlighted: true, status: 'upcoming' },
  ]), [t]);

  return (
    <div className="bg-neutral-100 font-body">
      <Header />
      <SocialMediaSticky />
      <VisitorCounterSticky />
      <main>
        {/* Hero Section */}
        <section id="accueil" className="relative text-white pt-32 pb-24 text-center overflow-hidden flex flex-col items-center justify-center min-h-screen">
          <div className="absolute inset-0 hero-bg"></div>
          <div className="absolute inset-0 bg-primary/40"></div>
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40" style={{ backgroundImage: "url('/img/arr.png')" }}></div>
          <div className="container mx-auto px-6 relative z-10">

            {/* Partenaires Logos - Défilement simple vers la droite */}
            <div className="mb-8 animate-fade-in-up overflow-hidden" style={{ animationDelay: '0.1s' }}>
              <div className="mx-auto w-[1200px] overflow-hidden" ref={universitiesContainerRef}>
                <div
                  className="flex animate-scroll-distance space-x-12 whitespace-nowrap"
                  style={{
                    // Valeurs par défaut; seront recalculées côté client par JS si nécessaire
                    // Ici on vise un cycle complet = largeur totale d'une liste
                    // -100% est une approximation avant mesure
                    ['--scroll-end' as any]: '-100%',
                    ['--scroll-duration' as any]: '20s'
                  }}
                  ref={universitiesTrackRef}
                >
                  {/* Créer une boucle continue en ajoutant tous les éléments à la fin */}
                  {[...partenairesDefaut, ...partenairesDefaut].map((partenaire, index) => (
                    <div
                      key={`${partenaire.name}-${index}`}
                      className="flex-shrink-0 group"
                    >
                      {/* Logo simple et fixe */}
                      <div className="w-20 h-20 bg-pure-white rounded-lg shadow-lg flex items-center justify-center transition-all duration-300 hover:shadow-xl hover:scale-105 border border-gray-100">
                        <img
                          src={partenaire.logo}
                          alt={`Logo ${partenaire.name}`}
                          className="max-w-16 max-h-16 object-contain transition-all duration-300 group-hover:scale-110"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const parent = target.parentElement;
                            if (parent) {
                              parent.innerHTML = `
                    <div class="w-full h-full flex items-center justify-center">
                      <div class="text-gray-600 font-bold text-sm text-center leading-tight">
                        ${partenaire.name.split(' ').map(word => word.charAt(0)).join('')}
                      </div>
                    </div>
                  `;
                            }
                          }}
                        />
                      </div>

                      {/* Nom de l'université - discret */}
                      <div className="mt-2 text-center">
                        <span className="text-xs text-white/90 font-medium leading-tight block max-w-20">
                          {partenaire.name}
                        </span>
                        <span className="text-xs text-white/70 block mt-1">
                          {partenaire.pays}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <h1 className="text-6xl md:text-8xl font-black leading-tight mb-4 animate-fade-in-up relative" style={{ animationDelay: '0.7s' }}>
              {/* Style 3D Blanc */}
              <div className="relative inline-block">
                {/* Texte principal blanc */}
                <div className="relative text-white"
                  style={{
                    fontFamily: 'Arial Black, sans-serif',
                    letterSpacing: '2px',
                    transform: 'perspective(500px) rotateX(5deg)',
                    textShadow: '0 0 0px transparent'
                  }}>
                  CoSTIC 2026
                </div>

                {/* Effet 3D blanc en bas */}
                <div className="absolute inset-0 text-white/60 transform translate-x-2 translate-y-2"
                  style={{
                    fontFamily: 'Arial Black, sans-serif',
                    letterSpacing: '2px',
                    transform: 'perspective(500px) rotateX(5deg) translateX(2px) translateY(2px)'
                  }}>
                  CoSTIC 2026
                </div>

                {/* Effet 3D blanc plus profond */}
                <div className="absolute inset-0 text-white/40 transform translate-x-4 translate-y-4"
                  style={{
                    fontFamily: 'Arial Black, sans-serif',
                    letterSpacing: '2px',
                    transform: 'perspective(500px) rotateX(5deg) translateX(4px) translateY(4px)'
                  }}>
                  CoSTIC 2026
                </div>

                {/* Effet 3D blanc le plus profond */}
                <div className="absolute inset-0 text-white/20 transform translate-x-6 translate-y-6"
                  style={{
                    fontFamily: 'Arial Black, sans-serif',
                    letterSpacing: '2px',
                    transform: 'perspective(500px) rotateX(5deg) translateX(6px) translateY(6px)'
                  }}>
                  CoSTIC 2026
                </div>
              </div>
            </h1>

            <div className="flex flex-col items-center space-y-4 text-neutral-100 mb-8 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
              <div className="flex justify-center items-center space-x-6 text-neutral-100">
                <span className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-xl font-semibold">{t('date_value')}</span>
                </span>
                <span className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-xl font-semibold">{t('place_value')}</span>
                </span>
              </div>

              <div className="text-center max-w-4xl">
                <p className="text-2xl md:text-3xl text-white font-bold">
                  « {t('theme_value')} »
                </p>
              </div>

            </div>




            {/* ESATIC Stylisé */}
            <div className="mb-12 animate-fade-in-up" style={{ animationDelay: '1.0s' }}>
              <div className="relative inline-block">
                {/* Effet de halo bleu */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500 rounded-full blur-xl opacity-40"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 via-blue-500/30 to-blue-400/30 rounded-full blur-lg opacity-60"></div>

                {/* Texte principal */}
                <div className="relative">
                  <p className="text-2xl md:text-3xl font-bold tracking-wider">
                    <span className="bg-gradient-to-r from-blue-400 via-white to-blue-500 bg-clip-text text-transparent">
                      Organisé par L
                    </span>
                    <span className="text-white font-extrabold relative">
                      ASTIC
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 opacity-20 blur-sm"></div>
                    </span>
                  </p>
                </div>

                {/* Ligne décorative bleue */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full"></div>
              </div>
            </div>

            <div className="mb-12 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
              <CountdownTimer />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
              <a href="#soumission" className="bg-accent text-white font-bold py-4 px-10 rounded-full hover:bg-accent/90 transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-sans w-full sm:w-auto">
                {t('hero_submit')}
              </a>
              <a href="#inscription" className="bg-white text-primary font-bold py-4 px-10 rounded-full hover:bg-neutral-200 transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-sans w-full sm:w-auto">
                {t('hero_register')}
              </a>
              <a href="#partenariat" className="bg-secondary text-white font-bold py-4 px-10 rounded-full hover:bg-secondary/90 transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-sans w-full sm:w-auto">
                {t('hero_partner')}
              </a>
            </div>
          </div>
        </section>


        {/* Contexte et Justification Section */}
        <Section title={t('context_title')}>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <Animated animationClass="animate-slide-in-left">
              <h3 className="text-3xl font-bold text-primary mb-4 font-sans">{t('context_heading')}</h3>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                {t('context_paragraph')}
              </p>
              <blockquote className="border-l-4 border-secondary pl-6 italic bg-neutral-100 p-4 rounded-r-lg">
                <p className="text-lg text-neutral-700 leading-relaxed">
                  {t('context_quote')}
                </p>
              </blockquote>
            </Animated>
            <Animated animationClass="animate-slide-in-right" delay={150}>
              <div className="hidden md:flex justify-center items-center">
                <div className="relative w-full max-w-sm h-80">
                  <div className="absolute top-0 -left-4 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                  <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" style={{ animationDelay: '2s' }}></div>
                  <div className="absolute -bottom-8 left-20 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" style={{ animationDelay: '4s' }}></div>
                  <div className="relative flex justify-center items-center h-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-48 h-48 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m0 18a9 9 0 009-9m-9 9a9 9 0 00-9-9m18 9a9 9 0 01-18 0m18 0A9 9 0 003 12m18 0V3" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" fill="#0D47A1" stroke="none" />
                      <circle cx="3.5" cy="12" r="1.5" fill="#1976D2" />
                      <circle cx="20.5" cy="12" r="1.5" fill="#1976D2" />
                      <circle cx="12" cy="3.5" r="1.5" fill="#1976D2" />
                      <circle cx="12" cy="20.5" r="1.5" fill="#1976D2" />
                    </svg>
                  </div>
                </div>
              </div>
            </Animated>
          </div>
        </Section>

        {/* Timeline Section */}
        <Section title={t('timeline_title')} className="bg-neutral-50">
          <AdvancedCalendar events={timelineEvents} />
        </Section>

        {/* Lieu et Date Section */}
        <Section title={t('place_title')} className="bg-neutral-50">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <Animated animationClass="animate-slide-in-left">
              <div className="text-left">
                <div className="flex items-center mb-6">
                  <div className="bg-secondary/10 text-primary rounded-full p-3 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary font-sans">{t('date_label')}</h3>
                    <p className="text-lg text-neutral-600">{t('date_value')}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-secondary/10 text-primary rounded-full p-3 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary font-sans">{t('place_label')}</h3>
                    <p className="text-lg text-neutral-600">{t('place_value')}</p>
                  </div>
                </div>
              </div>
            </Animated>
            <Animated animationClass="animate-slide-in-right" delay={150}>
              <div className="rounded-xl overflow-hidden shadow-xl h-72 border-4 border-white group">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.19532889966!2d-3.999518685686034!3d5.388839936551699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1934399f36f47%3A0x774e9892f39234b3!2sESATIC!5e0!3m2!1sfr!2sci!4v1655823521345!5m2!1sfr!2sci"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Carte de l'ESATIC"
                  className="transition-transform duration-500 group-hover:scale-105">
                </iframe>
              </div>
            </Animated>
          </div>
        </Section>

        {/* Objectifs Section */}
        <Section title={t('goals_title')}>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
            <Animated animationClass="animate-slide-in-left">
              <div className="bg-primary text-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 -rotate-1">
                <h3 className="text-3xl font-bold mb-4 font-sans">{t('general_objective_title')}</h3>
                <p className="text-neutral-200 text-lg leading-relaxed">
                  {t('general_objective_text')}
                </p>
              </div>
            </Animated>
            <Animated animationClass="animate-slide-in-right" delay={150}>
              <div>
                <h3 className="text-3xl font-bold mb-6 text-primary font-sans">{t('specific_objectives_title')}</h3>
                <ul className="space-y-4">
                  {[t('so_1'), t('so_2'), t('so_3'), t('so_4')].map((obj, index) => (
                    <Animated key={obj} animationClass="animate-slide-in-right" delay={150 + index * 100}>
                      <li className="flex items-start">
                        <svg className="w-7 h-7 text-accent mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <span className="text-neutral-700 dark:text-neutral-200 text-lg">{obj}</span>
                      </li>
                    </Animated>
                  ))}
                </ul>
              </div>
            </Animated>
          </div>
        </Section>

        {/* Appel à Communications Section */}
        <div id="soumission">
          <Section title={t('cfp_title')} className="bg-neutral-50">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
              <Animated animationClass="animate-slide-in-left">
                <div className="bg-neutral-100 p-8 rounded-xl border border-neutral-200 h-full">
                  <h3 className="text-3xl font-bold text-primary mb-4 font-sans">{t('theme_general_title')}</h3>
                  <p className="text-xl text-neutral-600 italic mb-8">
                    {t('theme_general_text')}
                  </p>

                  <h3 className="text-2xl font-bold text-primary mb-4 font-sans">{t('submission_modalities_title')}</h3>
                  <ul className="space-y-4 mb-8">
                    {[
                      { title: t('modality_format_title'), desc: t('modality_format_desc'), icon: <svg className="w-6 h-6 text-secondary mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg> },
                      { title: t('modality_lang_title'), desc: t('modality_lang_desc'), icon: <svg className="w-6 h-6 text-secondary mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m4-2v2M3 17h16M21 17v-2a2 2 0 00-2-2H5a2 2 0 00-2 2v2m18 0v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2m18 0H3" /></svg> },
                      { title: t('modality_pub_title'), desc: t('modality_pub_desc'), icon: <svg className="w-6 h-6 text-secondary mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-9.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-9.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222 4 2.222V20" /></svg> }
                    ].map(item => (
                      <li key={item.title} className="flex items-start">
                        {item.icon}
                        <div>
                          <h4 className="font-bold text-neutral-800 dark:text-neutral-100 font-sans">{item.title}</h4>
                          <p className="text-neutral-600 dark:text-neutral-200">{item.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                  {/* Modèles de soumission */}
                  <div className="mt-8 p-4 bg-white rounded-lg border border-neutral-200">
                    <h4 className="font-bold text-neutral-800 font-sans mb-3">{t('models_title')}</h4>
                    <p className="text-neutral-600 text-sm mb-4">{t('models_desc')}</p>
                    <div className="flex flex-wrap gap-3">
                      <a
                        href="/templates/exemple_CoSTIC2026.doc"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={async () => {
                          try {
                            await addDoc(collection(db, 'templateDownloads'), {
                              format: 'docx',
                              path: '/templates/exemple_CoSTIC2026.doc',
                              userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'unknown',
                              downloadedAt: serverTimestamp()
                            });
                          } catch (e) {
                            console.error('Erreur de tracking modèle DOCX', e);
                          }
                        }}
                        className="inline-flex items-center gap-2 bg-primary text-white font-semibold py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors text-sm"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M19 2H8a2 2 0 0 0-2 2v3h2V4h11v16H8v-3H6v3a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z" /><path d="M13 12H4.83l2.58-2.59L6 8l-5 5 5 5 1.41-1.41L4.83 14H13v-2Z" /></svg>
                        {t('model_word')}
                      </a>
                      <a
                        href="/templates/CoSTIC_2026_latex_template.zip"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={async () => {
                          try {
                            await addDoc(collection(db, 'templateDownloads'), {
                              format: 'latex',
                              path: '/templates/CoSTIC_2026_latex_template.zip',
                              userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'unknown',
                              downloadedAt: serverTimestamp()
                            });
                          } catch (e) {
                            console.error('Erreur de tracking modèle LaTeX', e);
                          }
                        }}
                        className="inline-flex items-center gap-2 bg-secondary text-white font-semibold py-2 px-4 rounded-lg hover:bg-secondary/90 transition-colors text-sm"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M14 2H6a2 2 0 0 0-2 2v12h2V4h8V2Zm4 4h-8a2 2 0 0 0-2 2v12h10a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Zm0 12H8V8h10v10Z" /></svg>
                        {t('model_latex')}
                      </a>
                      <a
                        href="/templates/track_version_beta.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-accent text-white font-semibold py-2 px-4 rounded-lg hover:bg-accent/90 transition-colors text-sm"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        {t('track_download')}
                      </a>
                    </div>
                  </div>
                  {/* <a href="http://costic2026.esatic.ci" target="_blank" rel="noopener noreferrer" className="w-full inline-block text-center bg-secondary text-white font-bold py-3 px-8 rounded-lg hover:bg-primary transition-all duration-300 text-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 font-sans">
                    Soumettre via la Plateforme Officielle
                  </a> */}
                </div>
              </Animated>
              <Animated animationClass="animate-slide-in-right" delay={150}>
                <div className="bg-white p-8 rounded-xl shadow-2xl">
                  <h3 className="text-3xl font-bold text-primary mb-6 font-sans">{t('submission_form_title')}</h3>
                  <form onSubmit={handleArticleSubmit}>
                    <div className="space-y-5">
                      <div>
                        <label htmlFor="authorName" className={labelStyle}>{t('label_author_name')}</label>
                        <input type="text" id="authorName" value={submission.authorName} onChange={handleSubmissionChange} className={inputStyle} required disabled={isSubmitting} />
                      </div>
                      <div>
                        <label htmlFor="authorEmail" className={labelStyle}>{t('label_author_email')}</label>
                        <input type="email" id="authorEmail" value={submission.authorEmail} onChange={handleSubmissionChange} className={inputStyle} required disabled={isSubmitting} />
                      </div>
                      <div>
                        <label htmlFor="affiliation" className={labelStyle}>{t('label_affiliation')}</label>
                        <input type="text" id="affiliation" value={submission.affiliation} onChange={handleSubmissionChange} className={inputStyle} disabled={isSubmitting} />
                      </div>
                      <div>
                        <label htmlFor="articleTitle" className={labelStyle}>{t('label_article_title')}</label>
                        <input type="text" id="articleTitle" value={submission.articleTitle} onChange={handleSubmissionChange} className={inputStyle} required disabled={isSubmitting} />
                      </div>
                      <div>
                        <label htmlFor="themeSelect" className={labelStyle}>{t('label_theme_select')}</label>
                        <select id="themeSelect" value={submission.themeSelect} onChange={handleSubmissionChange} className={inputStyle} disabled={isSubmitting}>
                          <option value="">{t('theme_placeholder')}</option>
                          {conferenceTracks.map(track => <option key={track.title} value={track.title}>{track.title}</option>)}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="fileUpload" className={labelStyle}>{t('label_file_upload')}</label>
                        <input type="file" id="fileUpload" onChange={handleFileChange} accept=".pdf" className="w-full text-sm text-neutral-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-secondary/10 file:text-primary hover:file:bg-secondary/20 cursor-pointer font-body" required disabled={isSubmitting} />
                      </div>
                      <button type="submit" disabled={isSubmitting} className="w-full bg-primary text-white font-bold py-4 px-8 rounded-lg hover:bg-primary/90 transition-all duration-300 text-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 font-sans disabled:bg-neutral-400 disabled:cursor-not-allowed flex justify-center items-center">
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            {t('submitting_text')}
                          </>
                        ) : t('submit_article_btn')}
                      </button>
                      {submissionStatus && <p className={`mt-4 text-center text-sm ${submissionStatus.startsWith('Erreur') || submissionStatus.startsWith('Error') ? 'text-red-600' : 'text-green-600'}`}>{submissionStatus}</p>}
                    </div>
                  </form>
                </div>
              </Animated>
            </div>
          </Section>
        </div>

        {/* Inscription & Paiement Section */}
        <div id="inscription">
          <Section title={t('registration_title')}>
            <Animated animationClass="animate-slide-in-bottom">
              <div className="max-w-5xl mx-auto p-8 bg-white dark:bg-neutral-900 rounded-xl shadow-2xl border border-neutral-200 dark:border-neutral-700">
                <p className="text-center text-lg text-neutral-600 mb-10 max-w-2xl mx-auto">
                  {t('registration_intro')}
                </p>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <form onSubmit={handleRegistrationSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className={labelStyle}>{t('label_name')}</label>
                      <input type="text" id="name" value={registration.name} onChange={handleRegistrationChange} className={inputStyle} required disabled={isRegistering} />
                    </div>
                    <div>
                      <label htmlFor="email" className={labelStyle}>{t('label_email')}</label>
                      <input type="email" id="email" value={registration.email} onChange={handleRegistrationChange} className={inputStyle} required disabled={isRegistering} />
                    </div>
                    <div>
                      <label htmlFor="participantType" className={labelStyle}>{t('label_participant_type')}</label>
                      <select id="participantType" value={registration.participantType} onChange={handleRegistrationChange} className={inputStyle} disabled={isRegistering}>
                        <option value="chercheur">{t('option_researcher')}</option>
                        <option value="etudiant">{t('option_student')}</option>
                      </select>
                    </div>
                  </form>

                  <div className="bg-neutral-100 p-8 rounded-xl border border-neutral-200">
                    <h3 className="text-2xl font-bold text-primary mb-6 border-b border-neutral-200 pb-4 font-sans">{t('summary_title')}</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center text-lg">
                        <span className="text-neutral-600">{t('summary_category')}</span>
                        <span className="font-bold text-primary font-sans">{registration.participantType === 'etudiant' ? 'Étudiant' : 'Chercheur'}</span>
                      </div>
                      <div className="flex justify-between items-center text-3xl pt-4">
                        <span className="text-neutral-600 font-sans">{t('summary_total')}</span>
                        <div className="text-right">
                          <span className="font-extrabold text-primary font-sans">{registration.participantType === 'etudiant' ? '75€' : '150€'}</span>
                          <p className="text-sm text-neutral-500 font-normal">{registration.participantType === 'etudiant' ? '(~49 000 XOF)' : '(~98 000 XOF)'}</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-8">
                      <button onClick={handleRegistrationSubmit} disabled={isRegistering} className="w-full bg-accent text-white font-bold py-4 px-10 rounded-lg hover:bg-accent/90 transition-all duration-300 text-lg inline-flex items-center justify-center shadow-md hover:shadow-lg transform hover:-translate-y-0.5 font-sans disabled:bg-neutral-400 disabled:cursor-not-allowed">
                        {isRegistering ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                            {t('registering_text')}
                          </>
                        ) : (
                          <>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
                            {t('pay_btn')}
                          </>
                        )}
                      </button>
                      {registrationStatus && <p className={`mt-4 text-center text-sm ${registrationStatus.startsWith('Erreur') || registrationStatus.startsWith('Error') ? 'text-red-600' : 'text-green-600'}`}>{registrationStatus}</p>}
                      <p className="text-xs text-neutral-500 text-center mt-4">{t('payment_note')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Animated>
          </Section>
        </div>

        {/* Participants Cibles Section - Comité Scientifique */}
        <div id="comite-scientifique">
          <Section title={t('participants_title')} className="bg-neutral-50">
            <Animated animationClass="animate-slide-in-bottom">
              <div className="mb-8 text-center">
                <h3 className="text-2xl font-bold text-primary mb-4 font-sans">{t('committee_title')}</h3>
                <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                  {t('committee_paragraph')}
                </p>
              </div>
            </Animated>
            <ComiteCarousel />

            {/* Répartition Thématique du Comité */}
            <Animated animationClass="animate-slide-in-bottom" delay={100}>
              <div className="mt-16">
                <div className="text-center mb-8">
                  <h4 className="text-xl font-bold text-primary mb-4 font-sans">{t('committee_thematic_title')}</h4>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                  {/* Mathématiques & Recherche Opérationnelle */}
                  <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary">
                    <h5 className="font-bold text-primary mb-3 text-sm">{t('thematic_math')}</h5>
                    <p className="text-sm text-neutral-600">{t('thematic_math_responsibles')}</p>
                  </div>

                  {/* Intelligence Artificielle & Data Science */}
                  <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-secondary">
                    <h5 className="font-bold text-secondary mb-3 text-sm">{t('thematic_ai')}</h5>
                    <p className="text-sm text-neutral-600">{t('thematic_ai_responsibles')}</p>
                  </div>

                  {/* Réseaux & Télécommunications */}
                  <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-accent">
                    <h5 className="font-bold text-accent mb-3 text-sm">{t('thematic_networks')}</h5>
                    <p className="text-sm text-neutral-600">{t('thematic_networks_responsibles')}</p>
                  </div>

                  {/* Cybersécurité & Systèmes d'Information */}
                  <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-red-500">
                    <h5 className="font-bold text-red-500 mb-3 text-sm">{t('thematic_cyber')}</h5>
                    <p className="text-sm text-neutral-600">{t('thematic_cyber_responsibles')}</p>
                  </div>

                  {/* Gouvernance & Politiques Numériques */}
                  <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
                    <h5 className="font-bold text-green-500 mb-3 text-sm">{t('thematic_governance')}</h5>
                    <p className="text-sm text-neutral-600">{t('thematic_governance_responsibles')}</p>
                  </div>

                  {/* Coordination Scientifique & Évaluation */}
                  <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-500">
                    <h5 className="font-bold text-purple-500 mb-3 text-sm">{t('thematic_coordination')}</h5>
                    <p className="text-sm text-neutral-600">{t('thematic_coordination_responsibles')}</p>
                  </div>
                </div>
              </div>
            </Animated>

            {/* Partenariats et Sponsoring */}
            <Animated animationClass="animate-slide-in-bottom" delay={200}>
              <div className="mt-16">
                <div className="text-center mb-12">
                  <h3 className="text-2xl font-bold text-primary mb-4 font-sans">{t('partnerships_title')}</h3>
                  <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                    {t('partnerships_paragraph')}
                  </p>
                </div>

                <PartenairesCarousel />

                {/* Détails des partenaires */}
                <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                  <div className="text-center">
                    <h5 className="font-bold text-neutral-800 mb-2 font-sans">{t('partner_card_1_title')}</h5>
                    <p className="text-sm text-neutral-600">
                      {t('partner_card_1_desc')}
                    </p>
                  </div>
                  <div className="text-center">
                    <h5 className="font-bold text-neutral-800 mb-2 font-sans">{t('partner_card_2_title')}</h5>
                    <p className="text-sm text-neutral-600">
                      {t('partner_card_2_desc')}
                    </p>
                  </div>
                  <div className="text-center">
                    <h5 className="font-bold text-neutral-800 mb-2 font-sans">{t('partner_card_3_title')}</h5>
                    <p className="text-sm text-neutral-600">
                      {t('partner_card_3_desc')}
                    </p>
                  </div>
                </div>
              </div>
            </Animated>
          </Section>
        </div>

        {/* Publications & Actes Section */}
        <Section title={t('publications_title')}>
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
            <Animated animationClass="animate-slide-in-left">
              <div className="bg-primary text-white p-10 rounded-xl flex flex-col items-center text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                </div>
                <h3 className="text-3xl font-bold mb-4 font-sans">{t('proceedings_title')}</h3>
                <p className="text-neutral-200 text-lg mb-6 max-w-md">
                  {t('proceedings_text')}
                </p>
                <a href="#" className="bg-neutral-600 text-white font-bold py-3 px-8 rounded-lg text-lg cursor-not-allowed opacity-75 font-sans">
                  {t('proceedings_soon')}
                </a>
              </div>
            </Animated>
            <Animated animationClass="animate-slide-in-right" delay={150}>
              <div className="bg-white dark:bg-neutral-900 p-10 rounded-xl shadow-lg border border-neutral-100 dark:border-neutral-700 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-2.236 9.168-5.514C18.358 1.84 18.668 1.5 19 1.5v1.5a1.5 1.5 0 01-1.5 1.5H16v2.083a6.001 6.001 0 00-6 6H6.436z" /></svg>
                </div>
                <h3 className="text-3xl font-bold text-primary mb-4 font-sans">{t('journal_title')}</h3>
                <p className="text-neutral-700 text-lg max-w-md">
                  {t('journal_text')}
                </p>
              </div>
            </Animated>
          </div>
        </Section>

        {/* Expected Outcomes Section */}
        <Section title={t('outcomes_title')} className="bg-neutral-50">
          <ResultatsCarousel />
        </Section>

        {/* Partenariat Section */}
        <div id="partenariat">
          <Section className="bg-white">
            <PartenaireForm />
          </Section>
        </div>

        {/* À Propos Section */}
        <div id="a-propos">
          <Section title={t('section_about_title')} className="bg-neutral-50">
            <Animated animationClass="animate-slide-in-bottom">
              <p className="text-center text-lg text-neutral-600 mb-12 max-w-3xl mx-auto">
                {t('about_paragraph')}
              </p>
            </Animated>
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
              {[{
                title: "Notre Mission",
                description: "Valoriser les travaux des chercheurs, stimuler l'innovation et favoriser les échanges entre le monde académique et le secteur privé pour répondre aux défis du continent.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
                borderColor: 'border-secondary'
              }, {
                title: "Notre Vision",
                description: "Devenir le carrefour de référence pour la recherche en TIC en Afrique, où les idées novatrices se transforment en solutions concrètes pour un développement durable.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" /></svg>,
                borderColor: 'border-primary'
              }, {
                title: "Nos Valeurs",
                description: "Nous promouvons l'Excellence scientifique, le Partage des connaissances, l'Innovation technologique et la Collaboration intersectorielle.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
                borderColor: 'border-secondary'
              }].map((card, index) => (
                <Animated key={card.title} animationClass="animate-slide-in-bottom" delay={index * 150}>
                  <div className={`bg-white h-full p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 ${card.borderColor} text-center`}>
                    <div className="inline-block bg-secondary/10 text-primary p-4 rounded-full mb-4">
                      {card.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-3 font-sans">{card.title}</h3>
                    <p className="text-neutral-600 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </Animated>
              ))}
            </div>
          </Section>
        </div>

      </main>
      <Footer />
    </div>
  );
}

export default App;