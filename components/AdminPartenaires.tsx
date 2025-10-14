import React, { useState, useEffect } from 'react';
import { collection, getDocs, doc, updateDoc, deleteDoc, addDoc, serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { db, storage } from '../firebase';

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
}

const AdminPartenaires: React.FC = () => {
  const [partenaires, setPartenaires] = useState<Partenaire[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingPartenaire, setEditingPartenaire] = useState<Partenaire | null>(null);
  const [showForm, setShowForm] = useState(false);
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

  const fetchPartenaires = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "partenaires"));
      const partenairesData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Partenaire[];
      setPartenaires(partenairesData);
    } catch (error) {
      console.error('Erreur lors du chargement des partenaires:', error);
    } finally {
      setLoading(false);
    }
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
  };

  const handleDelete = async (partenaire: Partenaire) => {
    if (window.confirm(`Êtes-vous sûr de vouloir supprimer ${partenaire.nom} ?`)) {
      try {
        // Supprimer le logo du storage si il existe
        if (partenaire.logoUrl) {
          const logoRef = ref(storage, partenaire.logoUrl);
          await deleteObject(logoRef);
        }

        // Supprimer le document
        await deleteDoc(doc(db, "partenaires", partenaire.id));
        fetchPartenaires();
      } catch (error) {
        console.error('Erreur lors de la suppression:', error);
      }
    }
  };

  const handleStatusChange = async (partenaire: Partenaire, newStatus: 'en_attente' | 'approuve' | 'rejete') => {
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
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Gestion des Partenaires</h2>
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
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Ajouter un Partenaire
        </button>
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

      {/* Liste des partenaires */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Partenaire</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pays</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {partenaires.map((partenaire) => (
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
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                  <button
                    onClick={() => handleEdit(partenaire)}
                    className="text-blue-600 hover:text-blue-900"
                  >
                    Modifier
                  </button>
                  <button
                    onClick={() => handleDelete(partenaire)}
                    className="text-red-600 hover:text-red-900"
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPartenaires;
