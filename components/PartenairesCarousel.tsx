import React, { useState } from 'react';

interface Partenaire {
  nom: string;
  description: string;
  logo: string;
  type: string;
  site?: string;
}

const partenaires: Partenaire[] = [
  // Ministères et Institutions
  {
    nom: "MESRS",
    description: "Ministère de l'Enseignement Supérieur et de la Recherche Scientifique",
    logo: "/img/mesrs.png",
    type: "Institutionnel",
    site: "https://www.enseignement.gouv.ci"
  },
  {
    nom: "ARTCI",
    description: "Autorité de Régulation des Télécommunications/TIC",
    logo: "/img/artci.png",
    type: "Régulation",
    site: "https://www.artci.ci"
  },
  {
    nom: "ANSUT",
    description: "Agence Nationale du Service Universel des Télécommunications",
    logo: "/img/an.png",
    type: "Institutionnel",
    site: "https://ansut.ci"
  },
  // Organisations Internationales
  {
    nom: "AUF",
    description: "Agence Universitaire de la Francophonie",
    logo: "/img/AUF - Agence Universitaire de la Francophonie.png",
    type: "International",
    site: "https://www.auf.org"
  },
  {
    nom: "EAI",
    description: "European Alliance for Innovation",
    logo: "/img/EAI - European Alliance for Innovation.png",
    type: "International",
    site: "https://eai.eu"
  },

  {
    nom: "UNESCO",
    description: "Organisation des Nations Unies pour l'Éducation",
    logo: "/img/unesco.png",
    type: "International",
    site: "https://www.unesco.org"
  },
  {
    nom: "BAD",
    description: "Banque Africaine de Développement",
    logo: "/img/bad.jpg",
    type: "Finance",
    site: "https://www.afdb.org"
  },
  {
    nom: "Orange Côte d'Ivoire",
    description: "Opérateur Télécoms",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Orange_logo.svg/200px-Orange_logo.svg.png",
    type: "Télécoms",
    site: "https://www.orange.ci"
  },
  // Grandes Technologies
  {
    nom: "Huawei",
    description: "Technologies et Solutions TIC",
    logo: "/img/huawei.png",
    type: "Technologie",
    site: "https://www.huawei.com"
  },
  {
    nom: "MTN Côte d'Ivoire",
    description: "Opérateur Télécoms",
    logo: "/img/mtn.png",
    type: "Télécoms",
    site: "https://www.mtn.ci"
  },
  {
    nom: "Microsoft",
    description: "Technologies et Solutions Numériques",
    logo: "/img/microsoft.png",
    type: "Technologie",
    site: "https://www.microsoft.com"
  },
  // Médias
  {
    nom: "RTI",
    description: "Radiodiffusion Télévision Ivoirienne",
    logo: "/img/rti.png",
    type: "Média",
    site: "https://www.rti.ci"
  },
  {
    nom: "Fraternité Matin",
    description: "Journal Quotidien",
    logo: "/img/fm.png",
    type: "Média",
    site: "https://www.fratmat.info"
  },
  {
    nom: "Ministère de la Communication et de l'Économie Numérique",
    description: "Ministère de la Communication",
    logo: "/img/ministere-communication.png",
    type: "Institutionnel",
    site: "https://www.communication.gouv.ci"
  },
  {
    nom: "SNDI",
    description: "Société Nationale de Développement Informatique",
    logo: "/img/sndi.png",
    type: "Développement",
    site: "https://www.sndi.ci"
  },
  // Organisations de Développement
  {
    nom: "GIZ",
    description: "Coopération Allemande",
    logo: "/img/giz.png",
    type: "Développement",
    site: "https://www.giz.de"
  },
  {
    nom: "AFD",
    description: "Agence Française de Développement",
    logo: "/img/afd.png",
    type: "Développement",
    site: "https://www.afd.fr"
  },
  {
    nom: "Banque Mondiale",
    description: "Institution Financière Internationale",
    logo: "/img/bm.png",
    type: "Finance",
    site: "https://www.banquemondiale.org"
  },


  // Opérateurs Télécoms

  {
    nom: "Moov Africa Côte d'Ivoire",
    description: "Opérateur Télécoms",
    logo: "/img/moov.png",
    type: "Télécoms",
    site: "https://www.moov.ci"
  },

  // Entreprises Technologiques
  {
    nom: "NSIA Technologies",
    description: "Solutions Technologiques",
    logo: "/img/nsia.jpg",
    type: "Technologie",
    site: "https://www.nsia-technologies.com"
  },
  {
    nom: "CIE/CI-ÉNERGIES",
    description: "Compagnie Ivoirienne d'Électricité",
    logo: "/img/cie.png",
    type: "Énergie",
    site: "https://www.cie.ci"
  },
  {
    nom: "CGECI",
    description: "Confédération Générale des Entreprises de Côte d'Ivoire",
    logo: "/img/cgeci.png",
    type: "Institutionnel",
    site: "https://www.cgeci.ci"
  },

  // Consultants et Formations
  {
    nom: "AS Consulting",
    description: "Cabinet de Conseil",
    logo: "/img/as.jpg",
    type: "Conseil",
    site: "https://www.as-consulting.ci"
  },
  {
    nom: "DATUM Academy",
    description: "Centre de Formation",
    logo: "/img/da.png",
    type: "Formation",
    site: "https://www.datum-academy.com"
  },
  {
    nom: "SICOGES",
    description: "Société de Conseil et de Gestion",
    logo: "/img/sicoges.png",
    type: "Conseil",
    site: "https://www.sicoges.ci"
  },
  {
    nom: "SIMPLON CI",
    description: "École du Numérique",
    logo: "/img/simplon.png",
    type: "Formation",
    site: "https://www.simplon.ci"
  },


  {
    nom: "Google Africa",
    description: "Solutions Numériques",
    logo: "/img/ga.jpg",
    type: "Technologie",
    site: "https://www.google.com"
  },
  {
    nom: "IBM Research Africa",
    description: "Recherche et Innovation",
    logo: "/img/ibm.jpg",
    type: "Recherche",
    site: "https://www.ibm.com"
  },
  {
    nom: "Meta AI",
    description: "Intelligence Artificielle",
    logo: "/img/meta.png",
    type: "IA",
    site: "https://ai.meta.com"
  },
  {
    nom: "Oracle",
    description: "Solutions Base de Données",
    logo: "/img/oracle.png",
    type: "Technologie",
    site: "https://www.oracle.com"
  },
  {
    nom: "Dell Technologies",
    description: "Solutions Informatiques",
    logo: "/img/dell.png",
    type: "Technologie",
    site: "https://www.dell.com"
  },
  {
    nom: "Cisco Networking Academy",
    description: "Formation et Certification Réseaux",
    logo: "/img/cisco.png",
    type: "Formation",
    site: "https://www.netacad.com"
  },



  {
    nom: "Union Africaine / Smart Africa Alliance",
    description: "Alliance pour le Développement Numérique",
    logo: "/img/smart.png",
    type: "International",
    site: "https://smartafrica.org"
  },


  {
    nom: "Abidjan.net",
    description: "Portail d'Information",
    logo: "/img/anet.png",
    type: "Média",
    site: "https://www.abidjan.net"
  },
  {
    nom: "Jeune Afrique",
    description: "Magazine Panafricain",
    logo: "/img/jafric.png",
    type: "Média",
    site: "https://www.jeuneafrique.com"
  },
  {
    nom: "Tech TV Africa",
    description: "Chaîne Technologique",
    logo: "/img/tech.png",
    type: "Média",
    site: "https://www.techtvafrica.com"
  }
];

const PartenairesCarousel: React.FC = () => {
  // Dupliquer les partenaires pour un défilement continu
  const duplicatedPartners = [...partenaires, ...partenaires];

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
    <div className="relative max-w-7xl mx-auto overflow-hidden">
      {/* Défilement continu vers la droite */}
      <div className="flex animate-scroll space-x-8">
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

