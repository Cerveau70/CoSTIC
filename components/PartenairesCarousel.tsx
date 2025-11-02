import React, { useEffect, useRef, useState } from 'react';

interface Partenaire {
  nom: string;
  description: string;
  logo: string;
  type: string;
  site?: string;
}

const partenaires: Partenaire[] = [
  {
    nom: "MTND",
    description: "MTND",
    logo: "/img/ministere-transition-numerique.png",
    type: "Institutionnel",
    site: "https://www.transition-numerique.gouv.ci"
  },
  {
    nom: "MESR",
    description: "MESR",
    logo: "/img/mesr.jpg",
    type: "Institutionnel",
    site: "https://www.enseignement.gouv.ci"
  },
  {
    nom: "SNDI",
    description: "SNDI",
    logo: "/img/sndi.png",
    type: "Développement",
    site: "https://www.sndi.ci"
  },
  {
    nom: "ARTCI",
    description: "ARTCI",
    logo: "/img/artci.png",
    type: "Régulation",
    site: "https://www.artci.ci"
  },
  {
    nom: "ANSUT",
    description: "ANSUT",
    logo: "/img/ansut.png",
    type: "Institutionnel",
    site: "https://ansut.ci"
  },
  {
    nom: "AIGF",
    description: "AIGF",
    logo: "/img/aigf.png",
    type: "Institutionnel",
    site: "https://www.aigf.ci"
  },
  {
    nom: "VITIB",
    description: "VITIB",
    logo: "/img/vitib.jpg",
    type: "Technologie",
    site: "https://www.vitib.ci"
  },
  {
    nom: "Fondation Jeunesse Numérique",
    description: "Fondation Jeunesse Numérique",
    logo: "/img/fondation-jeunesse-numerique.png",
    type: "Développement",
    site: "https://www.fondation-jeunesse-numerique.ci"
  },
  {
    nom: "AUF",
    description: "AUF",
    logo: "/img/AUF - Agence Universitaire de la Francophonie.png",
    type: "International",
    site: "https://www.auf.org"
  },
  {
    nom: "ONUDI",
    description: "ONUDI",
    logo: "/img/onudi.png",
    type: "International",
    site: "https://www.unido.org"
  },
  {
    nom: "Smart Africa",
    description: "Smart Africa Alliance",
    logo: "/img/smart.png",
    type: "International",
    site: "https://smartafrica.org"
  },
  {
    nom: "UNITEL",
    description: "UNITEL",
    logo: "/img/unitel.png",
    type: "Télécoms",
    site: "https://www.unitel.ci"
  },
  {
    nom: "Huawei",
    description: "Technologies et Solutions TIC",
    logo: "/img/huawei.png",
    type: "Technologie",
    site: "https://www.huawei.com"
  },
  {
    nom: "Sah Analytics",
    description: "Technologies et Solutions TIC",
    logo: "/img/sah.jpg",
    type: "Technologie",
    site: "https://sahanalytics.com/"
  },
  {
    nom: "UIT",
    description: "Union internationale des télécommunications",
    logo: "/img/itu.png",
    type: "Technologie",
    site: "https://www.itu.int"
  }
];

const PartenairesCarousel: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  // Créer une boucle continue en ajoutant tous les éléments à la fin
  const duplicatedPartners = [...partenaires, ...partenaires];

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    const measure = () => {
      const containerWidth = container.clientWidth;
      // largeur totale de la piste (somme des cartes + espace)
      let totalWidth = 0;
      track.childNodes.forEach((node) => {
        if (node instanceof HTMLElement) {
          totalWidth += node.offsetWidth + 32; // space-x-8 ≈ 32px
        }
      });
      // fin de translation = - (totalWidth)
      // pour éviter un espace vide, on ajoute un petit tampon
      const end = -(totalWidth);
      const durationPerPixel = 0.01; // secondes par pixel (vitesse très rapide)
      const duration = Math.max(8, Math.round(Math.abs(end) * durationPerPixel));
      track.style.setProperty('--scroll-end', `${end}px`);
      track.style.setProperty('--scroll-duration', `${duration}s`);
    };

    measure();
    const resizeObserver = new ResizeObserver(() => measure());
    resizeObserver.observe(container);
    return () => resizeObserver.disconnect();
  }, []);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Institutionnel':
        return 'bg-primary/10 text-primary border-primary/20';
      case 'Télécoms':
        return 'bg-secondary/10 text-secondary border-secondary/20';
      case 'Régulation':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'Technologie':
        return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'Énergie':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'Conseil':
        return 'bg-indigo-100 text-indigo-700 border-indigo-200';
      case 'Formation':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'IA':
        return 'bg-pink-100 text-pink-700 border-pink-200';
      case 'Recherche':
        return 'bg-cyan-100 text-cyan-700 border-cyan-200';
      case 'Développement':
        return 'bg-emerald-100 text-emerald-700 border-emerald-200';
      case 'International':
        return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'Finance':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'Média':
        return 'bg-orange-100 text-orange-700 border-orange-200';
      default:
        return 'bg-neutral-100 text-neutral-700 border-neutral-200';
    }
  };

  return (
    <div className="relative max-w-7xl mx-auto overflow-hidden" ref={containerRef}>
      {/* Défilement continu vers la droite */}
      <div className="flex animate-scroll-distance space-x-8 whitespace-nowrap" ref={trackRef}>
        {duplicatedPartners.map((partenaire, index) => (
          <div
            key={`${partenaire.nom}-${index}`}
            className="flex-shrink-0 w-80 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6 text-center"
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
    </div>
  );
};

export default PartenairesCarousel;

