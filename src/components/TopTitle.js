import React from "react";
import "./TopTitle.css";
import { useTranslation } from "react-i18next";
// import i18next from "i18next";

export default function TopTitle() {
  const { t } = useTranslation();

  return (
    <>
      <div className="TopTitle">
        <div className="TopTitleText">
          <h1 className="text-title">
            {" "}
            {t("hero.1")} <br />{" "}
          </h1>
          <h1 className="text-title"> {t("hero.111")}</h1>
        </div>
      </div>
      <div className="area">
        <div className="breadcrumbs">
          <span className="showHere">{t("hero.11")}: </span>
          <a href="/" className="pathway">
            {t("hero.12")}
          </a>
        </div>
      </div>
    </>
  );
}
