import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./App.css";

function App() {
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation();

  const [currentLang, setCurrentLang] = useState(language);
  const handleLang = () => {
    const newLang = currentLang === "en" ? "pt" : "en";
    changeLanguage(newLang);
    setCurrentLang(newLang);
  };

  return (
    <>
      <h1>{t("header")}</h1>

      <button type="button" onClick={handleLang}>
        Change Language manually
      </button>

      <footer>
        <h1>{t("footer", { year: new Date().getFullYear() })}</h1>
      </footer>
    </>
  );
}

export default App;
