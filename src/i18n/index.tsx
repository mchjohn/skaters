import i18n from 'i18next'
import { getLocales } from 'expo-localization'
import { initReactI18next } from 'react-i18next'

import pt from './pt.json'
import en from './en.json'

const deviceLanguage = getLocales()[0].languageCode

export default i18n
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    resources: {
      pt: {
        translation: {
          ...pt
        }
      },
      en: {
        translation: {
          ...en
        }
      }
    },
    lng: deviceLanguage,
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false
    }
  })
