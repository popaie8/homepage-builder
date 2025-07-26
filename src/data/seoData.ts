import type { SEOConfig } from '../types';

export const seoConfig: SEOConfig = {
  title: "ホームページ制作 | 初期一括69,800円・最短10日完成",
  description: "忙しい事業主様向けのホームページ制作サービス。初期一括69,800円、修正2回無料、最短10日で高品質なサイトを制作します。レスポンシブ対応・SEO対策込み。",
  keywords: "ホームページ制作,Webサイト制作,格安,短納期,69800円,レスポンシブ,SEO対策,丸投げ",
  ogImage: "/images/og-image.jpg",
  url: "https://your-domain.com"
};

export const structuredData = {
  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "株式会社ウェブクリエイト",
    "url": "https://your-domain.com",
    "logo": "https://your-domain.com/images/logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "神宮前1-1-1 クリエイトビル5F",
      "addressLocality": "渋谷区",
      "addressRegion": "東京都",
      "postalCode": "150-0001",
      "addressCountry": "JP"
    }
  },
  service: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "ホームページ制作サービス",
    "provider": {
      "@type": "Organization",
      "name": "株式会社ウェブクリエイト"
    },
    "serviceType": "ホームページ制作",
    "areaServed": "日本",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "制作プラン",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "スタティックプラン"
          },
          "price": "69800",
          "priceCurrency": "JPY"
        }
      ]
    }
  }
};