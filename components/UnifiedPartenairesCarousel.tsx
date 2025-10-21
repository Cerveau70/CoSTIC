import React, { useEffect, useRef, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase';
import { partenairesDefaut } from '../config/partenaires';

interface Partenaire {
  id: string;
  nom: string;
  description: string;
  logo: string;
  type: string;
  site?: string;
  pays: string;
  source: 'statique' | 'firebase';
  statut?: 'en_attente' | 'approuve' | 'rejete';
}

const UnifiedPartenairesCarousel: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [partenaires, setPartenaires] = useState<Partenaire[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllPartenaires();
  }, []);

  const fetchAllPartenaires = async () => {
    try {
      // Récupérer les partenaires depuis Firebase (seulement ceux approuvés)
      const querySnapshot = await getDocs(collection(db, "partenaires"));
      const partenairesFirebase = querySnapshot.docs
        .map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        .filter((p: any) => p.statut === 'approuve')
        .map((p: any) => ({
          id: p.id,
          nom: p.nom,
          description: p.description,
          logo: p.logoUrl || '/img/default-logo.png',
          type: p.typePartenaire,
          site: p.siteWeb,
          pays: p.pays,
          source: 'firebase' as const,
          statut: p.statut
        }));

      // Convertir les partenaires statiques
      const partenairesStatiques = partenairesDefaut.map((partenaire, index) => ({
        id: `statique-${index}`,
        nom: partenaire.name,
        description: partenaire.name,
        logo: partenaire.logo,
        type: 'Institutionnel',
        site: partenaire.siteWeb,
        pays: partenaire.pays,
        source: 'statique' as const,
        statut: 'approuve' as const
      }));

      // Combiner tous les partenaires
      const tousPartenaires = [...partenairesStatiques, ...partenairesFirebase];
      setPartenaires(tousPartenaires);
    } catch (error) {
      console.error('Erreur lors du chargement des partenaires:', error);
      // En cas d'erreur, utiliser seulement les partenaires statiques
      const partenairesStatiques = partenairesDefaut.map((partenaire, index) => ({
        id: `statique-${index}`,
        nom: partenaire.name,
        description: partenaire.name,
        logo: partenaire.logo,
        type: 'Institutionnel',
        site: partenaire.siteWeb,
        pays: partenaire.pays,
        source: 'statique' as const,
        statut: 'approuve' as const
      }));
      setPartenaires(partenairesStatiques);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track || partenaires.length === 0) return;

    const measure = () => {
      const containerWidth = container.clientWidth;
      let totalWidth = 0;
      track.childNodes.forEach((node) => {
        if (node instanceof HTMLElement) {
          totalWidth += node.offsetWidth + 32;
        }
      });
      const end = -(totalWidth);
      const durationPerPixel = 0.01;
      const duration = Math.max(8, Math.round(Math.abs(end) * durationPerPixel));
      track.style.setProperty('--scroll-end', `${end}px`);
      track.style.setProperty('--scroll-duration', `${duration}s`);
    };

    measure();
    const resizeObserver = new ResizeObserver(() => measure());
    resizeObserver.observe(container);
    return () => resizeObserver.disconnect();
  }, [partenaires]);

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

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  // Créer une boucle continue en ajoutant tous les éléments à la fin
  const duplicatedPartenaires = [...partenaires, ...partenaires];

  return (
    <div className="relative max-w-7xl mx-auto overflow-hidden" ref={containerRef}>
      <div className="flex animate-scroll-distance space-x-8 whitespace-nowrap" ref={trackRef}>
        {duplicatedPartenaires.map((partenaire, index) => (
          <div
            key={`${partenaire.nom}-${index}`}
            className="flex-shrink-0 w-80 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6 text-center"
          >
            <div className="relative mb-4">
              <div className="w-20 h-20 mx-auto bg-white rounded-lg border-2 border-neutral-200 flex items-center justify-center p-2">
                <img
                  src={partenaire.logo}
                  alt={partenaire.nom}
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => {
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

            <h3 className="text-lg font-bold text-primary mb-2 font-sans leading-tight">
              {partenaire.nom}
            </h3>

            <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${getTypeColor(partenaire.type)} mb-2`}>
              {partenaire.type}
            </span>

            <p className="text-sm text-neutral-600">
              {partenaire.description}
            </p>

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

export default UnifiedPartenairesCarousel;


