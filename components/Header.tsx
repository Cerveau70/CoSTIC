import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    {
      name: 'Accueil',
      href: '#accueil',
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
    },
    {
      name: 'À Propos',
      href: '#a-propos',
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    },
    {
      name: 'Soumission',
      href: '#soumission',
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
    },
    {
      name: 'Comité Scientifique',
      href: '#comite-scientifique',
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
    },
  ];

  return (
    <header className="bg-primary/80 backdrop-blur-lg shadow-md sticky top-0 z-50 font-sans">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#accueil" aria-label="Page d'accueil de CoSTIC 2026">
          <span className="text-2xl font-extrabold text-white tracking-wider">CoSTIC 2026</span>
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => (
            <a key={link.name} href={link.href} className="relative text-neutral-100 font-semibold hover:text-white transition-colors duration-300 group py-2 flex items-center">
              {link.icon}
              <span>{link.name}</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></span>
            </a>
          ))}
          <a href="/admin" className="text-neutral-300 hover:text-white text-sm transition-colors duration-300">
            Espace Administrateur
          </a>
        </nav>
        <div className="md:hidden flex items-center">
          <a href="/admin" className="text-neutral-300 hover:text-white text-sm mr-4">
            Espace Administrateur
          </a>
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none" aria-label="Ouvrir le menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-primary/95">
          <div className="px-6 pt-4 pb-4 flex flex-col items-center space-y-4">
            <nav className="w-full space-y-2 text-center">
              {navLinks.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center text-neutral-100 font-semibold rounded-md py-3 hover:bg-secondary/20 transition-colors duration-300"
                >
                  {link.icon}
                  <span>{link.name}</span>
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;