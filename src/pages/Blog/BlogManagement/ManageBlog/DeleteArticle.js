import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

const DeleteArticle = ({ data, error }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [deleteMessageSuccess, setDeleteMessageSuccess] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [articles, setArticles] = useState([]); // Ajoutez un nouvel état pour les articles
  const articleTitleInputRef = useRef(null);

  // Utilisez un effet pour mettre à jour l'état des articles lorsque les données changent
  useEffect(() => {
    setArticles(data);
  }, [data]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSelectArticle = (article) => {
    articleTitleInputRef.current.value = article.title;
  };

  const deleteSelectedArticle = async (event) => {
    event.preventDefault();
    const articleTitle = articleTitleInputRef.current.value;
    console.log('Trying to delete article with title:', articleTitle);
  
    try {
      const response = await axios.get("https://projet-cv-bcbfb4.appdrag.site/api/deleteArticle", {
        params: { title: articleTitle }
      });
  
      console.log('Delete response:', response);
      console.log('Delete response data:', response.data);
      
      if (response.data.status === 'OK') {
        setDeleteMessageSuccess(true);
        setMessageError(false);
        articleTitleInputRef.current.value = ''; // Clear the input after successful deletion

        // Supprimez l'article du tableau d'articles dans l'état
        setArticles(prevArticles => prevArticles.filter(article => article.title !== articleTitle));
      } else {
        setDeleteMessageSuccess(false);
        setMessageError(true);
        console.log('Error in deleting article:', response.data);
      }
    } catch (err) {
      console.log('Error in deleting article:', err);
      setMessageError(true);
    }
  };
  

  const filteredData = articles.filter(article => article.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="blogManagement__deleteArticle">
      <h2>Delete Article</h2>
      <input
        type="text"
        placeholder="Search Article"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div className="blogManagement__articles">
        {filteredData.map((article) => (
          <div
            key={article.id}
            className="blogManagement__article"
            onClick={() => handleSelectArticle(article)}
            title={`Title: ${article.title}`} // showing title on hover
          >
            {article.title}
          </div>
        ))}
      </div>
      <input
        ref={articleTitleInputRef}
        type="text"
        placeholder="Enter Article Title for confirmation"
      />
      <button onClick={deleteSelectedArticle}>Delete Selected Article</button>
      {deleteMessageSuccess && <p className="successMessage">Article deleted successfully!</p>}
      {messageError && <p className="errorMessage">Something went wrong, try again.</p>}
      {error && <p className="errorMessage">Something went wrong, try again.</p>}
    </div>
  );
};

export default DeleteArticle;
