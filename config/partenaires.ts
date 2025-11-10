// Configuration des partenaires par défaut du colloque CoSTIC 2026
export interface PartenaireDefaut {
  name: string;
  logo: string;
  siteWeb?: string;
  pays: string;
}

export const partenairesDefaut: PartenaireDefaut[] = [
  {
    name: "MTND",
    logo: "/img/ministere-transition-numerique.png",
    siteWeb: "https://www.transition-numerique.gouv.ci",
    pays: "Côte d'Ivoire"
  },
  {
    name: "MESR",
    logo: "/img/mesr.jpg",
    siteWeb: "https://www.enseignement.gouv.ci",
    pays: "Côte d'Ivoire"
  },
  {
    name: "SNDI",
    logo: "/img/sndi.png",
    siteWeb: "https://www.sndi.ci",
    pays: "Côte d'Ivoire"
  },
  {
    name: "ARTCI",
    logo: "/img/artci.png",
    siteWeb: "https://www.artci.ci",
    pays: "Côte d'Ivoire"
  },
  {
    name: "ANSUT",
    logo: "/img/ansut.png",
    siteWeb: "https://ansut.ci",
    pays: "Côte d'Ivoire"
  },
  {
    name: "AIGF",
    logo: "/img/aigf.png",
    siteWeb: "https://www.aigf.ci",
    pays: "Côte d'Ivoire"
  },
  {
    name: "VITIB",
    logo: "/img/vitib.jpg",
    siteWeb: "https://www.vitib.ci",
    pays: "Côte d'Ivoire"
  },
  {
    name: "FJN",
    logo: "/img/fondation-jeunesse-numerique.png",
    siteWeb: "https://www.fondation-jeunesse-numerique.ci",
    pays: "Côte d'Ivoire"
  },
  {
    name: "AUF",
    logo: "/img/AUF - Agence Universitaire de la Francophonie.png",
    siteWeb: "https://www.auf.org",
    pays: "International"
  },
  {
    name: "ONUDI",
    logo: "/img/onudi.png",
    siteWeb: "https://www.unido.org",
    pays: "International"
  },
  {
    name: "Smart Africa",
    logo: "/img/smart.png",
    siteWeb: "https://smartafrica.org",
    pays: "International"
  },
  {
    name: "UNITEL",
    logo: "/img/unitel.png",
    siteWeb: "https://www.unitel.ci",
    pays: "Côte d'Ivoire"
  },
  {
    name: "Huawei",
    logo: "/img/huawei.png",
    siteWeb: "https://www.huawei.com",
    pays: "International"
  },
  {
    name: "Sah Analytics",
    logo: "/img/sah.jpg",
    siteWeb: "https://sahanalytics.com/",
    pays: "Côte d'Ivoire"
  },
  {
    name: "UIT",
    logo: "/img/itu.png",
    siteWeb: "https://www.itu.int",
    pays: "International"
  }
];

// Configuration des universités pour le défilement en haut
export interface Universite {
  name: string;
  logo: string;
  siteWeb?: string;
  pays: string;
}

export const universites: Universite[] = [
  {
    name: "ESATIC",
    logo: "/img/esatic.png",
    siteWeb: "https://www.esatic.edu.ci",
    pays: "Côte d'Ivoire"
  },

  {
    name: "INPHB",
    logo: "/img/in.png",
    siteWeb: "https://www.inphb.ci",
    pays: "Côte d'Ivoire"
  },
  {
    name: "UAO",
    logo: "/img/uao.jpg",
    siteWeb: "https://www.uao.edu.ci",
    pays: "Côte d'Ivoire"
  },
  {
    name: "UFHB",
    logo: "/img/ufhb.jpg",
    siteWeb: "https://www.univ-fhb.edu.ci",
    pays: "Côte d'Ivoire"
  },
  // {
  //   name: "ENSEA",
  //   logo: "/img/ensea.png",
  //   siteWeb: "https://www.ensea.ci",
  //   pays: "Côte d'Ivoire"
  // },
  {
    name: "UVCI",
    logo: "/img/uvci.png",
    siteWeb: "https://www.uvci.edu.ci",
    pays: "Côte d'Ivoire"
  },
  {
    name: "USP",
    logo: "/img/usp.jpg",
    siteWeb: "https://www.univ-sanpedro.ci",
    pays: "Côte d'Ivoire"
  },
  {
    name: "UNA",
    logo: "/img/una.png",
    siteWeb: "https://www.univ-naa.ci",
    pays: "Côte d'Ivoire"
  },
  {
    name: "IRMA",
    logo: "/img/irma.jpg",
    siteWeb: "https://www.irma.ci",
    pays: "Côte d'Ivoire"
  },
  {
    name: "UJK",
    logo: "/img/uJKZ.jpg",
    siteWeb: "https://www.univ-ouaga.bf",
    pays: "Burkina Faso"
  },
  {
    name: "UGB",
    logo: "/img/UGBS.jpg",
    siteWeb: "https://www.ugb.sn",
    pays: "Sénégal"
  },
  {
    name: "UC",
    logo: "/img/UDC.jpg",
    siteWeb: "https://www.univ-conakry.org",
    pays: "Guinée"
  },
  {
    name: "UNB",
    logo: "/img/UNB.png",
    siteWeb: "https://www.unb.bf",
    pays: "Burkina Faso"
  },
  {
    name: "2iE",
    logo: "/img/2iE.png",
    siteWeb: "https://www.2ie-edu.org",
    pays: "Burkina Faso"
  },
  {
    name: "Université de Lomé",
    logo: "/img/UDL.png",
    siteWeb: "https://www.univ-lome.tg",
    pays: "Togo"
  },
  {
    name: "UCAD",
    logo: "/img/UCAD.png",
    siteWeb: "https://www.ucad.sn",
    pays: "Sénégal"
  },

];