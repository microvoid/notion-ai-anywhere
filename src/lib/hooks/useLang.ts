import i18next from "i18next"
import { useEffect } from "react"
import { useTranslation } from "react-i18next"
import { initReactI18next } from "react-i18next"

import { useStorage } from "@plasmohq/storage/hook"

import { ConstEnum } from "~lib/enums"
import en from "~lib/locales/en/messages.json"
import zh from "~lib/locales/zh/messages.json"
import { storage } from "~lib/storage"

export const useLang = () => {
  const [lang, setLang, { remove: removeLang }] = useStorage({
    key: ConstEnum.LANG,
    instance: storage
  })

  const { t, i18n } = useTranslation()

  useEffect(() => {
    if (lang && lang !== i18n.language) {
      i18n.changeLanguage(lang)
    }
  }, [lang, i18n.language])

  return {
    t,
    i18n,
    lang,
    setLang,
    removeLang
  }
}

export const initLang = async () => {
  // const lang = await storage.get(ConstEnum.LANG)
  i18next
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
      // the translations
      // (tip move them in a JSON file and import them,
      // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
      resources: {
        en: {
          translation: en
        },
        zh: {
          translation: zh
        }
      },
      lng: "en", // if you're using a language detector, do not define the lng option
      fallbackLng: "en",

      interpolation: {
        escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
      }
    })
}
