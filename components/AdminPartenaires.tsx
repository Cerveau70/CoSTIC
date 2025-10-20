import React, { useState, useEffect } from 'react';
import { collection, getDocs, doc, updateDoc, deleteDoc, addDoc, serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { db, storage } from '../firebase';
import { partenairesDefaut } from '../config/partenaires';

interface Partenaire {
  id: string;
  nom: string;
  pays: string;
  email: string;
  telephone?: string;
  siteWeb?: string;
  description: string;
  typePartenaire: string;
  logoUrl?: string;
  statut: 'en_attente' | 'approuve' | 'rejete';
  dateSoumission: any;
  source: 'firebase' | 'statique'; // Pour distinguer les partenaires statiques des dynamiques
}

const AdminPartenaires: React.FC = () => {
  const [partenaires, setPartenaires] = useState<Partenaire[]>([]);
  const [filteredPartenaires, setFilteredPartenaires] = useState<Partenaire[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingPartenaire, setEditingPartenaire] = useState<Partenaire | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'en_attente' | 'approuve' | 'rejete'>('all');
  const [typeFilter, setTypeFilter] = useState<string>('all');
  const [formData, setFormData] = useState({
    nom: '',
    pays: '',
    email: '',
    telephone: '',
    siteWeb: '',
    description: '',
    typePartenaire: 'institutionnel',
    statut: 'approuve' as 'en_attente' | 'approuve' | 'rejete'
  });
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetchPartenaires();
  }, []);

  useEffect(() => {
    filterPartenaires();
  }, [partenaires, searchTerm, statusFilter, typeFilter]);

  const fetchPartenaires = async () => {
    try {
      // Charger les partenaires depuis Firebase
      const querySnapshot = await getDocs(collection(db, "partenaires"));
      const partenairesFirebase = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        source: 'firebase' as const
      })) as Partenaire[];

      // Convertir les partenaires statiques en format unifié
      const partenairesStatiques = partenairesDefaut.map((partenaire, index) => ({
        id: `statique-${index}`,
        nom: partenaire.name,
        pays: partenaire.pays,
        email: '',
        telephone: '',
        siteWeb: partenaire.siteWeb || '',
        description: partenaire.name,
        typePartenaire: 'institutionnel',
        logoUrl: partenaire.logo,
        statut: 'approuve' as const,
        dateSoumission: null,
        source: 'statique' as const
      }));

      // Combiner tous les partenaires
      const tousPartenaires = [...partenairesStatiques, ...partenairesFirebase];
      setPartenaires(tousPartenaires);
    } catch (error) {
      console.error('Erreur lors du chargement des partenaires:', error);
    } finally {
      setLoading(false);
    }
  };

  const filterPartenaires = () => {
    let filtered = partenaires;

    // Filtre par recherche
    if (searchTerm) {
      filtered = filtered.filter(partenaire =>
        partenaire.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
        partenaire.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        partenaire.pays.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filtre par statut
    if (statusFilter !== 'all') {
      filtered = filtered.filter(partenaire => partenaire.statut === statusFilter);
    }

    // Filtre par type
    if (typeFilter !== 'all') {
      filtered = filtered.filter(partenaire => partenaire.typePartenaire === typeFilter);
    }

    setFilteredPartenaires(filtered);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setLogoFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      let logoUrl = '';

      // Upload du logo si fourni
      if (logoFile) {
        const storageRef = ref(storage, `partenaires/${Date.now()}_${logoFile.name}`);
        await uploadBytes(storageRef, logoFile);
        logoUrl = await getDownloadURL(storageRef);
      }

      if (editingPartenaire) {
        // Mise à jour
        await updateDoc(doc(db, "partenaires", editingPartenaire.id), {
          ...formData,
          logoUrl: logoUrl || editingPartenaire.logoUrl,
          dateModification: serverTimestamp()
        });
      } else {
        // Création
        await addDoc(collection(db, "partenaires"), {
          ...formData,
          logoUrl,
          dateSoumission: serverTimestamp()
        });
      }

      setFormData({
        nom: '',
        pays: '',
        email: '',
        telephone: '',
        siteWeb: '',
        description: '',
        typePartenaire: 'institutionnel',
        statut: 'approuve'
      });
      setLogoFile(null);
      setEditingPartenaire(null);
      setShowForm(false);
      fetchPartenaires();

    } catch (error) {
      console.error('Erreur lors de la sauvegarde:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEdit = (partenaire: Partenaire) => {
    console.log('handleEdit called with:', partenaire);

    if (partenaire.source === 'statique') {
      alert('Impossible de modifier un partenaire statique. Seuls les partenaires ajoutés via l\'admin peuvent être modifiés.');
      return;
    }

    console.log('Setting form data for editing:', partenaire);
    setFormData({
      nom: partenaire.nom,
      pays: partenaire.pays,
      email: partenaire.email,
      telephone: partenaire.telephone || '',
      siteWeb: partenaire.siteWeb || '',
      description: partenaire.description,
      typePartenaire: partenaire.typePartenaire,
      statut: partenaire.statut
    });
    setEditingPartenaire(partenaire);
    setShowForm(true);
    console.log('Form should be visible now');
  };

  const handleDelete = async (partenaire: Partenaire) => {
    console.log('handleDelete called with:', partenaire);

    if (partenaire.source === 'statique') {
      alert('Impossible de supprimer un partenaire statique. Seuls les partenaires ajoutés via l\'admin peuvent être supprimés.');
      return;
    }

    if (window.confirm(`Êtes-vous sûr de vouloir supprimer ${partenaire.nom} ?`)) {
      try {
        console.log('Starting deletion process...');

        // Supprimer le logo du storage si il existe
        if (partenaire.logoUrl) {
          console.log('Deleting logo from storage:', partenaire.logoUrl);
          const logoRef = ref(storage, partenaire.logoUrl);
          await deleteObject(logoRef);
        }

        // Supprimer le document
        console.log('Deleting document from Firestore:', partenaire.id);
        await deleteDoc(doc(db, "partenaires", partenaire.id));

        console.log('Document deleted successfully, refreshing list...');
        fetchPartenaires();
      } catch (error) {
        console.error('Erreur lors de la suppression:', error);
        alert('Erreur lors de la suppression: ' + error.message);
      }
    }
  };

  const handleStatusChange = async (partenaire: Partenaire, newStatus: 'en_attente' | 'approuve' | 'rejete') => {
    if (partenaire.source === 'statique') {
      alert('Impossible de modifier le statut d\'un partenaire statique.');
      return;
    }

    try {
      await updateDoc(doc(db, "partenaires", partenaire.id), {
        statut: newStatus,
        dateModification: serverTimestamp()
      });
      fetchPartenaires();
    } catch (error) {
      console.error('Erreur lors du changement de statut:', error);
    }
  };

  const inputStyle = "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500";
  const labelStyle = "block text-sm font-medium text-gray-700 mb-1";

  if (loading) {
    return <div className="p-8 text-center">Chargement...</div>;
  }

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="px-6 py-4 border-b border-neutral-200">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-xl font-bold text-neutral-900 font-sans">Gestion des Partenaires</h2>
            <p className="text-neutral-600">Gérez les partenaires du colloque CoSTIC 2026</p>
          </div>
          <button
            onClick={() => {
              setEditingPartenaire(null);
              setShowForm(true);
              setFormData({
                nom: '',
                pays: '',
                email: '',
                telephone: '',
                siteWeb: '',
                description: '',
                typePartenaire: 'institutionnel',
                statut: 'approuve'
              });
            }}
            className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors flex items-center space-x-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            <span>Ajouter un Partenaire</span>
          </button>
        </div>

        {/* Filtres et recherche */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">Recherche</label>
            <input
              type="text"
              placeholder="Nom, email, pays..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">Statut</label>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as any)}
              className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="all">Tous les statuts</option>
              <option value="en_attente">En Attente</option>
              <option value="approuve">Approuvé</option>
              <option value="rejete">Rejeté</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">Type</label>
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="all">Tous les types</option>
              <option value="institutionnel">Institutionnel</option>
              <option value="entreprise">Entreprise</option>
              <option value="organisation">Organisation</option>
              <option value="gouvernemental">Gouvernemental</option>
              <option value="media">Média</option>
              <option value="autre">Autre</option>
            </select>
          </div>
          <div className="flex items-end">
            <button
              onClick={() => {
                setSearchTerm('');
                setStatusFilter('all');
                setTypeFilter('all');
              }}
              className="w-full bg-neutral-500 text-white px-4 py-2 rounded-md hover:bg-neutral-600 transition-colors"
            >
              Réinitialiser
            </button>
          </div>
        </div>
      </div>

      {/* Formulaire */}
      {showForm && (
        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <h3 className="text-lg font-semibold mb-4">
            {editingPartenaire ? 'Modifier le Partenaire' : 'Nouveau Partenaire'}
          </h3>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className={labelStyle}>Nom *</label>
              <input
                type="text"
                name="nom"
                value={formData.nom}
                onChange={handleInputChange}
                className={inputStyle}
                required
              />
            </div>
            <div>
              <label className={labelStyle}>Pays *</label>
              <input
                type="text"
                name="pays"
                value={formData.pays}
                onChange={handleInputChange}
                className={inputStyle}
                required
              />
            </div>
            <div>
              <label className={labelStyle}>Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={inputStyle}
                required
              />
            </div>
            <div>
              <label className={labelStyle}>Téléphone</label>
              <input
                type="tel"
                name="telephone"
                value={formData.telephone}
                onChange={handleInputChange}
                className={inputStyle}
              />
            </div>
            <div>
              <label className={labelStyle}>Site Web</label>
              <input
                type="url"
                name="siteWeb"
                value={formData.siteWeb}
                onChange={handleInputChange}
                className={inputStyle}
              />
            </div>
            <div>
              <label className={labelStyle}>Type de Partenaire</label>
              <select
                name="typePartenaire"
                value={formData.typePartenaire}
                onChange={handleInputChange}
                className={inputStyle}
              >
                <option value="institutionnel">Institutionnel</option>
                <option value="entreprise">Entreprise</option>
                <option value="organisation">Organisation</option>
                <option value="gouvernemental">Gouvernemental</option>
                <option value="media">Média</option>
                <option value="autre">Autre</option>
              </select>
            </div>
            <div>
              <label className={labelStyle}>Statut</label>
              <select
                name="statut"
                value={formData.statut}
                onChange={handleInputChange}
                className={inputStyle}
              >
                <option value="en_attente">En Attente</option>
                <option value="approuve">Approuvé</option>
                <option value="rejete">Rejeté</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className={labelStyle}>Description *</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className={inputStyle}
                rows={3}
                required
              />
            </div>
            <div className="md:col-span-2">
              <label className={labelStyle}>Logo</label>
              <input
                type="file"
                onChange={handleFileChange}
                accept="image/*"
                className={inputStyle}
              />
            </div>
            <div className="md:col-span-2 flex space-x-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 disabled:opacity-50"
              >
                {isSubmitting ? 'Sauvegarde...' : 'Sauvegarder'}
              </button>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
              >
                Annuler
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Statistiques */}
      <div className="px-6 py-4 bg-neutral-50 border-b border-neutral-200">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">{partenaires.length}</div>
            <div className="text-sm text-neutral-600">Total</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">{partenaires.filter(p => p.statut === 'approuve').length}</div>
            <div className="text-sm text-neutral-600">Approuvés</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-600">{partenaires.filter(p => p.statut === 'en_attente').length}</div>
            <div className="text-sm text-neutral-600">En Attente</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-red-600">{partenaires.filter(p => p.statut === 'rejete').length}</div>
            <div className="text-sm text-neutral-600">Rejetés</div>
          </div>
        </div>
      </div>

      {/* Liste des partenaires */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-neutral-200">
          <thead className="bg-neutral-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Partenaire</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Pays</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Source</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Statut</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-neutral-200">
            {filteredPartenaires.map((partenaire) => (
              <tr key={partenaire.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    {partenaire.logoUrl && (
                      <img className="h-10 w-10 rounded-full mr-3" src={partenaire.logoUrl} alt={partenaire.nom} />
                    )}
                    <div>
                      <div className="text-sm font-medium text-gray-900">{partenaire.nom}</div>
                      <div className="text-sm text-gray-500">{partenaire.email}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{partenaire.pays}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{partenaire.typePartenaire}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${partenaire.source === 'statique'
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-green-100 text-green-800'
                    }`}>
                    {partenaire.source === 'statique' ? 'Statique' : 'Admin'}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {partenaire.source === 'statique' ? (
                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                      Approuvé
                    </span>
                  ) : (
                    <select
                      value={partenaire.statut}
                      onChange={(e) => handleStatusChange(partenaire, e.target.value as any)}
                      className={`text-sm px-2 py-1 rounded-full ${partenaire.statut === 'approuve' ? 'bg-green-100 text-green-800' :
                        partenaire.statut === 'en_attente' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}
                    >
                      <option value="en_attente">En Attente</option>
                      <option value="approuve">Approuvé</option>
                      <option value="rejete">Rejeté</option>
                    </select>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex space-x-2">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        console.log('Edit button clicked for:', partenaire);
                        handleEdit(partenaire);
                      }}
                      disabled={partenaire.source === 'statique'}
                      className={`flex items-center space-x-1 ${partenaire.source === 'statique'
                        ? 'text-gray-400 cursor-not-allowed'
                        : 'text-primary hover:text-primary/80'
                        }`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                      <span>Modifier</span>
                    </button>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        console.log('Delete button clicked for:', partenaire);
                        handleDelete(partenaire);
                      }}
                      disabled={partenaire.source === 'statique'}
                      className={`flex items-center space-x-1 ${partenaire.source === 'statique'
                        ? 'text-gray-400 cursor-not-allowed'
                        : 'text-red-600 hover:text-red-800'
                        }`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                      <span>Supprimer</span>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredPartenaires.length === 0 && (
          <div className="text-center py-12">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-neutral-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <p className="text-neutral-500">
              {partenaires.length === 0
                ? "Aucun partenaire enregistré pour le moment"
                : "Aucun partenaire ne correspond aux critères de recherche"
              }
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPartenaires;
