import React, { useEffect, useState } from "react";
import axios from "axios";
import ArticleCard from "./ArticleCard";
import styles from "./UseEffectBlog.module.css";
import NavBlog from "../NavBlog/NavBlog";

const UseEffectBlog = () => {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get("https://projet-cv-bcbfb4.appdrag.site/api/getAllArticles", {
        params: {
          AD_PageNbr: "1",
          AD_PageSize: "500",
        },
      })
      .then(function (response) {
        setData(response.data.Table);
      });
  }, []);

  return (
    <div> <NavBlog />
    <div className={styles.blogpage}>
    <div className={styles.articlesContainer}>
      {data &&
        data.map((row) => (
          <ArticleCard key={row.id} article={row} />
        ))}
    </div></div></div>
  );
};

export default UseEffectBlog;
