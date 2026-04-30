import { authManager } from './authManager';

// All card API calls are proxied through /api/proxy to avoid CORS preflight failures
// on the external platform.bankkaro.com domain.
const BASE_URL = '/api/proxy';

export interface SpendingData {
  amazon_spends?: number;
  flipkart_spends?: number;
  other_online_spends?: number;
  other_offline_spends?: number;
  grocery_spends_online?: number;
  online_food_ordering?: number;
  fuel?: number;
  dining_or_going_out?: number;
  flights_annual?: number;
  hotels_annual?: number;
  domestic_lounge_usage_quarterly?: number;
  international_lounge_usage_quarterly?: number;
  mobile_phone_bills?: number;
  electricity_bills?: number;
  water_bills?: number;

  insurance_car_or_bike_annual?: number;
  insurance_health_annual?: number;
  rent?: number;
  school_fees?: number;
  life_insurance?: number;
  offline_grocery?: number;
}

export const cardService = {
  async getInitBundle() {
    const response = await authManager.makeAuthenticatedRequest(
      `${BASE_URL}/cardgenius/init-bundle`,
      { method: 'POST', body: JSON.stringify({}) }
    );
    return response.json();
  },

  async getCardDetails(alias: string) {
    const response = await authManager.makeAuthenticatedRequest(
      `${BASE_URL}/cardgenius/cards/${alias}`,
      { method: 'POST', body: JSON.stringify({}) }
    );
    return response.json();
  },

  async calculateCardGenius(spendingData: SpendingData) {
    const response = await authManager.makeAuthenticatedRequest(
      `${BASE_URL}/cardgenius/calculate`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(spendingData),
      }
    );
    return response.json();
  },

  async getCardListing(params: {
    slug: string;
    banks_ids: number[];
    card_networks: string[];
    annualFees: string;
    credit_score: string;
    sort_by: string;
    free_cards: string;
    eligiblityPayload: {
      pincode?: string;
      inhandIncome?: string;
      empStatus?: string;
    };
    cardGeniusPayload: any[];
  }, signal?: AbortSignal) {
    const qs = new URLSearchParams();
    if (params.slug) qs.set('slug', params.slug);
    if (params.sort_by) qs.set('sort_by', params.sort_by);
    const url = `${BASE_URL}/cardgenius/cards${qs.toString() ? `?${qs}` : ''}`;
    const response = await authManager.makeAuthenticatedRequest(url, {
      method: 'POST',
      body: JSON.stringify(params),
      signal
    });
    return response.json();
  },

  async getCardDetailsByAlias(alias: string) {
    const response = await authManager.makeAuthenticatedRequest(
      `${BASE_URL}/cardgenius/cards/${alias}`,
      { method: 'POST', body: JSON.stringify({}) }
    );
    return response.json();
  },

  async getPartnerCards(signal?: AbortSignal) {
    const response = await authManager.makeAuthenticatedRequest(
      `${BASE_URL}/cardgenius/cards`,
      { method: 'POST', body: JSON.stringify({}), signal }
    );
    return response.json();
  },

  async checkEligibility(params: {
    cardAlias: string;
    pincode: string;
    inhandIncome: string;
    empStatus: 'salaried' | 'self_employed';
  }) {
    const response = await authManager.makeAuthenticatedRequest(
      `${BASE_URL}/cardgenius/cards`,
      { method: 'POST', body: JSON.stringify(params) }
    );
    return response.json();
  }
};
