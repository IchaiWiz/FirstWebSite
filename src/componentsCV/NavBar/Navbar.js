import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t } = useTranslation();
  return (
    <nav>
      <div className="conteneur">
        <div className="flex-menu">
          <Link to="/">{t('CV.acceuil')}</Link>
          <Link to="/blog">Blog</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar