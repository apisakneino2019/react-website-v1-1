import React from "react";
import "./TopTitle.css";
import { useTranslation } from "react-i18next";
export default function TopSer() {
  const { t } = useTranslation();
  return (
    <div className="TopTitle">
      <h1 className="text-title"> {t("nav.2")}</h1>
    </div>
  );
}
