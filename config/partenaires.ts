// Configuration des partenaires par défaut du colloque CoSTIC 2026

export interface PartenaireDefaut {
  name: string;
  logo: string;
  siteWeb?: string;
  pays: string;
  type?: string;
}

export const partenairesDefaut: PartenaireDefaut[] = [
  {
    name: "MTND",
    logo: "/img/ministere-transition-numerique.png",
    siteWeb: "https://www.transition-numerique.gouv.ci",
    pays: "Côte d'Ivoire",
    type: "Institutionnel"
  },
  {
    name: "MESR",
    logo: "/img/mesr.jpg",
    siteWeb: "https://www.enseignement.gouv.ci",
    pays: "Côte d'Ivoire",
    type: "Institutionnel"
  },
  {
    name: "SNDI",
    logo: "/img/sndi.png",
    siteWeb: "https://www.sndi.ci",
    pays: "Côte d'Ivoire",
    type: "Développement"
  },
  {
    name: "ARTCI",
    logo: "/img/artci.png",
    siteWeb: "https://www.artci.ci",
    pays: "Côte d'Ivoire",
    type: "Régulation"
  },
  {
    name: "ANSUT",
    logo: "/img/ansut.png",
    siteWeb: "https://ansut.ci",
    pays: "Côte d'Ivoire",
    type: "Institutionnel"
  },
  {
    name: "AIGF",
    logo: "/img/aigf.png",
    siteWeb: "https://www.aigf.ci",
    pays: "Côte d'Ivoire",
    type: "Institutionnel"
  },
  {
    name: "VITIB",
    logo: "/img/vitib.jpg",
    siteWeb: "https://www.vitib.ci",
    pays: "Côte d'Ivoire",
    type: "Technologie"
  },
  {
    name: "FJN",
    logo: "/img/fondation-jeunesse-numerique.png",
    siteWeb: "https://www.fondation-jeunesse-numerique.ci",
    pays: "Côte d'Ivoire",
    type: "Développement"
  },
  {
    name: "AUF",
    logo: "/img/AUF - Agence Universitaire de la Francophonie.png",
    siteWeb: "https://www.auf.org",
    pays: "International",
    type: "International"
  },
  {
    name: "ONUDI",
    logo: "/img/onudi.png",
    siteWeb: "https://www.unido.org",
    pays: "International",
    type: "International"
  },
  {
    name: "Smart Africa",
    logo: "/img/smart.png",
    siteWeb: "https://smartafrica.org",
    pays: "International",
    type: "International"
  },
  {
    name: "UNITEL",
    logo: "/img/unitel.png",
    siteWeb: "https://www.unitel.ci",
    pays: "Côte d'Ivoire",
    type: "Télécoms"
  },
  {
    name: "Huawei",
    logo: "/img/huawei.png",
    siteWeb: "https://www.huawei.com",
    pays: "International",
    type: "Technologie"
  },
  {
    name: "Sah Analytics",
    logo: "/img/sah.jpg",
    siteWeb: "https://sahanalytics.com/",
    pays: "Côte d'Ivoire",
    type: "Technologie"
  },
  {
    name: "UIT",
    logo: "/img/itu.png",
    siteWeb: "https://www.itu.int",
    pays: "International",
    type: "Technologie"
  }
];

