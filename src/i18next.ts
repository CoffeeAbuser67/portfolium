import i18n from "i18next";
import { initReactI18next } from "react-i18next";


import enTranslations from './assets/translations/en/common.json';
import ptTranslations from './assets/translations/pt-BR/common.json';


i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslations },
    "pt-BR": { translation: ptTranslations },
  },
  lng: "en",
  fallbackLng: "en",
});


