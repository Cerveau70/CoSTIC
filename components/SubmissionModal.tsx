import React, { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../firebase';

interface SubmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SubmissionModal: React.FC<SubmissionModalProps> = ({ isOpen, onClose }) => {
  const [submission, setSubmission] = useState({
    authorName: '', authorEmail: '', affiliation: '', articleTitle: '', themeSelect: '',
  });
  const [file, setFile] = useState<File | null>(null);
  const [submissionStatus, setSubmissionStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const conferenceTracks = [
    { title: 'Intelligence Artificielle et Machine Learning' },
    { title: 'Big Data et Analytics' },
    { title: 'Cybersécurité et Résilience des Réseaux' },
    { title: 'Internet des Objets (IoT) et Systèmes Embarqués' },
    { title: 'Cloud Computing et Infrastructures Numériques' },
    { title: 'Blockchain et Technologies Fintech' },
    { title: 'Transformation digitale et gouvernance numérique' },
    { title: 'Technologies éducatives et pédagogie numérique' },
    { title: 'Télémédecine et Santé numérique' },
    { title: 'Agriculture numérique et Smart Farming' },
    { title: 'Villes intelligentes et Mobilité' },
    { title: 'Environnement et Technologies vertes' },
    { title: 'Autre' }
  ];

  const handleSubmissionChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setSubmission(prev => ({ ...prev, [id]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleArticleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionStatus('');

    if (!submission.authorName || !submission.authorEmail || !submission.articleTitle || !file) {
      setSubmissionStatus('Erreur : Veuillez remplir tous les champs obligatoires et sélectionner un fichier.');
      return;
    }
    setIsSubmitting(true);
    try {
      // 1. Upload file to Firebase Storage
      const storageRef = ref(storage, `submissions/${Date.now()}_${file.name}`);
      await uploadBytes(storageRef, file);

      // 2. Get file URL
      const downloadURL = await getDownloadURL(storageRef);

      // 3. Save submission data to Firestore
      await addDoc(collection(db, "submissions"), {
        ...submission,
        fileUrl: downloadURL,
        fileName: file.name,
        submittedAt: serverTimestamp()
      });

      setSubmissionStatus('Succès : Votre article a été soumis avec succès !');
      setSubmission({
        authorName: '', authorEmail: '', affiliation: '', articleTitle: '', themeSelect: '',
      });
      setFile(null);
      // Clear file input
      const fileInput = document.getElementById('fileUpload') as HTMLInputElement;
      if (fileInput) fileInput.value = "";

    } catch (error) {
      console.error("Error submitting article: ", error);
      setSubmissionStatus("Erreur : Impossible de soumettre l'article. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyle = "w-full px-4 py-3 bg-white border border-neutral-300 rounded-lg shadow-sm transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent font-body";
  const labelStyle = "block text-neutral-700 font-semibold mb-2 font-sans";

  return (
    <div className={`fixed inset-0 z-50 overflow-y-auto ${isOpen ? 'block' : 'hidden'}`}>
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          onClick={onClose}
        ></div>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-primary font-sans">Soumission d'Article</h3>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleArticleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="authorName" className={labelStyle}>Nom de l'auteur principal*</label>
                  <input type="text" id="authorName" value={submission.authorName} onChange={handleSubmissionChange} className={inputStyle} required disabled={isSubmitting} />
                </div>
                <div>
                  <label htmlFor="authorEmail" className={labelStyle}>E-mail*</label>
                  <input type="email" id="authorEmail" value={submission.authorEmail} onChange={handleSubmissionChange} className={inputStyle} required disabled={isSubmitting} />
                </div>
              </div>

              <div>
                <label htmlFor="affiliation" className={labelStyle}>Affiliation</label>
                <input type="text" id="affiliation" value={submission.affiliation} onChange={handleSubmissionChange} className={inputStyle} disabled={isSubmitting} />
              </div>

              <div>
                <label htmlFor="articleTitle" className={labelStyle}>Titre de l'article*</label>
                <input type="text" id="articleTitle" value={submission.articleTitle} onChange={handleSubmissionChange} className={inputStyle} required disabled={isSubmitting} />
              </div>

              <div>
                <label htmlFor="themeSelect" className={labelStyle}>Track/Thématique</label>
                <select id="themeSelect" value={submission.themeSelect} onChange={handleSubmissionChange} className={inputStyle} disabled={isSubmitting}>
                  <option value="">Sélectionnez un track...</option>
                  {conferenceTracks.map(track => <option key={track.title} value={track.title}>{track.title}</option>)}
                </select>
              </div>

              <div>
                <label htmlFor="fileUpload" className={labelStyle}>Fichier (PDF, 5 pages max)*</label>
                <input type="file" id="fileUpload" onChange={handleFileChange} accept=".pdf" className="w-full text-sm text-neutral-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-secondary/10 file:text-primary hover:file:bg-secondary/20 cursor-pointer font-body" required disabled={isSubmitting} />
              </div>

              <div className="flex space-x-4 pt-4">
                <button type="submit" disabled={isSubmitting} className="flex-1 bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 font-sans disabled:bg-neutral-400 disabled:cursor-not-allowed flex justify-center items-center">
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Soumission en cours...
                    </>
                  ) : "Soumettre l'article"}
                </button>
                <button type="button" onClick={onClose} className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200 font-sans">
                  Annuler
                </button>
              </div>

              {submissionStatus && <p className={`mt-4 text-center text-sm ${submissionStatus.startsWith('Erreur') ? 'text-red-600' : 'text-green-600'}`}>{submissionStatus}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmissionModal;
