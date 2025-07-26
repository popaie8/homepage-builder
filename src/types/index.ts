export interface ServicePlan {
  name: string;
  price: number;
  features: string[];
  deliveryDays: string;
  revisions: number;
}

export interface AdditionalOption {
  name: string;
  price: string;
  description?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  industry: string;
  thumbnail: string;
  results: string;
  url?: string;
  description?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'price' | 'delivery' | 'revision' | 'service' | 'other';
}

export interface ContactForm {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
  budget?: string;
  timeline?: string;
}

export interface CompanyInfo {
  name: string;
  address: string;
  invoiceNumber: string;
  representative: string;
  representativeMessage: string;
}

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string;
  ogImage: string;
  url: string;
}