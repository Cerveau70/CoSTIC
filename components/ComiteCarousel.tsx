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
  // Président
  {
    nom: "Prof. Coulibaly Adama",
    affiliation: "Université Félix Houphouët-Boigny",
    pays: "Côte d'Ivoire",
    drapeau: "🇨🇮",
    photo: "/img/cool.jpg",
    titre: "Président - Mathématicien"
  },
  // Vice-Président
  {
    nom: "Prof. Asséu Olivier",
    affiliation: "MESRS / ESATIC",
    pays: "Côte d'Ivoire",
    drapeau: "🇨🇮",
    photo: "/img/olivier.jpg",
    titre: "Vice-Président"
  },
  //Membres - Côte d'Ivoire
  {
    nom: "Prof. Oumtanaga Souleymane",
    affiliation: "INP-HB",
    pays: "Côte d'Ivoire",
    drapeau: "🇨🇮",
    photo: "/img/oumtanaga.jpg",
    titre: "Professeur"
  },
  {
    nom: "Prof. Hili Ouagnina",
    affiliation: "INP-HB",
    pays: "Côte d'Ivoire",
    drapeau: "🇨🇮",
    photo: "/img/Prof. Hili Ouagnina.jpeg",
    titre: "Professeur"
  },
  {
    nom: "Dr(MC) Soro Étienne",
    affiliation: "ESATIC",
    pays: "Côte d'Ivoire",
    drapeau: "🇨🇮",
    photo: "/img/etienne.jpg",
    titre: "Docteur"
  },
  {
    nom: "Dr(MC) Moustapha Diaby",
    affiliation: "ESATIC / Université de Lille",
    pays: "Côte d'Ivoire / France",
    drapeau: "🇨🇮",
    photo: "/img/diaby.jpg",
    titre: "Rapporteur Général"
  },
  {
    nom: "Dr(MC) Kamagaté Beman",
    affiliation: "ESATIC",
    pays: "Côte d'Ivoire",
    drapeau: "🇨🇮",
    photo: "/img/beman.jpg",
    titre: "Docteur"
  },

  {
    nom: "Dr(MC) Mamadou Diarra",
    affiliation: "UFHB",
    pays: "Côte d'Ivoire",
    drapeau: "🇨🇮",
    photo: "/img/Dr_Diarra_Mamadou.jpg",
    titre: "Docteur"
  },
  {
    nom: "Dr(MC) Sere Aboulaye",
    affiliation: "Université Nazi Boni",
    pays: "Burkina Faso",
    drapeau: "🇧🇫",
    photo: "/img/sere.jpg",
    titre: "Docteur"
  },
  // Afrique
  {
    nom: "Prof. Babacar",
    affiliation: "Université Cheikh Anta Diop (UCAD)",
    pays: "Sénégal",
    drapeau: "🇸🇳",
    photo: "/img/abacarr.jpg",
    titre: "Professeur"
  },
  {
    nom: "Prof. Leila Nasraoui",
    affiliation: "Université de Tunis El Manar",
    pays: "Tunisie",
    drapeau: "🇹🇳",
    photo: "/img/Leila Nasraoui.jpg",
    titre: "Professeur"
  },
  // Europe
  {
    nom: "Prof. Yvon Kermarec",
    affiliation: "Institut Mines-Télécom (IMT)",
    pays: "France",
    drapeau: "🇫🇷",
    photo: "/img/Prof. Yvon Kermarec.jpg",
    titre: "Professeur"
  }
];

const ComiteCarousel: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  // Créer une boucle continue en ajoutant tous les éléments à la fin
  const duplicatedMembers = [...comiteScientifique, ...comiteScientifique];

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
      const durationPerPixel = 0.015;
      const duration = Math.max(10, Math.round(Math.abs(end) * durationPerPixel));
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

