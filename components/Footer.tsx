import React, { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    setMessage('');

    try {
      // Sauvegarder l'email dans Firestore
      await addDoc(collection(db, "newsletter_subscriptions"), {
        email: email,
        subscribedAt: serverTimestamp(),
        source: 'website_footer'
      });

      setMessage('Merci pour votre inscription à notre newsletter !');
      setEmail('');
      setTimeout(() => setMessage(''), 5000);

    } catch (error) {
      console.error('Erreur lors de l\'inscription à la newsletter:', error);
      setMessage('Erreur lors de l\'inscription. Veuillez réessayer.');
      setTimeout(() => setMessage(''), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-primary text-neutral-200 font-body">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-black mb-2 relative" style={{ letterSpacing: '1px' }}>
              {/* Style 3D Blanc pour Footer */}
              <div className="relative inline-block">
                {/* Texte principal blanc */}
                <div className="relative text-white"
                  style={{
                    fontFamily: 'Arial Black, sans-serif',
                    letterSpacing: '1px',
                    transform: 'perspective(300px) rotateX(3deg)',
                    textShadow: '0 0 0px transparent'
                  }}>
                  CoSTIC 2026
                </div>

                {/* Effet 3D blanc en bas */}
                <div className="absolute inset-0 text-white/60 transform translate-x-1 translate-y-1"
                  style={{
                    fontFamily: 'Arial Black, sans-serif',
                    letterSpacing: '1px',
                    transform: 'perspective(300px) rotateX(3deg) translateX(1px) translateY(1px)'
                  }}>
                  CoSTIC 2026
                </div>

                {/* Effet 3D blanc plus profond */}
                <div className="absolute inset-0 text-white/40 transform translate-x-2 translate-y-2"
                  style={{
                    fontFamily: 'Arial Black, sans-serif',
                    letterSpacing: '1px',
                    transform: 'perspective(300px) rotateX(3deg) translateX(2px) translateY(2px)'
                  }}>
                  CoSTIC 2026
                </div>

                {/* Effet 3D blanc le plus profond */}
                <div className="absolute inset-0 text-white/20 transform translate-x-3 translate-y-3"
                  style={{
                    fontFamily: 'Arial Black, sans-serif',
                    letterSpacing: '1px',
                    transform: 'perspective(300px) rotateX(3deg) translateX(3px) translateY(3px)'
                  }}>
                  CoSTIC 2026
                </div>
              </div>
            </h3>
            <p className="text-sm text-neutral-300">Organisé par l'École Supérieure Africaine des TIC (ESATIC)</p>
          </div>
          <div className="text-sm">
            <h3 className="text-xl font-bold mb-2 text-white font-sans">Contact</h3>
            <p className="text-neutral-300">Secrétariat du Comité Scientifique</p>
            <a href="mailto:costic2026@esatic.edu.ci" className="text-secondary hover:text-white transition-colors duration-300 block">costic2026@esatic.edu.ci</a>
            <a href="http://costic2026.esatic.ci" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-white transition-colors duration-300">http://costic2026.esatic.ci</a>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2 text-white font-sans">Restez Informé</h3>
            <p className="text-sm text-neutral-300 mb-4">Abonnez-vous à notre newsletter pour recevoir les dernières actualités.</p>
            <form onSubmit={handleNewsletterSubmit}>
              <div className="flex items-center">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Votre adresse e-mail"
                  className="bg-secondary/20 border-2 border-secondary/50 rounded-l-lg px-4 py-3 w-full text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition"
                  required
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-secondary text-white px-4 py-3 rounded-r-lg hover:bg-secondary/90 transition-colors duration-300 border-2 border-secondary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <svg className="animate-spin h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  )}
                </button>
              </div>
              {message && <p className="text-green-400 text-sm mt-2">{message}</p>}
            </form>
          </div>
        </div>
        <div className="mt-10 border-t border-white/20 pt-8">
        </div>
      </div>
    </footer>
  );
};

export default Footer;