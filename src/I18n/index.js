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
       'tools': 'Tools',
       'find_a_postcode': 'Find a postcode',
       'track_an_item': 'Track an Item',
       'calculate_postage': 'Calculate postage',
       'find_locations_and_hours': 'Find locations & hours',
       'slogan': 'The Shipathon is in full force',
       'slogan_description': 'The holidays are here, with online shopping and shipping at an all-time high. Know that your gifts and essentials are important to us, and we’re doing all we can to deliver as quickly as possible. Use the links and tools below to get more control over your deliveries and help keep your holiday plans on course.',
       'track': 'Track',
       'price_list': 'Price List',
       'birr': 'Birr',
       'request_pickup': 'Request Pickup',

       'per_km': "/km",
       'weight': 'Weight',
       'weight_unit': 'Kg',
       'length': 'Length',
       'length_unit': 'cm',
       'width': 'Width',
       'width_unit': 'cm',
       'height': 'Height',
       'height_unit': 'cm',
       'home': 'Home',
       'about_us_details': 'Over our long history, our social purpose and commitment to the community has remained the same; to create connections and opportunities that matter to every Ethiopian.'
    },
    am: {
        http: httpAm,
        'about_us': 'ስለ እኛ',
        'help_and_support': 'እገዛ እና ድጋፍ',
        'tools': 'መሳሪያዎች',
        'find_a_postcode': 'የፖስታ ኮድ ያግኙ',
        'track_an_item': 'ጥቅል ይፈልጉ',
        'calculate_postage': 'ፖስታ ያስሉ',
        'find_locations_and_hours': 'አካባቢዎችን እና ሰዓቶችን ያግኙ',
        'slogan': 'ሲፋቶን ሙሉ ኃይል አለው',
        'slogan_description': 'የበዓላት በዓላት እዚህ አሉ ፣ በመስመር ላይ ግብይት እና በጭነት ከፍተኛ በሆነ ጭነት። ስጦታዎችዎ እና አስፈላጊ ነገሮች ለእኛ አስፈላጊ እንደሆኑ ይወቁ ፣ እና በተቻለ ፍጥነት ለማድረስ የተቻለንን ሁሉ እያደረግን ነው። በወረፋዎችዎ ላይ የበለጠ ቁጥጥር ለማግኘት እና የበዓል ዕቅዶችዎን በትክክል እንዲቀጥሉ ለማገዝ ከዚህ በታች ያሉትን አገናኞች እና መሳሪያዎች ይጠቀሙ።',
        'track': 'ፈልግ',
        'price_list': 'የዋጋ ዝርዝር',
        'birr': 'ብር',
        'request_pickup': 'ማዝዣ',
        'per_km': "/ኪ.ሜ.",
        'weight': 'ክብደት',
        'weight_unit': 'ኪግ',
        'length': 'ርዝመት',
        'length_unit': 'ሴ.ሜ.',
        'width': 'ስፋት',
        'width_unit': 'ሴ.ሜ.',
        'height': 'ቁመት',
        'height_unit': 'ሴ.ሜ.',
        'home': 'መግቢያ',
        'about_us_details': 'በረጅም ታሪካችን ውስጥ ማህበራዊ ዓላማችን እና ለህብረተሰቡ ያለን ቁርጠኝነት ተመሳሳይ ሆኖ ቆይቷል ፡፡ ለእያንዳንዱ ኢትዮጵያዊ አስፈላጊ የሆኑ ግንኙነቶችን እና ዕድሎችን ለመፍጠር ፡፡'
    }
}

const I18n = createI18n(
    locales,
    translations,
  );
   
  export default I18n;