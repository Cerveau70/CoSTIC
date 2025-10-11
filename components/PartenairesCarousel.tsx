import React, { useState } from 'react';

interface Partenaire {
  nom: string;
  description: string;
  logo: string;
  type: string;
  site?: string;
}

const partenaires: Partenaire[] = [
  // Ministère et Institutions
  // {
  //   nom: "Ministère de l'Enseignement Supérieur et de la Recherche",
  //   description: "Partenaire Institutionnel",
  //   logo: "/img/Ministère de l'Enseignement Supérieur et de la Recherche.jpg",
  //   type: "Institutionnel",
  //   site: "https://www.enseignement.gouv.ci"
  // },
  // {
  //   nom: "ESATIC",
  //   description: "École Supérieure Africaine des TIC",
  //   logo: "/img/École Supérieure Africaine des TIC.png",
  //   type: "Institutionnel",
  //   site: "https://www.esatic.edu.ci"
  // },

  // Opérateurs Télécoms
  {
    nom: "Orange Côte d'Ivoire",
    description: "Opérateur Télécoms",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Orange_logo.svg/200px-Orange_logo.svg.png",
    type: "Télécoms",
    site: "https://www.orange.ci"
  },
  // {
  //   nom: "Moov Africa Côte d'Ivoire",
  //   description: "Opérateur Télécoms",
  //   logo: "/img/Moov Africa Côte d'Ivoire.jpg",
  //   type: "Télécoms",
  //   site: "https://www.moov.ci"
  // },
  // {
  //   nom: "MTN Côte d'Ivoire",
  //   description: "Opérateur Télécoms",
  //   logo: "/img/MTN Côte d'Ivoire.png",
  //   type: "Télécoms",
  //   site: "https://www.mtn.ci"
  // },

  // // Banques
  // {
  //   nom: "SGBCI",
  //   description: "Société Générale de Banques en Côte d'Ivoire",
  //   logo: "/img/Société Générale de Banques en Côte d'Ivoire.png",
  //   type: "Banque",
  //   site: "https://www.sgbci.ci"
  // },
  // {
  //   nom: "Ecobank Côte d'Ivoire",
  //   description: "Banque Panafricaine",
  //   logo: "/img/Ecobank Côte d'Ivoire.jpg",
  //   type: "Banque",
  //   site: "https://www.ecobank.com"
  // },
  // {
  //   nom: "UBA Côte d'Ivoire",
  //   description: "United Bank for Africa",
  //   logo: "/img/UBA Côte d'Ivoire.png",
  //   type: "Banque",
  //   site: "https://www.ubagroup.com"
  // },

  // Start-ups et Incubateurs
  {
    nom: "VITIB",
    description: "Incubateur et Accélérateur",
    logo: "/img/vitib.jpg",
    type: "Parc Technologique",
    site: "https://www.vitib.ci/"
  },

  // Organisations Internationales
  {
    nom: "EAI - European Alliance for Innovation",
    description: "Organisation Scientifique Internationale",
    logo: "/img/EAI - European Alliance for Innovation.png",
    type: "International",
    site: "https://eai.eu"
  },
  {
    nom: "IEEE - Institute of Electrical and Electronics Engineers",
    description: "Association Professionnelle Mondiale",
    logo: "/img/IEEE - Institute of Electrical and Electronics Engineers.png",
    type: "International",
    site: "https://www.ieee.org"
  },
  {
    nom: "AUF - Agence Universitaire de la Francophonie",
    description: "Réseau Universitaire Francophone",
    logo: "/img/AUF - Agence Universitaire de la Francophonie.png",
    type: "International",
    site: "https://www.auf.org"
  },
  // {
  //   nom: "UNESCO",
  //   description: "Organisation des Nations Unies pour l'Éducation",
  //   logo: "/img/Organisation des Nations Unies pour l'Éducation.png",
  //   type: "International",
  //   site: "https://www.unesco.org"
  // }
];

const PartenairesCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;

  const totalPages = Math.ceil(partenaires.length / itemsPerPage);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalPages - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalPages - 1 ? 0 : prevIndex + 1
    );
  };

  const currentItems = partenaires.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Institutionnel':
        return 'bg-primary/10 text-primary border-primary/20';
      case 'Télécoms':
        return 'bg-secondary/10 text-secondary border-secondary/20';
      case 'Banque':
        return 'bg-accent/10 text-accent border-accent/20';
      case 'Start-up':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'International':
        return 'bg-purple-100 text-purple-700 border-purple-200';
      default:
        return 'bg-neutral-100 text-neutral-700 border-neutral-200';
    }
  };

  return (
    <div className="relative max-w-7xl mx-auto">
      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-primary hover:text-white"
        aria-label="Précédent"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-primary hover:text-white"
        aria-label="Suivant"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-12">
        {currentItems.map((partenaire, index) => (
          <div
            key={partenaire.nom}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6 text-center"
          >
            {/* Logo */}
            <div className="relative mb-4">
              <div className="w-20 h-20 mx-auto bg-white rounded-lg border-2 border-neutral-200 flex items-center justify-center p-2">
                <img
                  src={partenaire.logo}
                  alt={partenaire.nom}
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => {
                    // Fallback si l'image ne charge pas
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.innerHTML = `
                      <div class="w-full h-full bg-neutral-100 rounded-lg flex items-center justify-center">
                        <svg class="w-8 h-8 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                        </svg>
                      </div>
                    `;
                  }}
                />
              </div>
            </div>

            {/* Nom et Type */}
            <h3 className="text-lg font-bold text-primary mb-2 font-sans leading-tight">
              {partenaire.nom}
            </h3>

            {/* Badge Type */}
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${getTypeColor(partenaire.type)} mb-2`}>
              {partenaire.type}
            </span>

            {/* Description */}
            <p className="text-sm text-neutral-600">
              {partenaire.description}
            </p>

            {/* Lien vers le site (si disponible) */}
            {partenaire.site && (
              <a
                href={partenaire.site}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-xs text-primary hover:text-primary/80 transition-colors duration-300"
              >
                Visiter le site →
              </a>
            )}
          </div>
        ))}
      </div>

      {/* Pagination Indicators */}
      <div className="flex justify-center mt-8 space-x-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
              ? 'bg-primary scale-125'
              : 'bg-neutral-300 hover:bg-primary/50'
              }`}
            aria-label={`Page ${index + 1}`}
          />
        ))}
      </div>

      {/* Page Info */}
      <div className="text-center mt-4 text-sm text-neutral-500">
        Page {currentIndex + 1} sur {totalPages} • {partenaires.length} partenaires
      </div>
    </div>
  );
};

export default PartenairesCarousel;

