import React, { useState } from 'react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log(`Newsletter subscription for: ${email}`);
      setMessage('Merci pour votre inscription !');
      setEmail('');
      setTimeout(() => setMessage(''), 3000);
    }
  };

  return (
    <footer className="bg-primary text-neutral-200 font-body">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2 text-white font-sans">CoSTIC 2026</h3>
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
                <button type="submit" className="bg-secondary text-white px-4 py-3 rounded-r-lg hover:bg-secondary/90 transition-colors duration-300 border-2 border-secondary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </button>
              </div>
              {message && <p className="text-green-400 text-sm mt-2">{message}</p>}
            </form>
          </div>
        </div>
        <div className="mt-10 border-t border-white/20 pt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} CoSTIC. Tous droits réservés.</p>
            <p className="text-neutral-400">Conçu à Abidjan, Côte d'Ivoire.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;