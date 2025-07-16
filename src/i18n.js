import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import tr from './locales/tr.json';
import en from './locales/en.json';

const resources = {
  tr: { translation: tr },
  en: { translation: en },
};

// URL'den dil algılama
const getLanguageFromURL = () => {
  const path = window.location.pathname;
  const langMatch = path.match(/^\/([a-z]{2})(\/|$)/);
  const detectedLang = langMatch ? langMatch[1] : 'tr';
  return detectedLang;
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: getLanguageFromURL(),
    fallbackLng: 'tr',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n; 