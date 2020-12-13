import { createI18n } from 'react-router-i18n';
import httpEn from './en/http';
import httpAm from './am/http';

// Array of supported locales
// The first in the array is treated as the default locale
const locales = ['en', 'am'];

const translations = {
    en: {
        http: httpEn,
       'about_us': 'About us',
       'help_and_support': 'Help & support',
       'tools': 'tools'
    },
    am: {
        http: httpAm,
        'about_us': 'ስለ እኛ',
        'help_and_support': 'እገዛ እና ድጋፍ',
        'tools': 'መሳሪያዎች'
    }
}

const I18n = createI18n(
    locales,
    translations,
  );
   
  export default I18n;