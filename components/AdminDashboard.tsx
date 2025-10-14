import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
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

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'submissions' | 'participants' | 'partenaires'>('submissions');
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [participants, setParticipants] = useState<Registration[]>([]);
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
      minute: '2-digit'
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
                      <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Auteur</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Titre</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Thématique</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-neutral-200">
                    {submissions.map((submission) => (
                      <tr key={submission.id} className="hover:bg-neutral-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div>
                            <div className="text-sm font-medium text-neutral-900">{submission.authorName}</div>
                            <div className="text-sm text-neutral-500">{submission.authorEmail}</div>
                            <div className="text-sm text-neutral-500">{submission.affiliation}</div>
                          </div>
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
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
