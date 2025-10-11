import React, { useState } from 'react';

interface ResultatItem {
  title: string;
  desc: string;
  icon: React.ReactNode;
  bgImage: string;
}

const resultatsItems: ResultatItem[] = [
  {
    title: "Partenariats Renforcés",
    desc: "Renforcement des collaborations académiques et industrielles pour favoriser l'innovation et le transfert de technologies entre les universités et le secteur privé.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    bgImage: "/img/Partenariats Renforcés.jpg",
  },
  {
    title: "Réseau d'Experts",
    desc: "Création d'un réseau dynamique de chercheurs et praticiens en TIC, facilitant les échanges d'expertise et les collaborations futures à travers l'Afrique.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    bgImage: "/img/Réseau d'Experts.jpg",
  },
  {
    title: "Recommandations Stratégiques",
    desc: "Propositions concrètes et actionnables pour les décideurs publics et privés, basées sur les meilleures pratiques et innovations présentées lors du colloque.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    bgImage: "/img/Recommandations Stratégiques.jpg",
  },
];


const ResultatsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const totalPages = Math.ceil(resultatsItems.length / itemsPerPage);

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

  const currentItems = resultatsItems.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-12">
        {currentItems.map((item, index) => (
          <div
            key={item.title}
            className="relative h-80 lg:h-96 rounded-3xl overflow-hidden shadow-2xl group transform hover:scale-105 hover:rotate-2 transition-all duration-500"
          >
            {/* Image de fond */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-110"
              style={{
                backgroundImage: `url(${item.bgImage})`
              }}
            />

            {/* Overlay avec dégradé coloré */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/70 via-secondary/60 to-accent/70 group-hover:from-primary/80 group-hover:via-secondary/70 group-hover:to-accent/80 transition-all duration-300" />

            {/* Contenu */}
            <div className="relative z-10 h-full flex flex-col justify-center items-center text-center p-6">
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 group-hover:bg-white/30 group-hover:-rotate-12 transition-all duration-300">
                  <div className="text-white">
                    {item.icon}
                  </div>
                </div>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 font-sans group-hover:scale-105 transition-transform duration-300">
                {item.title}
              </h3>

              <p className="text-sm md:text-base text-white/95 leading-relaxed group-hover:text-white transition-colors duration-300">
                {item.desc}
              </p>

              {/* Effet de brillance au survol */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1200" />

              {/* Bordure lumineuse au survol */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/40 rounded-3xl transition-all duration-500" />
            </div>
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
        Page {currentIndex + 1} sur {totalPages} • {resultatsItems.length} résultats attendus
      </div>
    </div>
  );
};

export default ResultatsCarousel;
