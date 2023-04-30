import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const UseEffectBlog = () => {
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
    <div className="container">
      {
        data && data.map((row)=>(
            <div key={row.id} className="bg-secondary shadow-lg rounded m-3 p-3">
                <h2 className="h2-UseEffect">{row.title}</h2>
                <p className="p-UseEffect">{row.articles}</p>
                <img src={row.ImageArticle} className="img-fluid" alt="" />
                <p>{row.Auteur}</p>
            </div>
        ))
      }
        <Link to="/">
        <button className="btn-UseEffect">retourner à la page d'acceuil</button>
</Link>
    </div>
  );
};

export default UseEffectBlog;
