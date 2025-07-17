// URL mapping sistemi - her sayfanın farklı dillerdeki URL'lerini tanımlar
export const urlMapping = {
  // Ana sayfa
  '/': {
    tr: '/',
    en: '/en',
    fr: '/fr',
    de: '/de',
    ru: '/ru',
    es: '/es',
    ar: '/ar'
  },
  
  // Hakkımızda
  '/hakkimizda': {
    tr: '/hakkimizda',
    en: '/en/about-us',
    fr: '/fr/a-propos',
    de: '/de/uber-uns',
    ru: '/ru/o-nas',
    es: '/es/sobre-nosotros',
    ar: '/ar/من-نحن'
  },
  '/about-us': {
    tr: '/hakkimizda',
    en: '/en/about-us',
    fr: '/fr/a-propos',
    de: '/de/uber-uns',
    ru: '/ru/o-nas',
    es: '/es/sobre-nosotros',
    ar: '/ar/من-نحن'
  },
  '/a-propos': {
    tr: '/hakkimizda',
    en: '/en/about-us',
    fr: '/fr/a-propos',
    de: '/de/uber-uns',
    ru: '/ru/o-nas',
    es: '/es/sobre-nosotros',
    ar: '/ar/من-نحن'
  },
  '/uber-uns': {
    tr: '/hakkimizda',
    en: '/en/about-us',
    fr: '/fr/a-propos',
    de: '/de/uber-uns',
    ru: '/ru/o-nas',
    es: '/es/sobre-nosotros',
    ar: '/ar/من-نحن'
  },
  '/o-nas': {
    tr: '/hakkimizda',
    en: '/en/about-us',
    fr: '/fr/a-propos',
    de: '/de/uber-uns',
    ru: '/ru/o-nas',
    es: '/es/sobre-nosotros',
    ar: '/ar/من-نحن'
  },
  
  // İdari Kadro
  '/idari-kadro': {
    tr: '/idari-kadro',
    en: '/en/administrative-staff',
    fr: '/fr/equipe-administrative',
    de: '/de/verwaltungsteam',
    ru: '/ru/administrativnyj-personal',
    es: '/es/personal-administrativo',
    ar: '/ar/al-muwazafun-al-idariyun'
  },
  '/administrative-staff': {
    tr: '/idari-kadro',
    en: '/en/administrative-staff',
    fr: '/fr/equipe-administrative',
    de: '/de/verwaltungsteam',
    ru: '/ru/administrativnyj-personal',
    es: '/es/personal-administrativo',
    ar: '/ar/al-muwazafun-al-idariyun'
  },
  
  // Şubelerimiz
  '/subelerimiz': {
    tr: '/subelerimiz',
    en: '/en/branches',
    fr: '/fr/succursales',
    de: '/de/filialen',
    ru: '/ru/filialy',
    es: '/es/sucursales',
    ar: '/ar/al-furu'
  },
  '/branches': {
    tr: '/subelerimiz',
    en: '/en/branches',
    fr: '/fr/succursales',
    de: '/de/filialen',
    ru: '/ru/filialy',
    es: '/es/sucursales',
    ar: '/ar/al-furu'
  },
  
  // Blog
  '/blog': {
    tr: '/blog',
    en: '/en/blog',
    fr: '/fr/blog',
    de: '/de/blog',
    ru: '/ru/blog',
    es: '/es/blog',
    ar: '/ar/al-mudawwana'
  },
  
  // Akademi
  '/akademi': {
    tr: '/akademi',
    en: '/en/academy',
    fr: '/fr/academie',
    de: '/de/akademie',
    ru: '/ru/akademiya',
    es: '/es/academia',
    ar: '/ar/al-akadimiyya'
  },
  '/academy': {
    tr: '/akademi',
    en: '/en/academy',
    fr: '/fr/academie',
    de: '/de/akademie',
    ru: '/ru/akademiya',
    es: '/es/academia',
    ar: '/ar/al-akadimiyya'
  },
  
  // Ödüllerimiz
  '/odullerimiz': {
    tr: '/odullerimiz',
    en: '/en/awards',
    fr: '/fr/recompenses',
    de: '/de/auszeichnungen',
    ru: '/ru/nagrady',
    es: '/es/premios',
    ar: '/ar/al-jawaiz'
  },
  '/awards': {
    tr: '/odullerimiz',
    en: '/en/awards',
    fr: '/fr/recompenses',
    de: '/de/auszeichnungen',
    ru: '/ru/nagrady',
    es: '/es/premios',
    ar: '/ar/al-jawaiz'
  },
  
  // Kurumsal Kimlik
  '/kurumsal-kimlik': {
    tr: '/kurumsal-kimlik',
    en: '/en/corporate-identity',
    fr: '/fr/identite-corporative',
    de: '/de/corporate-identity',
    ru: '/ru/korporativnaya-identichnost',
    es: '/es/identidad-corporativa',
    ar: '/ar/al-hawiyya-al-sharikiyya'
  },
  '/corporate-identity': {
    tr: '/kurumsal-kimlik',
    en: '/en/corporate-identity',
    fr: '/fr/identite-corporative',
    de: '/de/corporate-identity',
    ru: '/ru/korporativnaya-identichnost',
    es: '/es/identidad-corporativa',
    ar: '/ar/al-hawiyya-al-sharikiyya'
  },
  
  // Hasta Memnuniyet Videoları
  '/hasta-memnuniyet-videolari': {
    tr: '/hasta-memnuniyet-videolari',
    en: '/en/patient-satisfaction-videos',
    fr: '/fr/videos-satisfaction-patients',
    de: '/de/patientenzufriedenheit-videos',
    ru: '/ru/video-udovletvorennosti-patsientov',
    es: '/es/videos-satisfaccion-pacientes',
    ar: '/ar/fidiyu-ridha-al-mardha'
  },
  '/patient-satisfaction-videos': {
    tr: '/hasta-memnuniyet-videolari',
    en: '/en/patient-satisfaction-videos',
    fr: '/fr/videos-satisfaction-patients',
    de: '/de/patientenzufriedenheit-videos',
    ru: '/ru/video-udovletvorennosti-patsientov',
    es: '/es/videos-satisfaccion-pacientes',
    ar: '/ar/fidiyu-ridha-al-mardha'
  },
  
  // Hasta Yorumları
  '/hasta-yorumlari': {
    tr: '/hasta-yorumlari',
    en: '/en/patient-reviews',
    fr: '/fr/avis-patients',
    de: '/de/patientenbewertungen',
    ru: '/ru/otzyvy-patsientov',
    es: '/es/resenas-pacientes',
    ar: '/ar/ara-al-mardha'
  },
  '/patient-reviews': {
    tr: '/hasta-yorumlari',
    en: '/en/patient-reviews',
    fr: '/fr/avis-patients',
    de: '/de/patientenbewertungen',
    ru: '/ru/otzyvy-patsientov',
    es: '/es/resenas-pacientes',
    ar: '/ar/ara-al-mardha'
  },
  
  // Hospitadent Sosyal Sorumluluk
  '/hospitadent-sosyal-sorumluluk': {
    tr: '/hospitadent-sosyal-sorumluluk',
    en: '/en/hospitadent-social-responsibility',
    fr: '/fr/responsabilite-sociale-hospitadent',
    de: '/de/hospitadent-soziale-verantwortung',
    ru: '/ru/sotsialnaya-otvetstvennost-hospitadent',
    es: '/es/responsabilidad-social-hospitadent',
    ar: '/ar/al-masuliyya-al-ijtimaiyya-hospitadent'
  },
  '/hospitadent-social-responsibility': {
    tr: '/hospitadent-sosyal-sorumluluk',
    en: '/en/hospitadent-social-responsibility',
    fr: '/fr/responsabilite-sociale-hospitadent',
    de: '/de/hospitadent-soziale-verantwortung',
    ru: '/ru/sotsialnaya-otvetstvennost-hospitadent',
    es: '/es/responsabilidad-social-hospitadent',
    ar: '/ar/al-masuliyya-al-ijtimaiyya-hospitadent'
  },
  
  // Anlaşmalı Kurumlar
  '/anlasmali-kurumlar': {
    tr: '/anlasmali-kurumlar',
    en: '/en/partner-institutions',
    fr: '/fr/institutions-partenaires',
    de: '/de/partnerinstitutionen',
    ru: '/ru/partnerstkie-uchrezhdeniya',
    es: '/es/instituciones-socias',
    ar: '/ar/al-muassasat-al-sharika'
  },
  '/partner-institutions': {
    tr: '/anlasmali-kurumlar',
    en: '/en/partner-institutions',
    fr: '/fr/institutions-partenaires',
    de: '/de/partnerinstitutionen',
    ru: '/ru/partnerstkie-uchrezhdeniya',
    es: '/es/instituciones-socias',
    ar: '/ar/al-muassasat-al-sharika'
  },
  
  // Arama Sonuçları
  '/search': {
    tr: '/search',
    en: '/en/search',
    fr: '/fr/recherche',
    de: '/de/suche',
    ru: '/ru/poisk',
    es: '/es/busqueda',
    ar: '/ar/al-bahth'
  }
};

