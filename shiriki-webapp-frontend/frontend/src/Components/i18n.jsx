import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

//translations
const resources = {
  en: {
    translation: {
      welcome: "Welcome",
    },
  },
  rw: {
    translation: {
      welcome: "Murakaza neza",
    },
  },
  fr: {
    translation: {
      welcome: "Bienvenue",
    },
  },
  
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
