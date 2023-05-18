import React from 'react';
import './PageError.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const PageError = () => {
  const { t } = useTranslation();

  return (
    <div className="error_container">
      <div className="error_404">
        <h1>404</h1>
      </div>
      <div className="error_text">
        <h2>{t('PageError.title')}</h2>
        <p>{t('PageError.description')}</p>
        <Link to="/" className="error_btn">{t('PageError.backButton')}</Link>
      </div>
    </div>
  );
};

export default PageError;