// Mevcut URL'den dil kodunu çıkar
export const getCurrentPathWithoutLanguage = (pathname) => {
  const languageCodes = ['en', 'fr', 'de', 'ru', 'es', 'ar'];
  
  for (const lang of languageCodes) {
    if (pathname.startsWith(`/${lang}/`)) {
      // /en/administrative-staff -> /administrative-staff
      const result = pathname.substring(lang.length + 2);
      return result.startsWith('/') ? result : '/' + result;
    } else if (pathname === `/${lang}`) {
      return '/';
    }
  }
  
  return pathname.startsWith('/') ? pathname : '/' + pathname;
};

// Mevcut URL'den dil kodunu al
export const getCurrentLanguageFromPath = (pathname) => {
  const languageCodes = ['en', 'fr', 'de', 'ru', 'es', 'ar'];
  
  for (const lang of languageCodes) {
    if (pathname.startsWith(`/${lang}/`) || pathname === `/${lang}`) {
      return lang;
    }
  }
  
  return 'tr'; // Varsayılan Türkçe
};

// Yeni dil için URL oluştur
export const getUrlForLanguage = (currentPathname, targetLanguage) => {
  // Path'i normalize et (başında / olsun)
  const normalizedPath = currentPathname.startsWith('/') ? currentPathname : `/${currentPathname}`;
  
  // Önce mevcut dil kodunu çıkar
  const pathWithoutLang = getCurrentPathWithoutLanguage(normalizedPath);
  

  
  // URL mapping'de bu path var mı kontrol et
  if (urlMapping[pathWithoutLang]) {
    return urlMapping[pathWithoutLang][targetLanguage];
  }
  
  // Eğer mapping'de yoksa, basit prefix ekleme yap
  if (targetLanguage === 'tr') {
    return pathWithoutLang;
  } else {
    return `/${targetLanguage}${pathWithoutLang}`;
  }
}; 