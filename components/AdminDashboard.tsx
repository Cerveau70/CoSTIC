import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy, where } from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import { auth, db } from '../firebase';
import AdminPartenaires from './AdminPartenaires';

interface Submission {
  id: string;
  authorName: string;
  authorEmail: string;
  affiliation: string;
  articleTitle: string;
  themeSelect: string;
  fileName: string;
  fileUrl: string;
  submittedAt: any;
}

interface Registration {
  id: string;
  name: string;
  email: string;
  participantType: string;
  paymentStatus: string;
  amount: number;
  currency: string;
  paymentReference?: string;
  registeredAt: any;
  paymentDate?: any;
}

interface TemplateDownload {
  id: string;
  format: 'docx' | 'latex' | string;
  path: string;
  userAgent?: string;
  downloadedAt: any;
}

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'submissions' | 'participants' | 'partenaires' | 'templates'>('submissions');
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [participants, setParticipants] = useState<Registration[]>([]);
  const [templateDownloads, setTemplateDownloads] = useState<TemplateDownload[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    try {
      // Charger les soumissions d'articles
      const submissionsQuery = query(collection(db, 'submissions'), orderBy('submittedAt', 'desc'));
      const submissionsSnapshot = await getDocs(submissionsQuery);
      const submissionsData = submissionsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Submission[];

      // Charger les participants (inscriptions avec paiement réussi)
      const participantsQuery = query(collection(db, 'registrations'), orderBy('registeredAt', 'desc'));
      const participantsSnapshot = await getDocs(participantsQuery);
      const participantsData = participantsSnapshot.docs
        .map(doc => ({ id: doc.id, ...doc.data() }))
        .filter(reg => reg.paymentStatus === 'completed') as Registration[];

      setSubmissions(submissionsData);
      setParticipants(participantsData);

      // Charger les téléchargements de modèles
      const templatesQuery = query(collection(db, 'templateDownloads'), orderBy('downloadedAt', 'desc'));
      const templatesSnapshot = await getDocs(templatesQuery);
      const templatesData = templatesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as TemplateDownload[];
      setTemplateDownloads(templatesData);
    } catch (error) {
      console.error('Erreur lors du chargement des données:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Erreur lors de la déconnexion:', error);
    }
  };

  const downloadFile = async (fileUrl: string, fileName: string) => {
    try {
      const response = await fetch(fileUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Erreur lors du téléchargement:', error);
      alert('Erreur lors du téléchargement du fichier');
    }
  };

  const formatDate = (timestamp: any) => {
    if (!timestamp) return 'N/A';
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-neutral-100 flex items-center justify-center">
        <div className="text-center">
          <svg className="animate-spin h-12 w-12 text-primary mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <p className="text-neutral-600">Chargement des données...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-100">
      {/* Header */}
      <header className="bg-primary text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-2xl font-bold font-sans">Dashboard Administrateur</h1>
              <p className="text-neutral-200">CoSTIC 2026 - Gestion du Colloque</p>
            </div>
            <div className="flex space-x-3">
              <a
                href="/"
                className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors duration-300 flex items-center space-x-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span>Accueil</span>
              </a>
              <button
                onClick={handleLogout}
                className="bg-secondary hover:bg-secondary/90 text-white px-4 py-2 rounded-lg transition-colors duration-300 flex items-center space-x-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                <span>Déconnexion</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="border-b border-neutral-200">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('submissions')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${activeTab === 'submissions'
                ? 'border-primary text-primary'
                : 'border-transparent text-neutral-500 hover:text-neutral-700 hover:border-neutral-300'
                }`}
            >
              Articles Soumis ({submissions.length})
            </button>
            <button
              onClick={() => setActiveTab('participants')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${activeTab === 'participants'
                ? 'border-primary text-primary'
                : 'border-transparent text-neutral-500 hover:text-neutral-700 hover:border-neutral-300'
                }`}
            >
              Participants ({participants.length})
            </button>
            <button
              onClick={() => setActiveTab('partenaires')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${activeTab === 'partenaires'
                ? 'border-primary text-primary'
                : 'border-transparent text-neutral-500 hover:text-neutral-700 hover:border-neutral-300'
                }`}
            >
              Partenaires
            </button>
            <button
              onClick={() => setActiveTab('templates')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${activeTab === 'templates'
                ? 'border-primary text-primary'
                : 'border-transparent text-neutral-500 hover:text-neutral-700 hover:border-neutral-300'
                }`}
            >
              Modèles
            </button>
          </nav>
        </div>

        {/* Content */}
        <div className="mt-8">
          {activeTab === 'submissions' && (
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="px-6 py-4 border-b border-neutral-200">
                <h2 className="text-xl font-bold text-neutral-900 font-sans">Articles Soumis</h2>
                <p className="text-neutral-600">Liste de tous les articles soumis au colloque</p>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-neutral-200">
                  <thead className="bg-neutral-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Nom</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Email</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Affiliation</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Titre de l'article</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Track/Thématique</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Fichier PDF</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Heure de soumission</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-neutral-200">
                    {submissions.map((submission) => (
                      <tr key={submission.id} className="hover:bg-neutral-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-neutral-900">{submission.authorName}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-neutral-500">{submission.authorEmail}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-neutral-500">{submission.affiliation || 'N/A'}</div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-neutral-900 max-w-xs truncate" title={submission.articleTitle}>
                            {submission.articleTitle}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-secondary/10 text-secondary">
                            {submission.themeSelect || 'Non spécifié'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-neutral-700 max-w-xs truncate" title={submission.fileName}>
                            {submission.fileName}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">
                          {formatDate(submission.submittedAt)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button
                            onClick={() => downloadFile(submission.fileUrl, submission.fileName)}
                            className="text-primary hover:text-primary/80 flex items-center space-x-1"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <span>Télécharger</span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {submissions.length === 0 && (
                  <div className="text-center py-12">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-neutral-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <p className="text-neutral-500">Aucun article soumis pour le moment</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'participants' && (
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="px-6 py-4 border-b border-neutral-200">
                <h2 className="text-xl font-bold text-neutral-900 font-sans">Participants Inscrits</h2>
                <p className="text-neutral-600">Liste des participants ayant effectué leur paiement</p>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-neutral-200">
                  <thead className="bg-neutral-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Nom</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Email</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Type</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Montant</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Référence</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Date</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-neutral-200">
                    {participants.map((participant) => (
                      <tr key={participant.id} className="hover:bg-neutral-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-neutral-900">
                          {participant.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">
                          {participant.email}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${participant.participantType === 'etudiant'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-blue-100 text-blue-800'
                            }`}>
                            {participant.participantType === 'etudiant' ? 'Étudiant' : 'Chercheur'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-900">
                          {participant.amount.toLocaleString()} {participant.currency}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500 font-mono">
                          {participant.paymentReference || 'N/A'}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">
                          {formatDate(participant.paymentDate || participant.registeredAt)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {participants.length === 0 && (
                  <div className="text-center py-12">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-neutral-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="text-neutral-500">Aucun participant inscrit pour le moment</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'partenaires' && (
            <AdminPartenaires />
          )}

          {activeTab === 'templates' && (
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="px-6 py-4 border-b border-neutral-200">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-xl font-bold text-neutral-900 font-sans">Téléchargements des Modèles</h2>
                    <p className="text-neutral-600">Statistiques et historique des téléchargements (DOCX et LaTeX)</p>
                  </div>
                  <button
                    onClick={loadData}
                    className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors flex items-center space-x-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    <span>Actualiser</span>
                  </button>
                </div>
              </div>

              {/* Statistiques globales */}
              <div className="px-6 py-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="rounded-lg border border-neutral-200 p-4 bg-blue-50">
                  <div className="text-sm text-blue-600 font-medium">Total DOCX</div>
                  <div className="text-2xl font-bold text-blue-700">
                    {templateDownloads.filter(t => t.format === 'docx').length}
                  </div>
                </div>
                <div className="rounded-lg border border-neutral-200 p-4 bg-green-50">
                  <div className="text-sm text-green-600 font-medium">Total LaTeX</div>
                  <div className="text-2xl font-bold text-green-700">
                    {templateDownloads.filter(t => t.format === 'latex').length}
                  </div>
                </div>
                <div className="rounded-lg border border-neutral-200 p-4 bg-neutral-50">
                  <div className="text-sm text-neutral-600 font-medium">Total</div>
                  <div className="text-2xl font-bold text-neutral-800">
                    {templateDownloads.length}
                  </div>
                </div>
                <div className="rounded-lg border border-neutral-200 p-4 bg-purple-50">
                  <div className="text-sm text-purple-600 font-medium">Aujourd'hui</div>
                  <div className="text-2xl font-bold text-purple-700">
                    {templateDownloads.filter(t => {
                      const today = new Date();
                      const downloadDate = t.downloadedAt?.toDate ? t.downloadedAt.toDate() : new Date(t.downloadedAt);
                      return downloadDate.toDateString() === today.toDateString();
                    }).length}
                  </div>
                </div>
              </div>


              {/* Historique détaillé */}
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-neutral-200">
                  <thead className="bg-neutral-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Format</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Fichier</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Agent</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Date</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-neutral-200">
                    {templateDownloads.map(item => (
                      <tr key={item.id} className="hover:bg-neutral-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${item.format === 'docx' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}`}>
                            {item.format.toUpperCase()}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-neutral-700">{item.path}</td>
                        <td className="px-6 py-4 text-xs text-neutral-500 max-w-xs truncate" title={item.userAgent}>{item.userAgent || 'N/A'}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">{formatDate(item.downloadedAt)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {templateDownloads.length === 0 && (
                  <div className="text-center py-12">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-neutral-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <p className="text-neutral-500">Aucun téléchargement enregistré pour le moment</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
