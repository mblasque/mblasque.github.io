import { FC } from "react";
import { AppSlice, setApp } from "../slices/appSlice";
import { useAppDispatch } from "../store";
import brFlag from "./../resources/br.png";
import usFlag from "./../resources/us.png";

import "./LanguageSelector.scss";

type LanguageSelectorProps = {
  app: AppSlice;
  className?: string;
};

const LanguageSelector: FC<LanguageSelectorProps> = ({ app, className }) => {
  const dispatch = useAppDispatch();

  const setLanguage = (language: string) => {
    dispatch(setApp({ language: language }));
  };

  return (
    <div className={`language-selector float-right ${className}`}>
      <img
        aria-label="br-flag"
        src={brFlag}
        className={`mr-1 ${app.language === "pt" ? "selected" : ""}`}
        onClick={() => setLanguage("pt")}
      />
      <span>{app.language}</span>
      <img
        aria-label="us-flag"
        src={usFlag}
        className={`ml-1 ${app.language === "en" ? "selected" : ""}`}
        onClick={() => setLanguage("en")}
      />
    </div>
  );
};

export default LanguageSelector;
