import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Traductions françaises
const fr = {
  translation: {
    // Hero Section
    hero_subtitle: "Colloque Scientifique sur les Technologies de l'Information et de la Communication",
    date_value: "21-22-23 Mai 2026",
    place_value: "ESATIC, Abidjan, Côte d'Ivoire",
    hero_submit: "Soumettre un article",
    hero_register: "S'inscrire",
    hero_partner: "Devenir partenaire",

    // Sections
    section_about_title: "À Propos",
    about_paragraph: "Le Colloque Scientifique sur les Technologies de l'Information et de la Communication (CoSTIC) est un événement majeur qui rassemble chercheurs, professionnels et étudiants autour des enjeux du numérique en Afrique.",

    // Timeline
    timeline_title: "Calendrier",
    tl_1_date: "15 Janvier 2026",
    tl_1_desc: "Ouverture des soumissions",
    tl_2_date: "15 Mars 2026",
    tl_2_desc: "Date limite de soumission",
    tl_3_date: "15 Avril 2026",
    tl_3_desc: "Notification aux auteurs",
    tl_4_date: "1er Mai 2026",
    tl_4_desc: "Version finale",
    tl_5_date: "21-22-23 Mai 2026",
    tl_5_desc: "Colloque CoSTIC 2026",

    // Lieu et Date
    place_title: "Lieu et Date",
    date_label: "Date",
    place_label: "Lieu",

    // Objectifs
    goals_title: "Objectifs",
    general_objective_title: "Objectif Général",
    general_objective_text: "Créer un espace d'échange et de partage des connaissances en matière de technologies de l'information et de la communication pour le développement durable de l'Afrique.",
    specific_objectives_title: "Objectifs Spécifiques",
    so_1: "Promouvoir la recherche en TIC en Afrique",
    so_2: "Favoriser les échanges entre chercheurs et professionnels",
    so_3: "Encourager l'innovation technologique",
    so_4: "Renforcer les capacités en TIC",

    // Appel à communications
    cfp_title: "Appel à Communications",
    theme_general_title: "Thème Général",
    theme_general_text: "Technologies de l'Information et de la Communication pour le Développement Durable en Afrique",
    submission_modalities_title: "Modalités de Soumission",
    modality_format_title: "Format",
    modality_format_desc: "Articles de 6-8 pages en français ou anglais",
    modality_lang_title: "Langues",
    modality_lang_desc: "Français et Anglais",
    modality_pub_title: "Publication",
    modality_pub_desc: "Actes du colloque et revue scientifique",
    models_title: "Modèles de Soumission",
    models_desc: "Téléchargez les modèles de soumission",
    model_word: "Modèle Word",
    model_latex: "Modèle LaTeX",
    submission_form_title: "Formulaire de Soumission",
    label_author_name: "Nom de l'auteur",
    label_author_email: "Email de l'auteur",
    label_affiliation: "Affiliation",
    label_article_title: "Titre de l'article",
    label_theme_select: "Thème",
    theme_placeholder: "Sélectionnez un thème",
    label_file_upload: "Fichier PDF",
    submit_article_btn: "Soumettre l'article",
    submitting_text: "Soumission en cours...",

    // Inscription
    registration_title: "Inscription",
    registration_intro: "Inscrivez-vous au colloque CoSTIC 2026 et participez à cet événement exceptionnel.",
    label_name: "Nom complet",
    label_email: "Email",
    label_participant_type: "Type de participant",
    option_researcher: "Chercheur",
    option_student: "Étudiant",
    summary_title: "Résumé",
    summary_category: "Catégorie",
    summary_total: "Total",
    pay_btn: "Payer maintenant",
    registering_text: "Inscription en cours...",
    payment_note: "Paiement sécurisé via Paystack",

    // Comité scientifique
    participants_title: "Participants",
    committee_title: "Comité Scientifique",
    committee_paragraph: "Notre comité scientifique est composé d'experts reconnus dans le domaine des TIC.",
    partnerships_title: "Partenariats",
    partnerships_paragraph: "Nous remercions nos partenaires pour leur soutien.",
    partner_card_1_title: "Partenaires Institutionnels",
    partner_card_1_desc: "Ministères et institutions publiques",
    partner_card_2_title: "Partenaires Technologiques",
    partner_card_2_desc: "Entreprises du secteur TIC",
    partner_card_3_title: "Partenaires Académiques",
    partner_card_3_desc: "Universités et centres de recherche",

    // Publications
    publications_title: "Publications",
    proceedings_title: "Actes du Colloque",
    proceedings_text: "Les actes du colloque seront publiés et indexés dans les bases de données scientifiques.",
    proceedings_soon: "Bientôt disponible",
    journal_title: "Revue Scientifique",
    journal_text: "Les meilleurs articles seront publiés dans une revue scientifique spécialisée.",

    // Résultats attendus
    outcomes_title: "Résultats Attendus",

    // Contexte
    context_title: "Contexte et Justification",
    context_heading: "Pourquoi CoSTIC 2026 ?",
    context_paragraph: "L'Afrique fait face à des défis majeurs en matière de développement numérique. CoSTIC 2026 vise à créer un espace de réflexion et d'échange pour relever ces défis.",
    context_quote: "Le numérique est un levier de développement pour l'Afrique. Il faut investir dans la recherche et l'innovation pour en tirer le meilleur parti.",

    // Navigation
    Acceuil: "Accueil",
    Soumission: "Soumission",
    "Comité Scientifique": "Comité Scientifique",
    "A propos": "À Propos",
    "Espace administrateur": "Espace administrateur",
    admin_space: "Admin",

    // Footer
    ESATIC: "École Supérieure Africaine des Technologies de l'Information et de la Communication",
    footer_contact: "Contact",
    footer_secretariat: "Secrétariat du Colloque",
    footer_stay_informed: "Restez informé",
    footer_newsletter_desc: "Inscrivez-vous à notre newsletter pour recevoir les dernières actualités du colloque.",
    footer_email_placeholder: "Votre adresse e-mail",
    footer_newsletter_error: "Erreur lors de l'inscription à la newsletter",
    Newsletter: "Inscription réussie à la newsletter !",

    // Section Partenaires
    partner_section_title: "Devenir Partenaire",
    partner_intro: "Rejoignez-nous en tant que partenaire et contribuez au succès de CoSTIC 2026",
    partner_org_name: "Nom de l'Organisation",
    partner_country: "Pays",
    partner_contact_email: "Email de Contact",
    partner_phone: "Numéro de Téléphone",
    partner_website: "Site Web",
    partner_website_placeholder: "https://www.exemple.com",
    partner_type: "Type de Partenaire",
    partner_type_institution: "Institutionnel",
    partner_type_company: "Entreprise",
    partner_type_org: "Organisation",
    partner_type_gov: "Gouvernemental",
    partner_type_media: "Média",
    partner_type_other: "Autre",
    partner_org_desc: "Description de l'Organisation",
    partner_org_desc_placeholder: "Décrivez votre organisation, ses activités et son intérêt pour le partenariat...",
    partner_logo_label: "Logo de l'Organisation",
    partner_logo_hint: "Téléchargez le logo de votre organisation (PNG, JPG, max 2MB)",
    partner_submit: "Soumettre la Demande de Partenariat",
    partner_submitting: "Soumission en cours...",
    partner_success: "Demande de partenariat soumise avec succès !",
    partner_error: "Erreur lors de la soumission. Veuillez réessayer."
  }
};

