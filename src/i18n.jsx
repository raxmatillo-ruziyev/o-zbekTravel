import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ru from '../public/locales/ru.json';
import uz from '../public/locales/uz.json';
import en from '../public/locales/en.json'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ru: { translation: ru },
      uz: { translation: uz },
    },
    lng: 'uz', // boshlang'ich til
    fallbackLng: 'uz',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
