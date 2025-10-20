import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { t, i18n } = useTranslation();

  const navLinks = [
    {
      name: t('Acceuil'),
      href: '#accueil',
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
    },
    {
      name: t('Soumission'),
      href: '#soumission',
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor"><path d="M9 3a1 1 0 011 1v1.382a7.001 7.001 0 015 6.618 1 1 0 11-2 0 5 5 0 00-5-5H10a1 1 0 110-2H9z" /><path d="M3 8a1 1 0 011-1h2a7 7 0 017 7 1 1 0 11-2 0 5 5 0 00-5-5H4a1 1 0 01-1-1z" /></svg>
    },
    {
      name: t('Comité Scientifique'),
      href: '#comite-scientifique',
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
    },
        {
      name: t('A propos'),
      href: '#a-propos',
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    },
  ];

  return (
    <header className="bg-primary/80 backdrop-blur-lg shadow-md sticky top-0 z-50 font-sans">
      <div className="container mx-auto px-6 py-4 flex items-center gap-6">
        {/* Zone gauche : logo (fixe) */}
        <div className="flex-none">
          <a
            href="#accueil"
            aria-label="Page d'accueil de CoSTIC 2026"
            className="flex-shrink-0 ml-0"
          >
            <img
              src="/img/costic_logo.png"
              alt="Logo CoSTIC 2026"
              className="h-12 md:h-14 w-auto object-contain select-none transition-all duration-200 hover:opacity-90 drop-shadow-md rounded-full"
              decoding="async"
              loading="eager"
              fetchPriority="high"
            />
          </a>
        </div>

        {/* Zone centrale : navigation (centrée, largeur flexible) */}
        <nav className="hidden md:flex flex-1 items-center justify-center gap-8 min-w-0">
          {navLinks.map(link => (
            <a key={link.name} href={link.href} className="relative text-neutral-100 font-semibold hover:text-white transition-colors duration-300 group py-2 flex items-center">
              {link.icon}
              <span className="truncate max-w-[12ch] md:max-w-[18ch] lg:max-w-none">{link.name}</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></span>
            </a>
          ))}
        </nav>

        {/* Zone droite : utilitaires (fixe) */}
        <div className="ml-auto hidden md:flex flex-none items-center gap-3">
          <a href="/admin" className="text-neutral-300 hover:text-white text-sm transition-colors duration-300 whitespace-nowrap">
            {t('Espace administrateur')}
          </a>
          <div className="flex items-center gap-2">
            <button onClick={() => i18n.changeLanguage('fr')} aria-pressed={i18n.resolvedLanguage === 'fr'} className={`px-3 py-1 rounded-full text-sm font-bold border-2 ${i18n.resolvedLanguage === 'fr' ? 'bg-white text-primary border-white' : 'text-white border-white/50 hover:bg-white/10'}`}>FR</button>
            <button onClick={() => i18n.changeLanguage('en')} aria-pressed={i18n.resolvedLanguage === 'en'} className={`px-3 py-1 rounded-full text-sm font-bold border-2 ${i18n.resolvedLanguage === 'en' ? 'bg-white text-primary border-white' : 'text-white border-white/50 hover:bg-white/10'}`}>EN</button>
          </div>
        </div>

        {/* Mobile : burger + admin */}
        <div className="md:hidden flex items-center ml-auto">
          <a href="/admin" className="text-neutral-300 hover:text-white text-sm mr-4 whitespace-nowrap">
            {t('admin_space')}
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
            <div className="flex items-center gap-2">
              <button onClick={() => i18n.changeLanguage('fr')} aria-pressed={i18n.resolvedLanguage === 'fr'} className={`px-3 py-1 rounded-full text-sm font-bold border-2 ${i18n.resolvedLanguage === 'fr' ? 'bg-white text-primary border-white' : 'text-white border-white/50 hover:bg-white/10'}`}>FR</button>
              <button onClick={() => i18n.changeLanguage('en')} aria-pressed={i18n.resolvedLanguage === 'en'} className={`px-3 py-1 rounded-full text-sm font-bold border-2 ${i18n.resolvedLanguage === 'en' ? 'bg-white text-primary border-white' : 'text-white border-white/50 hover:bg-white/10'}`}>EN</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;