import React from 'react';
import { Helmet } from 'react-helmet-async';
import { seoConfig, structuredData } from '../../data/seoData';

interface SEOHelmetProps {
  title?: string;
  description?: string;
  path?: string;
}

export const SEOHelmet: React.FC<SEOHelmetProps> = ({
  title,
  description,
  path = ''
}) => {
  const fullTitle = title ? `${title} | ${seoConfig.title}` : seoConfig.title;
  const fullDescription = description || seoConfig.description;
  const fullUrl = `${seoConfig.url}${path}`;
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={seoConfig.keywords} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={seoConfig.ogImage} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={seoConfig.ogImage} />
      
      {/* 構造化データ */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData.organization)}
      </script>
      
      <script type="application/ld+json">
        {JSON.stringify(structuredData.service)}
      </script>
      
      {/* FAQページの構造化データ */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "制作期間はどのくらいですか？",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "通常7-10営業日で完成いたします。"
              }
            },
            {
              "@type": "Question",
              "name": "69,800円以外に追加料金はかかりますか？",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "基本プラン（7ページまで）の範囲内であれば追加料金は一切かかりません。"
              }
            }
          ]
        })}
      </script>
    </Helmet>
  );
};