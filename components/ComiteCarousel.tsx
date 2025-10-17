import React, { useEffect, useRef, useState } from 'react';

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
  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  // Une seule séquence; l'animation parcourt exactement sa largeur mesurée
  const duplicatedMembers = comiteScientifique;

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    const measure = () => {
      let totalWidth = 0;
      track.childNodes.forEach((node) => {
        if (node instanceof HTMLElement) {
          totalWidth += node.offsetWidth + 32; // space-x-8 ≈ 32px
        }
      });
      const end = -(totalWidth);
      const durationPerPixel = 0.045;
      const duration = Math.max(30, Math.round(Math.abs(end) * durationPerPixel));
      track.style.setProperty('--scroll-end', `${end}px`);
      track.style.setProperty('--scroll-duration', `${duration}s`);
    };

    measure();
    const resizeObserver = new ResizeObserver(() => measure());
    resizeObserver.observe(container);
    return () => resizeObserver.disconnect();
  }, []);

  return (
    <div className="relative max-w-7xl mx-auto overflow-hidden" ref={containerRef}>
      {/* Défilement continu vers la droite */}
      <div className="flex animate-scroll-distance space-x-8 whitespace-nowrap" ref={trackRef}>
        {duplicatedMembers.map((member, index) => (
          <div
            key={`${member.nom}-${index}`}
            className="flex-shrink-0 w-80 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6 text-center"
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
    </div>
  );
};

export default ComiteCarousel;

