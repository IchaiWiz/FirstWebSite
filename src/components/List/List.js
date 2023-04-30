import React, { useState } from "react";
import "./List.css";
const List = () => {
  const [list] = useState([
    {
      id: 1,
      coursImportant: "React js",
    },
    {
      id: 2,
      coursImportant: "html/css",
    },
    { id: 3, coursImportant: "vanilla javascript" },
  ]);

  return (
    <div className="list-page">
      <div className="list-container">
      <h1 className="h1-list">Liste des cours les plus importants</h1>
      {list.map((cours, index) => (
        <div key={index} className="list-item">{cours.coursImportant}</div>
      ))}
    </div></div>
  );
};

export default List;
