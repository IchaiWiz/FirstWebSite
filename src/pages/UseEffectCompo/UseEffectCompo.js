import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./UseEffectCompo.css"

const UseEffectCompo = () => {
  const [data, setData] = useState();

  useEffect(() => {
    console.log("mon composant est monté");

    axios
      .get("https://projet-cv-bcbfb4.appdrag.site/api/getAllArticles", {
        params: {
          AD_PageNbr: "1",
          AD_PageSize: "500",
        },
      })
      .then(function (response) {
        console.log(response.data.Table);
        setData(response.data.Table);
      });
  }, []);

  return (
    <div className="use-effect-page">
      <div className="use-effect-container">
      <h1 className="h1-UseEffect">hello uSeEffect</h1>
      {
        data && data.map((row)=>(
            <div key={row.id}>
                <h2 className="h2-UseEffect">{row.title}</h2>
                <p className="p-UseEffect">{row.articles}</p>
            </div>
        ))
      }
        <Link to="/">
        <button className="btn-UseEffect">retourner à la page d'acceuil</button>
</Link>
    </div>
    </div>
  );
};

export default UseEffectCompo;
