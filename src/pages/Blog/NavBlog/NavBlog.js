import React, { useState, useEffect } from "react";
import './NavBlog.css';
import logoportfolio from "../../../../src/assets/logoportfolio.png";
import DropI18N from "../../../components/DropI18N/DropI18N";
import { useTranslation } from "react-i18next";
// import { useAuth } from "../../../components/Authentification/AuthContext";

const NavBlog = () => {
  const [token, setToken] = useState(null);
  // const { loggedIn } = useAuth();
    const { t } = useTranslation();

    useEffect(() => {
      const storedToken = localStorage.getItem("token");
      if (storedToken) {
        setToken(storedToken);
      } else {
        console.log("Token not found");
      }
    }, []);

  return (
    <div className="nav_blog">
      <div className="nav_blog_logo">
      <img src={logoportfolio} alt="Logo" />
        <h1 className="nav_blog_name">Blog GPT</h1>
      </div>
      <ul className="nav_blog_links">
      { !token && (
        <li>
          <a href="/login">{t('nav.login')}</a>
        </li>
      )}
      { token && (
        <li>
          <a href="/BlogManagement">Gérer les articles</a>
        </li>
      )}
        <li>
            <DropI18N />
          </li>
      </ul>
    </div>
  );
};

export default NavBlog;
