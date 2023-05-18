import React, { useEffect, useState } from "react";
import axios from "axios";
import AddArticle from '../BlogManagement/ManageBlog/AddArticle';
import DeleteArticle from '../BlogManagement/ManageBlog/DeleteArticle';
import "./BlogManagement.css";
import TokenVerification from '../BlogManagement/ManageBlog/VerifyToken';
import SearchArticle from "./ManageBlog/SearchArticle";

const BlogManagement = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedArticles, setSelectedArticles] = useState([]);
  const [error, setError] = useState(false);
  const [deleteMessageSuccess, setDeleteMessageSuccess] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get(
      "https://projet-cv-bcbfb4.appdrag.site/api/getAllArticles",
      {
        params: {
          AD_PageNbr: "1",
          AD_PageSize: "500",
        },
      }
    );
    setData(response.data.Table);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    const filteredArticles = data.filter((article) =>
      article.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setData(filteredArticles);
  };

  const handleSelectArticle = (article) => {
    if (!selectedArticles.some((selected) => selected.id === article.id)) {
      setSelectedArticles([...selectedArticles, article]);
    }
  };

  const handleRemoveSelectedArticle = (id) => {
    setSelectedArticles(
      selectedArticles.filter((article) => article.id !== id)
    );
  };

  const deleteSelectedArticles = async () => {
    for (let article of selectedArticles) {
      const response = await axios.delete(`https://projet-cv-bcbfb4.appdrag.site/api/deleteArticle/${article.id}`);
      if (response.status !== 200) {
        setError(true);
        return;
      }
    }
    setSelectedArticles([]);
    setDeleteMessageSuccess(true);
    setTimeout(() => {
        setDeleteMessageSuccess(false);
    }, 2000);
  };

  return (
    <TokenVerification>
      <div className="blogManagement">
        <AddArticle setError={setError} fetchData={fetchData} error={error} />
        <DeleteArticle 
          data={data} 
          searchTerm={searchTerm}
          handleSearchChange={handleSearchChange}
          selectedArticles={selectedArticles}
          handleSelectArticle={handleSelectArticle}
          handleRemoveSelectedArticle={handleRemoveSelectedArticle}
          deleteSelectedArticles={deleteSelectedArticles}
          error={error}
          deleteMessageSuccess={deleteMessageSuccess}
        />
        <SearchArticle
        data={data} 
        searchTerm={searchTerm}
        handleSearchChange={handleSearchChange}
        handleSelectArticle={handleSelectArticle}/>
      </div>
    </TokenVerification>
  );
};

export default BlogManagement;



