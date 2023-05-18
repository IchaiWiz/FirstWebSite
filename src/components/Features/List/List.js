import React, { useState } from "react";
import "./List.css";
import { useTranslation } from "react-i18next";

const List = () => {
  const { t } = useTranslation();
  const [list] = useState([
    {
      id: 1,
      coursImportant: t("nav.Cours.react"),
    },
    {
      id: 2,
      coursImportant: t("nav.Cours.htmlCss"),
    },
    {
      id: 3,
      coursImportant: t("nav.Cours.vanillaJs"),
    },
  ]);

  return (
    <div className="list-page">
      <div className="list-container">
        <h1 className="h1-list">{t("nav.Cours.listeImportants")}</h1>
        {list.map((cours, index) => (
          <div key={index} className="list-item">
            {cours.coursImportant}
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
