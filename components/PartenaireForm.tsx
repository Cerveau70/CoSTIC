import React, { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../firebase';

interface PartenaireFormData {
  nom: string;
  pays: string;
  email: string;
  telephone: string;
  siteWeb: string;
  description: string;
  typePartenaire: string;
  logo: File | null;
}

const PartenaireForm: React.FC = () => {
  const [formData, setFormData] = useState<PartenaireFormData>({
    nom: '',
    pays: '',
    email: '',
    telephone: '',
    siteWeb: '',
    description: '',
    typePartenaire: 'institutionnel',
    logo: null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, logo: e.target.files![0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('');
    setIsSubmitting(true);

    try {
      let logoUrl = '';

      // Upload du logo si fourni
      if (formData.logo) {
        const storageRef = ref(storage, `partenaires/${Date.now()}_${formData.logo.name}`);
        await uploadBytes(storageRef, formData.logo);
        logoUrl = await getDownloadURL(storageRef);
      }

      // Sauvegarder les données du partenaire
      await addDoc(collection(db, "partenaires"), {
        ...formData,
        logoUrl,
        statut: 'en_attente',
        dateSoumission: serverTimestamp()
      });

      setStatus('Succès : Votre demande de partenariat a été soumise avec succès ! Nous vous contacterons bientôt.');
      setFormData({
        nom: '',
        pays: '',
        email: '',
        telephone: '',
        siteWeb: '',
        description: '',
        typePartenaire: 'institutionnel',
        logo: null
      });

      // Reset file input
      const fileInput = document.getElementById('logo') as HTMLInputElement;
      if (fileInput) fileInput.value = '';

    } catch (error) {
      console.error('Erreur lors de la soumission:', error);
      setStatus('Erreur : Impossible de soumettre votre demande. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyle = "w-full px-4 py-3 bg-white border border-neutral-300 rounded-lg shadow-sm transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent font-body";
  const labelStyle = "block text-neutral-700 font-semibold mb-2 font-sans";

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white rounded-xl shadow-2xl">
      <h2 className="text-3xl font-bold text-primary mb-6 text-center font-sans">Devenir Partenaire</h2>
      <p className="text-center text-neutral-600 mb-8">
        Rejoignez-nous en tant que partenaire du CoSTIC 2026 et participez à l'innovation numérique en Afrique.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="nom" className={labelStyle}>Nom de l'organisation *</label>
            <input
              type="text"
              id="nom"
              name="nom"
              value={formData.nom}
              onChange={handleInputChange}
              className={inputStyle}
              required
              disabled={isSubmitting}
            />
          </div>
          <div>
            <label htmlFor="pays" className={labelStyle}>Pays *</label>
            <input
              type="text"
              id="pays"
              name="pays"
              value={formData.pays}
              onChange={handleInputChange}
              className={inputStyle}
              required
              disabled={isSubmitting}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="email" className={labelStyle}>Email de contact *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={inputStyle}
              required
              disabled={isSubmitting}
            />
          </div>
          <div>
            <label htmlFor="telephone" className={labelStyle}>Téléphone</label>
            <input
              type="tel"
              id="telephone"
              name="telephone"
              value={formData.telephone}
              onChange={handleInputChange}
              className={inputStyle}
              disabled={isSubmitting}
            />
          </div>
        </div>

        <div>
          <label htmlFor="siteWeb" className={labelStyle}>Site web</label>
          <input
            type="url"
            id="siteWeb"
            name="siteWeb"
            value={formData.siteWeb}
            onChange={handleInputChange}
            className={inputStyle}
            placeholder="https://www.exemple.com"
            disabled={isSubmitting}
          />
        </div>

        <div>
          <label htmlFor="typePartenaire" className={labelStyle}>Type de partenariat *</label>
          <select
            id="typePartenaire"
            name="typePartenaire"
            value={formData.typePartenaire}
            onChange={handleInputChange}
            className={inputStyle}
            required
            disabled={isSubmitting}
          >
            <option value="institutionnel">Institutionnel (Université, Centre de recherche)</option>
            <option value="entreprise">Entreprise privée</option>
            <option value="organisation">Organisation internationale</option>
            <option value="gouvernemental">Gouvernemental</option>
            <option value="media">Média</option>
            <option value="autre">Autre</option>
          </select>
        </div>

        <div>
          <label htmlFor="description" className={labelStyle}>Description de votre organisation *</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className={inputStyle}
            rows={4}
            placeholder="Décrivez votre organisation, ses activités et son intérêt pour le partenariat..."
            required
            disabled={isSubmitting}
          />
        </div>

        <div>
          <label htmlFor="logo" className={labelStyle}>Logo de votre organisation</label>
          <input
            type="file"
            id="logo"
            name="logo"
            onChange={handleFileChange}
            accept="image/*"
            className="w-full text-sm text-neutral-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-secondary/10 file:text-primary hover:file:bg-secondary/20 cursor-pointer font-body"
            disabled={isSubmitting}
          />
          <p className="text-xs text-neutral-500 mt-1">Formats acceptés: JPG, PNG, SVG (max 2MB)</p>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary text-white font-bold py-4 px-8 rounded-lg hover:bg-primary/90 transition-all duration-300 text-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 font-sans disabled:bg-neutral-400 disabled:cursor-not-allowed flex justify-center items-center"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Soumission en cours...
            </>
          ) : "Soumettre la demande de partenariat"}
        </button>

        {status && (
          <p className={`text-center text-sm ${status.startsWith('Erreur') ? 'text-red-600' : 'text-green-600'}`}>
            {status}
          </p>
        )}
      </form>
    </div>
  );
};

export default PartenaireForm;
