import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from 'assets/langs/EN.json';
import ar from 'assets/langs/AR.json';
//empty for now

const resources = {
  en,
  ar,
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: 'en',
  compatibilityJSON: 'v3',
  interpolation: {
    escapeValue: false, // not needed for react!!
  },
});

export default i18n;
