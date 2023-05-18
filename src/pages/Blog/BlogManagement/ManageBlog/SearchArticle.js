import React, { useState } from 'react';

const SearchArticle = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredArticles = data.filter(article => {
    const titleMatch = article.title ? article.title.toLowerCase().includes(searchTerm.toLowerCase()) : false;
    const authorMatch = article.Auteur ? article.Auteur.toLowerCase().includes(searchTerm.toLowerCase()) : false;
    const textMatch = article.articles ? article.articles.toLowerCase().includes(searchTerm.toLowerCase()) : false;

    return titleMatch || authorMatch || textMatch;
  });

  return (
    <div className="blogManagement__searchArticle">
      <h2>Search Article</h2>
      <input
        type="text"
        placeholder="Search Article"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div className="blogManagement__articles">
        {filteredArticles.map((article, index) => (
          <div
            key={index}
            className="blogManagement__article"
            title={`Title: ${article.title}`} // showing title on hover
          >
            {article.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchArticle;