// Traductions anglaises
const en = {
  translation: {
    // Hero Section
    hero_subtitle: "Scientific Conference on Information and Communication Technologies",
    date_value: "May 21-22-23, 2026",
    place_value: "ESATIC, Abidjan, Côte d'Ivoire",
    hero_submit: "Submit paper",
    hero_register: "Register",
    hero_partner: "Become partner",

    // Sections
    section_about_title: "About",
    about_paragraph: "The Scientific Conference on Information and Communication Technologies (CoSTIC) is a major event that brings together researchers, professionals and students around digital issues in Africa.",

    // Timeline
    timeline_title: "Timeline",
    tl_1_date: "January 15, 2026",
    tl_1_desc: "Submission opens",
    tl_2_date: "March 15, 2026",
    tl_2_desc: "Submission deadline",
    tl_3_date: "April 15, 2026",
    tl_3_desc: "Author notification",
    tl_4_date: "May 1, 2026",
    tl_4_desc: "Final version",
    tl_5_date: "May 21-22-23, 2026",
    tl_5_desc: "CoSTIC 2026 Conference",

    // Lieu et Date
    place_title: "Venue and Date",
    date_label: "Date",
    place_label: "Venue",

    // Objectifs
    goals_title: "Objectives",
    general_objective_title: "General Objective",
    general_objective_text: "Create a space for exchange and sharing of knowledge in information and communication technologies for sustainable development in Africa.",
    specific_objectives_title: "Specific Objectives",
    so_1: "Promote ICT research in Africa",
    so_2: "Foster exchanges between researchers and professionals",
    so_3: "Encourage technological innovation",
    so_4: "Strengthen ICT capacities",

    // Appel à communications
    cfp_title: "Call for Papers",
    theme_general_title: "General Theme",
    theme_general_text: "Information and Communication Technologies for Sustainable Development in Africa",
    submission_modalities_title: "Submission Modalities",
    modality_format_title: "Format",
    modality_format_desc: "6-8 page articles in French or English",
    modality_lang_title: "Languages",
    modality_lang_desc: "French and English",
    modality_pub_title: "Publication",
    modality_pub_desc: "Conference proceedings and scientific journal",
    models_title: "Submission Templates",
    models_desc: "Download submission templates",
    model_word: "Word Template",
    model_latex: "LaTeX Template",
    submission_form_title: "Submission Form",
    label_author_name: "Author name",
    label_author_email: "Author email",
    label_affiliation: "Affiliation",
    label_article_title: "Article title",
    label_theme_select: "Theme",
    theme_placeholder: "Select a theme",
    label_file_upload: "PDF File",
    submit_article_btn: "Submit article",
    submitting_text: "Submitting...",

    // Inscription
    registration_title: "Registration",
    registration_intro: "Register for CoSTIC 2026 conference and participate in this exceptional event.",
    label_name: "Full name",
    label_email: "Email",
    label_participant_type: "Participant type",
    option_researcher: "Researcher",
    option_student: "Student",
    summary_title: "Summary",
    summary_category: "Category",
    summary_total: "Total",
    pay_btn: "Pay now",
    registering_text: "Registering...",
    payment_note: "Secure payment via Paystack",

    // Comité scientifique
    participants_title: "Participants",
    committee_title: "Scientific Committee",
    committee_paragraph: "Our scientific committee is composed of recognized experts in the ICT field.",
    partnerships_title: "Partnerships",
    partnerships_paragraph: "We thank our partners for their support.",
    partner_card_1_title: "Institutional Partners",
    partner_card_1_desc: "Ministries and public institutions",
    partner_card_2_title: "Technology Partners",
    partner_card_2_desc: "ICT sector companies",
    partner_card_3_title: "Academic Partners",
    partner_card_3_desc: "Universities and research centers",

    // Publications
    publications_title: "Publications",
    proceedings_title: "Conference Proceedings",
    proceedings_text: "Conference proceedings will be published and indexed in scientific databases.",
    proceedings_soon: "Coming soon",
    journal_title: "Scientific Journal",
    journal_text: "Best articles will be published in a specialized scientific journal.",

    // Résultats attendus
    outcomes_title: "Expected Outcomes",

    // Contexte
    context_title: "Context and Justification",
    context_heading: "Why CoSTIC 2026?",
    context_paragraph: "Africa faces major challenges in digital development. CoSTIC 2026 aims to create a space for reflection and exchange to address these challenges.",
    context_quote: "Digital is a lever for development in Africa. We must invest in research and innovation to make the most of it.",

    // Navigation
    Acceuil: "Home",
    Soumission: "Submission",
    "Comité Scientifique": "Scientific Committee",
    "A propos": "About",
    "Espace administrateur": "Administrator space",
    admin_space: "Admin",

    // Footer
    ESATIC: "African Higher School of Information and Communication Technologies",
    footer_contact: "Contact",
    footer_secretariat: "Conference Secretariat",
    footer_stay_informed: "Stay informed",
    footer_newsletter_desc: "Subscribe to our newsletter to receive the latest conference news.",
    footer_email_placeholder: "Your email address",
    footer_newsletter_error: "Error subscribing to newsletter",
    Newsletter: "Successfully subscribed to newsletter!",

    // Partner Section
    partner_section_title: "Become a Partner",
    partner_intro: "Join us as a partner and contribute to the success of CoSTIC 2026",
    partner_org_name: "Organization Name",
    partner_country: "Country",
    partner_contact_email: "Contact Email",
    partner_phone: "Phone Number",
    partner_website: "Website",
    partner_website_placeholder: "https://www.example.com",
    partner_type: "Partner Type",
    partner_type_institution: "Institutional",
    partner_type_company: "Company",
    partner_type_org: "Organization",
    partner_type_gov: "Government",
    partner_type_media: "Media",
    partner_type_other: "Other",
    partner_org_desc: "Organization Description",
    partner_org_desc_placeholder: "Describe your organization, its activities and interest in the partnership...",
    partner_logo_label: "Organization Logo",
    partner_logo_hint: "Upload your organization's logo (PNG, JPG, max 2MB)",
    partner_submit: "Submit Partnership Request",
    partner_submitting: "Submitting...",
    partner_success: "Partnership request submitted successfully!",
    partner_error: "Error submitting request. Please try again."
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      fr,
      en
    },
    fallbackLng: 'fr',
    debug: false,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
