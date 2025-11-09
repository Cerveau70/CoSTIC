// Service GeniusPay pour l'intégration des paiements Wave
// L'URL de l'API peut être configurée via la variable d'environnement VITE_GENIUSPAY_API_URL
const GENIUSPAY_API_URL = import.meta.env.VITE_GENIUSPAY_API_URL || 'https://pay.genius.ci';
const API_KEY = import.meta.env.VITE_GENIUSPAY_API_KEY || 'gp_Nyoe0Q7oBEnkU2j2JnqFXa0j9f3dKpgh';
const API_SECRET = import.meta.env.VITE_GENIUSPAY_SECRET_KEY || 'Gtav3pQa1hYGDGV9Gef3WX0jlvEanvQa';

export interface PaymentInitRequest {
  amount: number; // Montant en centimes (ex: 1000 = 10 FCFA)
  customer_email: string;
  customer_name?: string;
  gateway?: string; // 'wave' pour forcer Wave
  currency?: string; // 'XOF' par défaut
  metadata?: Record<string, any>;
  webhook_url?: string; // URL du webhook pour les notifications
}

export interface PaymentInitResponse {
  success: boolean;
  data?: {
    payment_url?: string;
    payment_id?: string;
    reference?: string;
  };
  message?: string;
  error?: string;
}

export interface PaymentVerificationResponse {
  success: boolean;
  status?: string;
  amount?: number;
  reference?: string;
  message?: string;
  error?: string;
}

/**
 * Initie un paiement via l'API GeniusPay
 */
export const initiatePayment = async (paymentData: PaymentInitRequest): Promise<PaymentInitResponse> => {
  try {
    // Utiliser le proxy Vite en développement pour éviter les problèmes CORS
    const isDevelopment = import.meta.env.DEV;
    const apiUrl = isDevelopment 
      ? '/api/geniuspay' 
      : GENIUSPAY_API_URL;
    
    // Convertir le montant en centimes (multiplier par 100)
    // Exemple: 1 FCFA = 100 centimes, 50 FCFA = 5000 centimes
    const amountInCents = Math.round(paymentData.amount * 100);
    
    console.log(`💰 Conversion du montant: ${paymentData.amount} FCFA = ${amountInCents} centimes`);
    
    // Préparer les données selon la documentation GeniusPay
    const requestData = {
      amount: amountInCents,
      customer_email: paymentData.customer_email,
      customer_name: paymentData.customer_name || null,
      gateway: 'wave', // Forcer Wave
      currency: paymentData.currency || 'XOF',
      metadata: paymentData.metadata || {},
      webhook_url: paymentData.webhook_url || `${window.location.origin}/api/webhook/geniuspay`
    };
    
    const endpoint = `${apiUrl}/api/payment-links`;
    console.log('🔗 Tentative de connexion à:', endpoint);
    console.log('📦 Données du paiement:', requestData);
    
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'X-API-Key': API_KEY,
      },
      body: JSON.stringify(requestData),
    });

    // Vérifier si la réponse est valide avant de parser le JSON
    if (!response.ok) {
      let errorMessage = `Erreur HTTP ${response.status}: ${response.statusText}`;
      try {
        const errorData = await response.json();
        errorMessage = errorData.message || errorData.error || errorMessage;
      } catch {
        // Si la réponse n'est pas du JSON, utiliser le message d'erreur HTTP
      }
      throw new Error(errorMessage);
    }

    const data = await response.json();
    
    if (!data.success) {
      throw new Error(data.message || data.error || 'Erreur lors de la création du lien de paiement');
    }

    // Retourner la réponse avec payment_url dans data
    return {
      success: true,
      data: {
        payment_url: data.data?.payment_url,
        payment_id: data.data?.payment_id || data.data?.reference,
        reference: data.data?.reference
      },
      message: data.message
    };
  } catch (error: any) {
    console.error('Erreur GeniusPay:', error);
    
    // Gestion spécifique des erreurs réseau
    if (error.name === 'TypeError' && error.message.includes('fetch')) {
      return {
        success: false,
        error: `Impossible de se connecter à l'API GeniusPay. Vérifiez que l'URL est correcte: ${GENIUSPAY_API_URL}`,
        message: `Erreur de connexion réseau. Vérifiez votre connexion Internet et que l'URL de l'API est correcte.`
      };
    }
    
    return {
      success: false,
      error: error.message || 'Erreur lors de l\'initiation du paiement',
      message: error.message || 'Erreur lors de l\'initiation du paiement'
    };
  }
};

/**
 * Vérifie le statut d'un paiement via l'API GeniusPay
 */
export const verifyPayment = async (paymentId: string): Promise<PaymentVerificationResponse> => {
  try {
    // Utiliser le proxy Vite en développement pour éviter les problèmes CORS
    const isDevelopment = import.meta.env.DEV;
    const apiUrl = isDevelopment 
      ? '/api/geniuspay' 
      : GENIUSPAY_API_URL;
    
    const endpoint = `${apiUrl}/payment/verify/${paymentId}`;
    console.log('Vérification du paiement:', paymentId);
    console.log('URL:', endpoint);
    
    const response = await fetch(endpoint, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': API_KEY,
        'Authorization': `Bearer ${API_SECRET}`,
      },
    });

    if (!response.ok) {
      let errorMessage = `Erreur HTTP ${response.status}: ${response.statusText}`;
      try {
        const errorData = await response.json();
        errorMessage = errorData.message || errorData.error || errorMessage;
      } catch {
        // Si la réponse n'est pas du JSON, utiliser le message d'erreur HTTP
      }
      throw new Error(errorMessage);
    }

    const data = await response.json();
    
    if (!data.success) {
      throw new Error(data.message || data.error || 'Erreur lors de la vérification du paiement');
    }

    return data;
  } catch (error: any) {
    console.error('Erreur vérification paiement:', error);
    
    // Gestion spécifique des erreurs réseau
    if (error.name === 'TypeError' && error.message.includes('fetch')) {
      return {
        success: false,
        error: `Impossible de se connecter à l'API GeniusPay. Vérifiez que l'URL est correcte: ${GENIUSPAY_API_URL}`,
        message: `Erreur de connexion réseau. Vérifiez votre connexion Internet et que l'URL de l'API est correcte.`
      };
    }
    
    return {
      success: false,
      error: error.message || 'Erreur lors de la vérification du paiement',
      message: error.message || 'Erreur lors de la vérification du paiement'
    };
  }
};

