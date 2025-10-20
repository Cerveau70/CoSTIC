import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs, query, orderBy, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';

interface VisitorData {
  id: string;
  timestamp: any;
  userAgent: string;
  sessionId: string;
}

const VisitorCounterSticky: React.FC = () => {
  const [visitorCount, setVisitorCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  useEffect(() => {
    const trackVisitor = async () => {
      try {
        console.log('Début du tracking des visiteurs...');

        // Générer un ID de session unique basé sur l'heure et des données aléatoires
        const sessionId = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

        // Vérifier si cette session existe déjà dans localStorage
        const existingSession = localStorage.getItem('costic2026_session');

        console.log('Session existante:', existingSession);

        if (!existingSession) {
          console.log('Nouvelle session détectée, enregistrement...');

          // Nouvelle visite - enregistrer dans Firebase
          const docRef = await addDoc(collection(db, 'visitors'), {
            timestamp: serverTimestamp(),
            userAgent: navigator.userAgent,
            sessionId: sessionId,
            pageUrl: window.location.href,
            referrer: document.referrer || 'direct',
            date: new Date().toISOString()
          });

          console.log('Visiteur enregistré avec ID:', docRef.id);

          // Marquer cette session comme enregistrée
          localStorage.setItem('costic2026_session', sessionId);
        }

        console.log('Récupération du nombre de visiteurs...');

        // Récupérer le nombre total de visiteurs uniques
        const visitorsQuery = query(
          collection(db, 'visitors'),
          orderBy('timestamp', 'desc')
        );

        const visitorsSnapshot = await getDocs(visitorsQuery);
        const uniqueVisitors = new Set();

        visitorsSnapshot.forEach((doc) => {
          const data = doc.data() as VisitorData;
          if (data.sessionId) {
            uniqueVisitors.add(data.sessionId);
          }
        });

        console.log('Nombre de visiteurs uniques:', uniqueVisitors.size);
        console.log('Total de documents:', visitorsSnapshot.size);

        setVisitorCount(uniqueVisitors.size);
        setIsLoading(false);

      } catch (error) {
        console.error('Erreur lors du comptage des visiteurs:', error);

        // Fallback : utiliser le localStorage pour un compteur local
        const localCount = localStorage.getItem('costic2026_local_count');
        if (localCount) {
          setVisitorCount(parseInt(localCount));
        } else {
          setVisitorCount(1);
          localStorage.setItem('costic2026_local_count', '1');
        }

        setIsLoading(false);
      }
    };

    // Attendre un peu avant de commencer le tracking
    const timeout = setTimeout(trackVisitor, 1000);

    // Mettre à jour le compteur toutes les 30 secondes
    const interval = setInterval(trackVisitor, 30000);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []);

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 bg-primary/80 text-white p-2 rounded-full shadow-lg hover:bg-primary transition-all duration-300"
        title="Afficher le compteur de visiteurs"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>
      </button>
    );
  }

  return (
    <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50">
      {/* Bouton principal circulaire compact */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="bg-white/80 backdrop-blur-sm border border-primary/30 rounded-full shadow-lg p-2 hover:bg-white/90 transition-all duration-200 flex items-center justify-center w-12 h-12"
        title="Compteur de visiteurs"
      >
        {isLoading ? (
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary"></div>
        ) : (
          <div className="text-center">
            <div className="text-xs font-bold text-primary leading-none">
              {visitorCount.toLocaleString()}
            </div>
            <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse mx-auto mt-0.5"></div>
          </div>
        )}
      </button>

      {/* Bouton pour masquer */}
      <button
        onClick={() => setIsVisible(false)}
        className="absolute -top-1 -right-1 bg-primary/80 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs hover:bg-primary transition-colors"
        title="Masquer le compteur"
      >
        ×
      </button>

      {/* Panneau détaillé qui s'affiche au clic */}
      {isExpanded && (
        <div className="absolute left-16 top-0 bg-white/90 backdrop-blur-sm border border-primary/30 rounded-lg shadow-lg p-3 min-w-[120px]">
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 text-primary mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
              <span className="text-xs font-semibold text-primary">Visiteurs</span>
            </div>

            <div className="text-lg font-bold text-primary mb-1">
              {visitorCount.toLocaleString()}
            </div>

            <div className="text-xs text-neutral-600 mb-1">
              en temps réel
            </div>

            <div className="flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-neutral-500 ml-1">Live</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VisitorCounterSticky;