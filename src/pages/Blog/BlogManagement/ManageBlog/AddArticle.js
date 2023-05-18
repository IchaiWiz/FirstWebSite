import React, { useState } from 'react';
import axios from 'axios';

const AddArticle = ({ setError, fetchData, error }) => {
  const [form, setForm] = useState({
    title: "",
    article: "",
    author: "",
    image: "",
  });
  const [addMessageSuccess, setAddMessageSuccess] = useState(false);

  const handleInputChange = (e) => {
    setForm((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.get("https://projet-cv-bcbfb4.appdrag.site/api/addArticle", {
      params: {
        "title": form.title,
        "Auteur": form.author,
        "articles": form.article
      }
    });
    if (response.status === 200) {
      setAddMessageSuccess(true);
      setForm({
        title: "",
        article: "",
        author: "",
        image: "",
      });
      setTimeout(() => {
        setAddMessageSuccess(false);
      }, 2000);
      fetchData();
    } else {
      setError(true);
    }
  };

  return (
    <div className="blogManagement__addArticle">
      <h2>Add Article</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleInputChange}
        />
        <textarea
          name="article"
          placeholder="Article"
          value={form.article}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={form.author}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={form.image}
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>
      {addMessageSuccess && <p className="successMessage">Article added successfully!</p>}
      {error && <p className="errorMessage">Something went wrong, try again.</p>}
    </div>
  );
};

export default AddArticle;
