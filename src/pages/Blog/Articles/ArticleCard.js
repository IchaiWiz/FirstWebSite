import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ArticleCard.module.css";


function truncateText(text, maxLength) {
  if (text.length <= maxLength) {
    return text;
  }
  const subString = text.substr(0, maxLength - 1);
  return subString.substr(0, subString.lastIndexOf(" ")) + "...";
}

const ArticleCard = ({ article }) => {
  const navigate = useNavigate();

  const handleClick = (event) => {
    event.preventDefault();
    navigate(`/article/${article.id}`);
  };

  return (
    <div className={styles.articleCard} onClick={handleClick}>
      <h2 className={styles.articleTitle}>{article.title}</h2>
      <img src={article.ImageArticle} alt={article.title} className={styles.articleImage} />
      <p className={styles.articleExcerpt}>{truncateText(article.articles, 50)}</p>
      <p className={styles.articleAuthor}>{article.Auteur}</p>
    </div>
  );
};

export default ArticleCard;
