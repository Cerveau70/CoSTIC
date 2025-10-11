import React, { useState } from 'react';

interface ComiteMember {
  nom: string;
  affiliation: string;
  pays: string;
  drapeau: string;
  photo: string;
  titre: string;
}

const comiteScientifique: ComiteMember[] = [
  {
    nom: "Pr. Oumtanaga Souleymane",
    affiliation: "INPHB",
    pays: "Côte d'Ivoire",
    drapeau: "🇨🇮",
    photo: "/img/oumtanaga.jpg",
    titre: "Professeur"
  },
  {
    nom: "Dr (MC) Diaby Moustapha",
    affiliation: "ESATIC",
    pays: "Côte d'Ivoire",
    drapeau: "🇨🇮",
    photo: "/img/diaby.jpg",
    titre: "Maître de Conférences"
  },
  {
    nom: "Dr. Diarra Mamadou",
    affiliation: "UFHB",
    pays: "Côte d'Ivoire",
    drapeau: "🇨🇮",
    photo: "/img/Dr_Diarra_Mamadou.jpg",
    titre: "Docteur"
  },
  // {
  //   nom: "Dr. Kamagaté Beman",
  //   affiliation: "ESATIC",
  //   pays: "Côte d'Ivoire",
  //   drapeau: "🇨🇮",
  //   photo: "/img/Dr. Kamagaté Beman (ESATIC, Côte d’Ivoire.jpg",
  //   titre: "Docteur"
  // },
  // {
  //   nom: "Dr. Kouakou Konan",
  //   affiliation: "UVCI",
  //   pays: "Côte d'Ivoire",
  //   drapeau: "🇨🇮",
  //   photo: "",
  //   titre: "Docteur"
  // },
  // {
  //   nom: "Pr. Kouadio N'Guessan",
  //   affiliation: "Université Nangui Abrogoua",
  //   pays: "Côte d'Ivoire",
  //   drapeau: "🇨🇮",
  //   photo: "",
  //   titre: "Professeur"
  // },
  // {
  //   nom: "Dr. Konaté Moussa",
  //   affiliation: "Université de San Pedro",
  //   pays: "Côte d'Ivoire",
  //   drapeau: "🇨🇮",
  //   photo: "/img/Dr. Konaté Moussa.jpg",
  //   titre: "Docteur"
  // },
  // {
  //   nom: "Pr. Abdoulaye Cissé",
  //   affiliation: "Université Nazi Boni",
  //   pays: "Burkina Faso",
  //   drapeau: "🇧🇫",
  //   photo: "",
  //   titre: "Professeur"
  // },
  // {
  //   nom: "Dr. Kaboré Lassina",
  //   affiliation: "Université Joseph Ki-Zerbo",
  //   pays: "Burkina Faso",
  //   drapeau: "🇧🇫",
  //   photo: "",
  //   titre: "Docteur"
  // },
  // {
  //   nom: "Dr. Seydou Traoré",
  //   affiliation: "USTTB",
  //   pays: "Mali",
  //   drapeau: "🇲🇱",
  //   photo: "",
  //   titre: "Docteur"
  // },
  // {
  //   nom: "Pr. Alioune Ngom",
  //   affiliation: "Université Gaston Berger",
  //   pays: "Sénégal",
  //   drapeau: "🇸🇳",
  //   photo: "",
  //   titre: "Professeur"
  // },
  // {
  //   nom: "Dr. Aminata Fall",
  //   affiliation: "UCAD",
  //   pays: "Sénégal",
  //   drapeau: "🇸🇳",
  //   photo: "",
  //   titre: "Docteur"
  // },
  // {
  //   nom: "Dr. Fatoumata Diallo",
  //   affiliation: "Université de Conakry",
  //   pays: "Guinée",
  //   drapeau: "🇬🇳",
  //   photo: "",
  //   titre: "Docteur"
  // },
  {
    nom: "Pr. Hamadou Saliah-Hassane",
    affiliation: "UQAM",
    pays: "Niger/Canada",
    drapeau: "🇳🇪🇨🇦",
    photo: "/img/Pr. Hamadou Saliah-Hassane (UQAM, Niger_Canada).jpg",
    titre: "Professeur"
  }
];

const ComiteCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;

  const totalPages = Math.ceil(comiteScientifique.length / itemsPerPage);

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

  const currentItems = comiteScientifique.slice(
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-12">
        {currentItems.map((member, index) => (
          <div
            key={member.nom}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6 text-center"
          >
            {/* Photo */}
            <div className="relative mb-4">
              <img
                src={member.photo}
                alt={member.nom}
                className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-primary/20"
              />
              <div className="absolute -bottom-2 -right-2 text-2xl">
                {member.drapeau}
              </div>
            </div>

            {/* Nom et Titre */}
            <h3 className="text-lg font-bold text-primary mb-1 font-sans">
              {member.nom}
            </h3>
            <p className="text-sm text-secondary font-semibold mb-2">
              {member.titre}
            </p>

            {/* Affiliation */}
            <p className="text-sm text-neutral-600 mb-1">
              {member.affiliation}
            </p>

            {/* Pays */}
            <p className="text-xs text-neutral-500 flex items-center justify-center gap-1">
              <span>{member.drapeau}</span>
              <span>{member.pays}</span>
            </p>
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
        Page {currentIndex + 1} sur {totalPages} • {comiteScientifique.length} membres du comité
      </div>
    </div>
  );
};

export default ComiteCarousel;

