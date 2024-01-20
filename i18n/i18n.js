import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import en from './translations/en.json'
import ukr from './translations/ukr.json'
import {getLocales} from "expo-localization";

const getLangCode = () => {
  const code = getLocales().shift()
  if (!code) return "ukr";
  return code.languageCode;
};

i18n.use(initReactI18next)
    .init({
        compatibilityJSON: "v3",
        lng: getLangCode(),
        ns:['loader', 'signUpScreen', 'signInScreen', 'registrationPopUp', 'homeScreen', 'taskScreen', 'ticketScreen', 'profileScreen','settingsScreen','eventScreen','savedScreen','supportedLanguages'],
        defaultNS: "translation",
        interpolation: {
            // We disable this because it's not required, given that react already scapes the text
            escapeValue: false
        },
        // Here you can add all your supported languages
        resources: {
            ukr: ukr,
            en: en
        }
    })

export default i18n