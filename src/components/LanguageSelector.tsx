import { useState, FC } from "react";
import brFlag from "./../resources/br.png";
import usFlag from "./../resources/us.png";

import "./LanguageSelector.scss";

type LanguageSelectorProps = {
  className?: string;
};

const LanguageSelector: FC<LanguageSelectorProps> = ({ className }) => {
  const [language, setLanguage] = useState("pt");

  return (
    <div className={`language-selector float-right ${className}`}>
      <img
        aria-label="br-flag"
        src={brFlag}
        className={`mr-1 ${language == "pt" ? "selected" : ""}`}
        onClick={() => setLanguage("pt")}
      />
      <span>{language}</span>
      <img
        aria-label="us-flag"
        src={usFlag}
        className={`ml-1 ${language == "en" ? "selected" : ""}`}
        onClick={() => setLanguage("en")}
      />
    </div>
  );
};

export default LanguageSelector;
