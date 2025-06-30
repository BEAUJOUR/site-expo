import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  fr: { translation: { accueil: "Accueil", /* ... */ } },
  en: { translation: { accueil: "Home", /* ... */ } },
  es: { translation: { accueil: "Inicio", /* ... */ } },
  pt: { translation: { accueil: "Início", /* ... */ } },
};

i18n
  .use(initReactI18next) // passe l'instance à react-i18next
  .init({
    resources,
    lng: "fr", // langue par défaut
    fallbackLng: "fr",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

