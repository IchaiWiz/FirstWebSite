import React from "react";
import { Link } from "react-router-dom";
import "../../components/Login/Login.css";
import { useTranslation } from "react-i18next";

function HelpPage() {
  const { t } = useTranslation();

  return (
    <div className="login-page">
      <div className="login-form-container">
        <h1 className="login-title">{t('HelpPage.title')}</h1>
        <h6 className="login-title">{t('HelpPage.subtitle')}</h6>
        <div className="help-options">
          <ul>
            <li>
              <Link className="help-link" to="/forgot-password">
                {t('HelpPage.option1')}
              </Link>
            </li>
            <li>
              <Link className="help-link" to="/forgot-email">
                {t('HelpPage.option2')}
              </Link>
            </li>
            <li>
              <Link className="help-link" to="/contact-support">
                {t('HelpPage.option3')}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HelpPage;

