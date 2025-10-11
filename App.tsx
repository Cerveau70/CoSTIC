import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Section from './components/Section';
import TimelineItem from './components/TimelineItem';
import ComiteCarousel from './components/ComiteCarousel';
import PartenairesCarousel from './components/PartenairesCarousel';
import BudgetAnimation from './components/BudgetAnimation';
import ResultatsCarousel from './components/ResultatsCarousel';
import { TimelineEvent } from './types';
import { db, storage } from './firebase';
import { collection, addDoc, serverTimestamp, updateDoc, doc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { usePaystackPayment } from 'react-paystack';



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
      const eventDate = new Date('2026-05-01T00:00:00Z').getTime();
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


// Mock data for timeline events
const timelineEvents: TimelineEvent[] = [
  { date: 'Janvier 2026', description: 'Lancement de l’appel à communications.', icon: '📢' },
  { date: '28 Février 2026', description: 'Soumission des articles.', icon: '📄' },
  { date: '10 Mars 2026', description: 'Notification aux auteurs.', icon: '📧' },
  { date: '20 Avril 2026', description: 'Soumission des versions finales.', icon: '✅' },
  { date: 'Mai 2026', description: 'Colloque (ESATIC – Abidjan).', icon: '🎉', isHighlighted: true },
];

const conferenceThemes = [
  { title: 'Intelligence Artificielle, Big Data et Machine Learning' },
  { title: 'Cybersécurité et Résilience des Réseaux' },
  { title: 'Internet des Objets (IoT) et Systèmes Embarqués' },
  { title: 'Cloud Computing et Infrastructures Numériques' },
  { title: 'Transformation digitale et gouvernance numérique' },
  { title: 'Technologies éducatives et pédagogie numérique' },
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

  return (
    <div className="bg-neutral-100 font-body">
      <Header />
      <main>
        {/* Hero Section */}
        <section id="accueil" className="relative text-white pt-32 pb-24 text-center overflow-hidden flex flex-col items-center justify-center min-h-screen">
          <div className="absolute inset-0 hero-bg"></div>
          <div className="absolute inset-0 bg-primary/70"></div>
          <div className="container mx-auto px-6 relative z-10">

            <h1 className="text-6xl md:text-8xl font-extrabold leading-tight mb-4 animate-fade-in-up font-sans" style={{ animationDelay: '0.1s' }}>CoSTIC 2026</h1>
            <p className="text-xl md:text-2xl text-neutral-200 mb-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>Colloque Scientifique sur les Technologies de l'Information et de la Communication</p>

            <div className="flex justify-center items-center space-x-6 text-neutral-100 mb-8 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <span className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>Mai 2026</span>
              <span className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>Abidjan, Côte d'Ivoire</span>
            </div>
            <p className="text-lg text-neutral-200 mb-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>Organisé par l'ESATIC</p>

            <div className="mb-12 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
              <CountdownTimer />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
              <a href="#soumission" className="bg-accent text-white font-bold py-4 px-10 rounded-full hover:bg-accent/90 transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-sans w-full sm:w-auto">
                Soumettre un article
              </a>
              <a href="#inscription" className="bg-white text-primary font-bold py-4 px-10 rounded-full hover:bg-neutral-200 transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-sans w-full sm:w-auto">
                S'inscrire maintenant
              </a>
            </div>
          </div>
        </section>

        {/* À Propos Section */}
        <div id="a-propos">
          <Section title="À Propos du CoSTIC 2026" className="bg-neutral-50">
            <Animated animationClass="animate-slide-in-bottom">
              <p className="text-center text-lg text-neutral-600 mb-12 max-w-3xl mx-auto">
                Le Colloque Scientifique sur les TIC (CoSTIC) est une plateforme d'excellence visant à catalyser l'innovation numérique et à renforcer la recherche scientifique en Afrique.
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

        {/* Contexte et Justification Section */}
        <Section title="Contexte et Justification">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <Animated animationClass="animate-slide-in-left">
              <h3 className="text-3xl font-bold text-primary mb-4 font-sans">Une Plateforme pour l'Avenir Numérique Africain</h3>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Le numérique occupe une place centrale dans la transformation économique et sociale en Afrique. La Côte d’Ivoire, à travers l’ESATIC et ses partenaires, souhaite renforcer la production scientifique et la valorisation des résultats de recherche dans le domaine des TIC.
              </p>
              <blockquote className="border-l-4 border-secondary pl-6 italic bg-neutral-100 p-4 rounded-r-lg">
                <p className="text-lg text-neutral-700 leading-relaxed">
                  C’est dans cette dynamique qu’est organisé le Colloque Scientifique sur les TIC (CoSTIC 2026), un carrefour d'innovation qui se tiendra en mai 2026 à Abidjan.
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

        {/* Lieu et Date Section */}
        <Section title="Lieu et Date" className="bg-neutral-50">
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
                    <h3 className="text-xl font-bold text-primary font-sans">Date</h3>
                    <p className="text-lg text-neutral-600">Mai 2026</p>
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
                    <h3 className="text-xl font-bold text-primary font-sans">Lieu</h3>
                    <p className="text-lg text-neutral-600">ESATIC, Abidjan, Côte d'Ivoire</p>
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
        <Section title="Objectifs du Colloque">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
            <Animated animationClass="animate-slide-in-left">
              <div className="bg-primary text-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 -rotate-1">
                <h3 className="text-3xl font-bold mb-4 font-sans">Objectif Général</h3>
                <p className="text-neutral-200 text-lg leading-relaxed">
                  Mettre en place une plateforme scientifique et technologique d’échanges sur les TIC, permettant de valoriser les travaux des chercheurs et de stimuler l’innovation.
                </p>
              </div>
            </Animated>
            <Animated animationClass="animate-slide-in-right" delay={150}>
              <div>
                <h3 className="text-3xl font-bold mb-6 text-primary font-sans">Objectifs Spécifiques</h3>
                <ul className="space-y-4">
                  {[
                    'Diffuser les résultats récents de la recherche dans le domaine des TIC.',
                    'Favoriser la collaboration interuniversitaire et avec le secteur privé.',
                    'Mettre en avant les jeunes chercheurs (Masters, Doctorants).',
                    'Promouvoir les TIC comme leviers du développement durable.',
                    'Renforcer la visibilité de l’ESATIC dans l’espace scientifique international.',
                  ].map((obj, index) => (
                    <Animated key={obj} animationClass="animate-slide-in-right" delay={150 + index * 100}>
                      <li className="flex items-start">
                        <svg className="w-7 h-7 text-accent mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <span className="text-neutral-700 text-lg">{obj}</span>
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
          <Section title="Appel à Communications" className="bg-neutral-50">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
              <Animated animationClass="animate-slide-in-left">
                <div className="bg-neutral-100 p-8 rounded-xl border border-neutral-200 h-full">
                  <h3 className="text-3xl font-bold text-primary mb-4 font-sans">Thème Général</h3>
                  <p className="text-xl text-neutral-600 italic mb-8">
                    « Innovations numériques et transformation digitale pour un développement durable en Afrique »
                  </p>

                  <h3 className="text-2xl font-bold text-primary mb-4 font-sans">Modalités de Soumission</h3>
                  <ul className="space-y-4 mb-8">
                    {[
                      { title: "Format", desc: "Résumé étendu de 5 pages maximum.", icon: <svg className="w-6 h-6 text-secondary mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg> },
                      { title: "Langues", desc: "Français ou Anglais.", icon: <svg className="w-6 h-6 text-secondary mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m4-2v2M3 17h16M21 17v-2a2 2 0 00-2-2H5a2 2 0 00-2 2v2m18 0v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2m18 0H3" /></svg> },
                      { title: "Publication", desc: "Actes disponibles en ligne et sélection pour une revue internationale.", icon: <svg className="w-6 h-6 text-secondary mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-9.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-9.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222 4 2.222V20" /></svg> }
                    ].map(item => (
                      <li key={item.title} className="flex items-start">
                        {item.icon}
                        <div>
                          <h4 className="font-bold text-neutral-800 font-sans">{item.title}</h4>
                          <p className="text-neutral-600">{item.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <a href="http://costic2026.esatic.ci" target="_blank" rel="noopener noreferrer" className="w-full inline-block text-center bg-secondary text-white font-bold py-3 px-8 rounded-lg hover:bg-primary transition-all duration-300 text-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 font-sans">
                    Soumettre via la Plateforme Officielle
                  </a>
                </div>
              </Animated>
              <Animated animationClass="animate-slide-in-right" delay={150}>
                <div className="bg-white p-8 rounded-xl shadow-2xl">
                  <h3 className="text-3xl font-bold text-primary mb-6 font-sans">Soumission d'Article</h3>
                  <form onSubmit={handleArticleSubmit}>
                    <div className="space-y-5">
                      <div>
                        <label htmlFor="authorName" className={labelStyle}>Nom de l'auteur principal*</label>
                        <input type="text" id="authorName" value={submission.authorName} onChange={handleSubmissionChange} className={inputStyle} required disabled={isSubmitting} />
                      </div>
                      <div>
                        <label htmlFor="authorEmail" className={labelStyle}>E-mail*</label>
                        <input type="email" id="authorEmail" value={submission.authorEmail} onChange={handleSubmissionChange} className={inputStyle} required disabled={isSubmitting} />
                      </div>
                      <div>
                        <label htmlFor="affiliation" className={labelStyle}>Affiliation</label>
                        <input type="text" id="affiliation" value={submission.affiliation} onChange={handleSubmissionChange} className={inputStyle} disabled={isSubmitting} />
                      </div>
                      <div>
                        <label htmlFor="articleTitle" className={labelStyle}>Titre de l'article*</label>
                        <input type="text" id="articleTitle" value={submission.articleTitle} onChange={handleSubmissionChange} className={inputStyle} required disabled={isSubmitting} />
                      </div>
                      <div>
                        <label htmlFor="themeSelect" className={labelStyle}>Thématique</label>
                        <select id="themeSelect" value={submission.themeSelect} onChange={handleSubmissionChange} className={inputStyle} disabled={isSubmitting}>
                          <option value="">Choisissez une thématique...</option>
                          {conferenceThemes.map(theme => <option key={theme.title} value={theme.title}>{theme.title}</option>)}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="fileUpload" className={labelStyle}>Fichier (PDF, 5 pages max)*</label>
                        <input type="file" id="fileUpload" onChange={handleFileChange} accept=".pdf" className="w-full text-sm text-neutral-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-secondary/10 file:text-primary hover:file:bg-secondary/20 cursor-pointer font-body" required disabled={isSubmitting} />
                      </div>
                      <button type="submit" disabled={isSubmitting} className="w-full bg-primary text-white font-bold py-4 px-8 rounded-lg hover:bg-primary/90 transition-all duration-300 text-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 font-sans disabled:bg-neutral-400 disabled:cursor-not-allowed flex justify-center items-center">
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Soumission en cours...
                          </>
                        ) : "Soumettre l'article"}
                      </button>
                      {submissionStatus && <p className={`mt-4 text-center text-sm ${submissionStatus.startsWith('Erreur') ? 'text-red-600' : 'text-green-600'}`}>{submissionStatus}</p>}
                    </div>
                  </form>
                </div>
              </Animated>
            </div>
          </Section>
        </div>

        {/* Inscription & Paiement Section */}
        <div id="inscription">
          <Section title="Inscription & Paiement">
            <Animated animationClass="animate-slide-in-bottom">
              <div className="max-w-5xl mx-auto p-8 bg-white rounded-xl shadow-2xl border border-neutral-200">
                <p className="text-center text-lg text-neutral-600 mb-10 max-w-2xl mx-auto">
                  Finalisez votre participation en remplissant le formulaire ci-dessous. Les frais d'inscription donnent accès à toutes les sessions, aux pauses-café, au déjeuner et aux actes du colloque.
                </p>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <form onSubmit={handleRegistrationSubmit} className="space-y-6">
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
                  </form>

                  <div className="bg-neutral-100 p-8 rounded-xl border border-neutral-200">
                    <h3 className="text-2xl font-bold text-primary mb-6 border-b border-neutral-200 pb-4 font-sans">Résumé de l'inscription</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center text-lg">
                        <span className="text-neutral-600">Catégorie :</span>
                        <span className="font-bold text-primary font-sans">{registration.participantType === 'etudiant' ? 'Étudiant' : 'Chercheur'}</span>
                      </div>
                      <div className="flex justify-between items-center text-3xl pt-4">
                        <span className="text-neutral-600 font-sans">Total :</span>
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
                            Enregistrement...
                          </>
                        ) : (
                          <>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
                            Procéder au paiement
                          </>
                        )}
                      </button>
                      {registrationStatus && <p className={`mt-4 text-center text-sm ${registrationStatus.startsWith('Erreur') ? 'text-red-600' : 'text-green-600'}`}>{registrationStatus}</p>}
                      <p className="text-xs text-neutral-500 text-center mt-4">Paiement sécurisé via notre partenaire Paystack.</p>
                    </div>
                  </div>
                </div>
              </div>
            </Animated>
          </Section>
        </div>

        {/* Participants Cibles Section - Comité Scientifique */}
        <Section title="Participants Ciblés" className="bg-neutral-50">
          <Animated animationClass="animate-slide-in-bottom">
            <div className="mb-8 text-center">
              <h3 className="text-2xl font-bold text-primary mb-4 font-sans">Comité Scientifique</h3>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                Notre comité scientifique est composé d'experts reconnus dans le domaine des TIC
                provenant des plus grandes universités d'Afrique de l'Ouest et du Canada.
              </p>
            </div>
          </Animated>
          <ComiteCarousel />

          {/* Partenariats et Sponsoring */}
          <Animated animationClass="animate-slide-in-bottom" delay={200}>
            <div className="mt-16">
              <div className="text-center mb-12">
                <h3 className="text-2xl font-bold text-primary mb-4 font-sans">Partenariats et Sponsoring</h3>
                <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                  Nous sommes fiers de compter sur le soutien de partenaires institutionnels et du secteur privé
                  pour faire de ce colloque un événement d'excellence.
                </p>
              </div>

              <PartenairesCarousel />

              {/* Détails des partenaires */}
              <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                <div className="text-center">
                  <h5 className="font-bold text-neutral-800 mb-2 font-sans">Soutien Institutionnel</h5>
                  <p className="text-sm text-neutral-600">
                    Accompagnement dans l'organisation et la promotion du colloque
                  </p>
                </div>
                <div className="text-center">
                  <h5 className="font-bold text-neutral-800 mb-2 font-sans">Innovation Technologique</h5>
                  <p className="text-sm text-neutral-600">
                    Expertise technique et solutions technologiques pour l'événement
                  </p>
                </div>
                <div className="text-center">
                  <h5 className="font-bold text-neutral-800 mb-2 font-sans">Reconnaissance Internationale</h5>
                  <p className="text-sm text-neutral-600">
                    Validation scientifique et visibilité internationale
                  </p>
                </div>
              </div>
            </div>
          </Animated>
        </Section>

        {/* Timeline Section */}
        <Section title="Calendrier prévisionnel">
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 top-0 h-full w-0.5 bg-neutral-200" aria-hidden="true"></div>
              {timelineEvents.map((event, index) => (
                <TimelineItem key={event.date} event={event} isLast={index === timelineEvents.length - 1} />
              ))}
            </div>
          </div>
        </Section>

        {/* Budget Prévisionnel Section */}
        <Section title="Budget Prévisionnel" className="bg-neutral-50">
          <Animated animationClass="animate-slide-in-bottom">
            <p className="text-center text-lg text-neutral-600 -mt-8 mb-12 max-w-2xl mx-auto">
              Ce budget est une estimation qui sera affinée en fonction des partenariats et des financements obtenus.
            </p>
          </Animated>

          <BudgetAnimation />
        </Section>

        {/* Publications & Actes Section */}
        <Section title="Publications & Actes">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
            <Animated animationClass="animate-slide-in-left">
              <div className="bg-primary text-white p-10 rounded-xl flex flex-col items-center text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                </div>
                <h3 className="text-3xl font-bold mb-4 font-sans">Actes du Colloque</h3>
                <p className="text-neutral-200 text-lg mb-6 max-w-md">
                  Les actes complets du colloque seront disponibles en ligne, assurant une large diffusion des travaux.
                </p>
                <a href="#" className="bg-neutral-600 text-white font-bold py-3 px-8 rounded-lg text-lg cursor-not-allowed opacity-75 font-sans">
                  Consulter (prochainement)
                </a>
              </div>
            </Animated>
            <Animated animationClass="animate-slide-in-right" delay={150}>
              <div className="bg-white p-10 rounded-xl shadow-lg border border-neutral-100 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-2.236 9.168-5.514C18.358 1.84 18.668 1.5 19 1.5v1.5a1.5 1.5 0 01-1.5 1.5H16v2.083a6.001 6.001 0 00-6 6H6.436z" /></svg>
                </div>
                <h3 className="text-3xl font-bold text-primary mb-4 font-sans">Revue Internationale</h3>
                <p className="text-neutral-700 text-lg max-w-md">
                  Une sélection d'articles remarquables sera proposée pour une publication dans une revue scientifique de premier plan.
                </p>
              </div>
            </Animated>
          </div>
        </Section>

        {/* Expected Outcomes Section */}
        <Section title="Résultats Attendus" className="bg-neutral-50">
          <ResultatsCarousel />
        </Section>

      </main>
      <Footer />
    </div>
  );
}

export default App;