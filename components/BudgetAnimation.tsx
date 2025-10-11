import React, { useState, useEffect, useRef } from 'react';

interface BudgetItem {
  title: string;
  amount: number;
  currency: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  bgImage: string;
}

const budgetItems: BudgetItem[] = [
  {
    title: "Budget Global Estimé",
    amount: 0,
    currency: "FCFA",
    description: "Budget total prévisionnel pour l'organisation complète du colloque",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" /></svg>,
    color: "from-blue-500 to-blue-700",
    bgImage: "public/img/BUDGET GLBAL.jpg"
  },
  {
    title: "Partenariats Obtenus",
    amount: 0,
    currency: "FCFA",
    description: "Contributions confirmées des partenaires institutionnels et privés",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
    color: "from-green-500 to-green-700",
    bgImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
  },
  {
    title: "Financements Restants",
    amount: 0,
    currency: "FCFA",
    description: "Montant à mobiliser auprès de nouveaux partenaires et sponsors",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
    color: "from-orange-500 to-orange-700",
    bgImage: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop"
  },
  {
    title: "Taux de Couverture",
    amount: 0,
    currency: "%",
    description: "Pourcentage du budget déjà sécurisé grâce aux partenariats",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
    color: "from-purple-500 to-purple-700",
    bgImage: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop"
  }
];

// Hook pour l'animation de comptage
const useCountUp = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function pour un effet plus naturel
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(end * easeOutQuart);

      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, end, duration]);

  return { count, ref };
};

// Composant pour formater les nombres
const formatNumber = (num: number, currency: string): string => {
  if (currency === '%') {
    return `${num}%`;
  }

  // Formatage pour les montants en XOF
  const formatted = new Intl.NumberFormat('fr-FR').format(num);
  return `${formatted} ${currency}`;
};

const BudgetAnimation: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { count: globalCount, ref: globalRef } = useCountUp(budgetItems[0].amount);
  const { count: partnersCount, ref: partnersRef } = useCountUp(budgetItems[1].amount);
  const { count: remainingCount, ref: remainingRef } = useCountUp(budgetItems[2].amount);
  const { count: coverageCount, ref: coverageRef } = useCountUp(budgetItems[3].amount);

  const counts = [globalCount, partnersCount, remainingCount, coverageCount];
  const refs = [globalRef, partnersRef, remainingRef, coverageRef];

  // Animation automatique pour changer d'élément
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % budgetItems.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
      {/* Affichage Principal avec Animation */}
      <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl mb-8">
        {/* Image de fond dynamique */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
          style={{
            backgroundImage: `url(${budgetItems[activeIndex].bgImage})`
          }}
        />

        {/* Overlay avec dégradé */}
        <div className={`absolute inset-0 bg-gradient-to-br ${budgetItems[activeIndex].color} opacity-80`} />

        {/* Contenu Principal */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center p-8">
          {/* Icône animée */}
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-6 animate-pulse">
              <div className="text-white text-4xl">
                {budgetItems[activeIndex].icon}
              </div>
            </div>
          </div>

          {/* Titre */}
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 font-sans">
            {budgetItems[activeIndex].title}
          </h3>

          {/* Montant animé */}
          <div
            ref={refs[activeIndex]}
            className="text-6xl md:text-7xl font-bold text-white mb-4 font-mono tracking-tight"
          >
            {formatNumber(counts[activeIndex], budgetItems[activeIndex].currency)}
          </div>

          {/* Description */}
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            {budgetItems[activeIndex].description}
          </p>
        </div>
      </div>

      {/* Indicateurs de Navigation */}
      <div className="flex justify-center space-x-4 mb-8">
        {budgetItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${index === activeIndex
              ? 'bg-primary scale-125'
              : 'bg-neutral-300 hover:bg-primary/50'
              }`}
            aria-label={`Afficher ${budgetItems[index].title}`}
          />
        ))}
      </div>

      {/* Grille des Détails */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {budgetItems.map((item, index) => (
          <div
            key={item.title}
            ref={refs[index]}
            className={`relative p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer ${index === activeIndex ? 'ring-4 ring-primary/50' : ''
              }`}
            onClick={() => setActiveIndex(index)}
          >
            {/* Icône */}
            <div className={`w-12 h-12 mx-auto bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center mb-4 text-white`}>
              {item.icon}
            </div>

            {/* Titre */}
            <h4 className="text-lg font-bold text-neutral-800 mb-2 font-sans text-center">
              {item.title}
            </h4>

            {/* Montant */}
            <div className="text-2xl font-bold text-primary mb-2 font-mono text-center">
              {formatNumber(counts[index], item.currency)}
            </div>

            {/* Description */}
            <p className="text-sm text-neutral-600 text-center leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* Barre de Progression */}
      <div className="mt-8 bg-neutral-200 rounded-full h-4 overflow-hidden">
        <div
          className="bg-gradient-to-r from-primary to-secondary h-full rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${coverageCount}%` }}
        />
      </div>
      <div className="text-center mt-2 text-sm text-neutral-600">
        Progression du financement : {coverageCount}%
      </div>
    </div>
  );
};

export default BudgetAnimation;
