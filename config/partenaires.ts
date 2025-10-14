export interface Partenaire {
  name: string;
  logo: string;
  siteWeb?: string;
  pays: string;
  bgColor?: string;
  hoverColor?: string;
}

export const partenairesDefaut: Partenaire[] = [
  {
    name: 'INPHB',
    logo: '/img/in.png',
    siteWeb: 'https://inphb.ci',
    pays: 'Côte d\'Ivoire',
    bgColor: 'bg-partner-blue',
    hoverColor: 'hover:bg-partner-blue-hover'
  },
  {
    name: 'UFHB',
    logo: '/img/ufhb.jpg',
    siteWeb: 'https://ufhb.ci',
    pays: 'Côte d\'Ivoire',
    bgColor: 'bg-partner-green',
    hoverColor: 'hover:bg-partner-green-hover'
  },
  {
    name: 'ENSEA',
    logo: '/img/ensea.png',
    siteWeb: 'https://ensea.ci',
    pays: 'Côte d\'Ivoire',
    bgColor: 'bg-partner-red',
    hoverColor: 'hover:bg-partner-red-hover'
  },
  {
    name: 'UVCI',
    logo: '/img/uvci.png',
    siteWeb: 'https://uvci.ci',
    pays: 'Côte d\'Ivoire',
    bgColor: 'bg-partner-purple',
    hoverColor: 'hover:bg-partner-purple-hover'
  },
  {
    name: 'Université de San Pedro',
    logo: '/img/usp.jpg',
    siteWeb: 'https://usp.ci',
    pays: 'Côte d\'Ivoire',
    bgColor: 'bg-partner-orange',
    hoverColor: 'hover:bg-partner-orange-hover'
  },
  {
    name: 'Université Nangui Abrogoua',
    logo: '/img/una.png',
    siteWeb: 'https://una.ci',
    pays: 'Côte d\'Ivoire',
    bgColor: 'bg-partner-indigo',
    hoverColor: 'hover:bg-partner-indigo-hover'
  },
  {
    name: 'IRMA',
    logo: '/img/irma.png',
    siteWeb: 'https://irma.ci',
    pays: 'Côte d\'Ivoire',
    bgColor: 'bg-partner-emerald',
    hoverColor: 'hover:bg-partner-emerald-hover'
  },
  {
    name: 'Centre De Recherche Oceanologique (CRO)',
    logo: '/img/cro.png',
    siteWeb: 'https://cro.ci',
    pays: 'Côte d\'Ivoire',
    bgColor: 'bg-partner-teal',
    hoverColor: 'hover:bg-partner-teal-hover'
  },
  {
    name: 'Institut Pasteur de Côte d Ivoire',
    logo: '/img/institut paseur.jpg',
    siteWeb: 'https://pasteur.ci',
    pays: 'Côte d\'Ivoire',
    bgColor: 'bg-partner-rose',
    hoverColor: 'hover:bg-partner-rose-hover'
  },
  {
    name: 'UFR de Mathematique et Informatique',
    logo: '/img/ufr maths-infos.jpg',
    siteWeb: 'https://ufr-math-info.ci',
    pays: 'Côte d\'Ivoire',
    bgColor: 'bg-partner-violet',
    hoverColor: 'hover:bg-partner-violet-hover'
  },
  {
    name: 'Université Joseph Ki-Zerbo',
    logo: '/img/uJKZ.jpg',
    siteWeb: 'https://www.univ-ouaga.bf',
    pays: 'Burkina Faso',
    bgColor: 'bg-partner-blue',
    hoverColor: 'hover:bg-partner-blue-hover'
  },
  {
    name: 'Université Gaston Berger',
    logo: '/img/UGBS.jpg',
    siteWeb: 'https://www.ugb.sn',
    pays: 'Sénégal',
    bgColor: 'bg-partner-green',
    hoverColor: 'hover:bg-partner-green-hover'
  },
  {
    name: 'Université de Conakry',
    logo: '/img/UDC.jpg',
    siteWeb: 'https://www.univ-conakry.org',
    pays: 'Guinée',
    bgColor: 'bg-partner-red',
    hoverColor: 'hover:bg-partner-red-hover'
  },
  {
    name: 'Université Nazi Boni',
    logo: '/img/UNB.png',
    siteWeb: 'https://www.unb.bf',
    pays: 'Burkina Faso',
    bgColor: 'bg-partner-purple',
    hoverColor: 'hover:bg-partner-purple-hover'
  },
  {
    name: 'Université 2iE',
    logo: '/img/2iE.png',
    siteWeb: 'https://www.2ie-edu.org',
    pays: 'Burkina Faso',
    bgColor: 'bg-partner-orange',
    hoverColor: 'hover:bg-partner-orange-hover'
  },
  {
    name: 'Université de Lomé',
    logo: '/img/UDL.png',
    siteWeb: 'https://www.univ-lome.tg',
    pays: 'Togo',
    bgColor: 'bg-partner-indigo',
    hoverColor: 'hover:bg-partner-indigo-hover'
  },
  {
    name: 'Université Cheikh Anta Diop (UCAD)',
    logo: '/img/UCAD.png',
    siteWeb: 'https://www.ucad.sn',
    pays: 'Sénégal',
    bgColor: 'bg-partner-emerald',
    hoverColor: 'hover:bg-partner-emerald-hover'
  }
];
