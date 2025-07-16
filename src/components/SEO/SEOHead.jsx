import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOHead = ({ 
  title, 
  description, 
  keywords, 
  image, 
  url, 
  type = 'website',
  lang = 'tr',
  structuredData = null 
}) => {
  const defaultTitle = "Hospitadent - Türkiye'nin En Büyük Diş Sağlığı Kuruluşu";
  const defaultDescription = "Hospitadent, 20+ yıllık deneyimle Türkiye'nin en büyük diş sağlığı kuruluşu. 18 şubede implant, ortodonti, diş beyazlatma ve daha fazlası.";
  const defaultKeywords = "diş hekimi, implant, ortodonti, diş beyazlatma, zirkonyum kaplama, porselen diş, diş teli, gülüş tasarımı, hospitadent";
  const defaultImage = "https://hospitadent.com/og-image.jpg";
  const defaultUrl = "https://hospitadent.com";

  const finalTitle = title ? `${title} | Hospitadent` : defaultTitle;
  const finalDescription = description || defaultDescription;
  const finalKeywords = keywords || defaultKeywords;
  const finalImage = image || defaultImage;
  const finalUrl = url || defaultUrl;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{finalTitle}</title>
      <meta name="title" content={finalTitle} />
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />
      <meta name="language" content={lang} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={finalUrl} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={finalImage} />
      <meta property="og:site_name" content="Hospitadent" />
      <meta property="og:locale" content="tr_TR" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={finalUrl} />
      <meta property="twitter:title" content={finalTitle} />
      <meta property="twitter:description" content={finalDescription} />
      <meta property="twitter:image" content={finalImage} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={finalUrl} />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead; 