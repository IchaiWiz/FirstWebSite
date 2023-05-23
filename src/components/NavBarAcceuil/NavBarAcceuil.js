import React, { useState, useEffect } from "react";
import "./NavBarAcceuil.css";
import logoportfolio from "../../../src/assets/logoportfolio.png";
import { Link, useLocation } from "react-router-dom";
// import { useAuth } from "../../components/Authentification/AuthContext";
import DropI18N from "../DropI18N/DropI18N";
import { useTranslation } from "react-i18next";

const NavBarAcceuil = ({ filters, handleFilterChange }) => {
  const [token, setToken] = useState(null);
  // const { loggedIn } = useAuth();
  const [showCoursReact, setShowCoursReact] = useState(false);
  const [showFilterBar, setShowFilterBar] = useState(false);
  const location = useLocation();

  const { t } = useTranslation();

  const handleCoursReactClick = () => {
    setShowCoursReact(!showCoursReact);
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    } else {
      console.log("Token not found");
    }
    if (location.pathname === "/projectfilter") {
      setShowFilterBar(true);
    } else {
      setShowFilterBar(false);
    }
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
    window.location.href = "/";
  };

  return (
    <div>
      <nav className="nav_originale">
          <div className="nav_logo">
            <img src={logoportfolio} alt="Logo" />
            <span className="nav_name">Wizman Ichaï</span>
          </div>
    {location.pathname === '/projectfilter' && (
  <div className={`nav_filter_bar ${showFilterBar ? 'show' : ''}`}>
    <button 
      className="filter_toggle_btn"
      onClick={() => setShowFilterBar(!showFilterBar)}
    >
      {showFilterBar ? 'Hide' : 'Show'} Filters
    </button>
    {showFilterBar && (
      <div className="filter_options">
        <label>
          <input
            type="checkbox"
            checked={filters.HTML}
            onChange={() => handleFilterChange('HTML')}
          />
          HTML
        </label>
        <label>
          <input
            type="checkbox"
            checked={filters.JS}
            onChange={() => handleFilterChange('JS')}
          />
          JS
        </label>
        <label>
          <input
            type="checkbox"
            checked={filters.React}
            onChange={() => handleFilterChange('React')}
          />
          React
        </label>
      </div>
    )}
  </div>
)}
        <ul className="nav_links">
          {!token && (
            <li>
              <Link to="/login">{t("nav.login")}</Link>
            </li>
          )}
          <li>
            <Link to="/home">{t("nav.Moncv")}</Link>
          </li>
          {token && (
            <>
              <a
                className="nav_logout"
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  handleLogout();
                }}
              >
                Log Out
              </a>
              <li className="nav_dropdown">
                <span
                  className="nav_dropdown_link"
                  onClick={handleCoursReactClick}
                >
                  Cours React
                </span>
                {showCoursReact && (
                  <ul className="nav_dropdown_menu">
                    <li className="nav_dropdown_inner">
                      <span className="nav_dropdown_link_inner">
                        Style & Test
                      </span>
                      <ul className="nav_dropdown_menu_inner">
                        <li>
                          <Link to="/StyleReact">Style en React</Link>
                        </li>
                        <li>
                          <Link to="/TestReact">Test en React</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav_dropdown_inner">
                      <span className="nav_dropdown_link_inner">
                        Section UseEffect
                      </span>
                      <ul className="nav_dropdown_menu_inner">
                        <li>
                          <Link to="/PresUseEffect">
                            Présentation UseEffect
                          </Link>
                        </li>
                        <li>
                          <Link to="/UefVide">UseEffect Vide</Link>
                        </li>
                        <li>
                          <Link to="/UseEffectDependance">
                            UseEffect Dependance
                          </Link>
                        </li>
                        <li>
                          <Link to="/UseEffectReturn">UseEffect Return</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav_dropdown_inner">
                      <span className="nav_dropdown_link_inner">
                        Use State Section
                      </span>
                      <ul className="nav_dropdown_menu_inner">
                        <li>
                          <Link to="/PresUseState">Présentation UseState</Link>
                        </li>
                        <li>
                          <Link to="/UseStateList">UseState List</Link>
                        </li>
                        <li>
                          <Link to="/UseStateNumber">UseState Number</Link>
                        </li>
                        <li>
                          <Link to="/UseStateObject">UseState Object</Link>
                        </li>
                        <li>
                          <Link to="/UseStateToogle">UseState Toogle</Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                )}
              </li>
            </>
          )}
          {location.pathname !== '/projectfilter' && (
            <li>
              <Link to="/projectfilter">Voir mes projets</Link>
            </li>
          )}
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li className="nav_dropdown">
            <span className="nav_dropdown_link">React.js</span>
            <ul className="nav_dropdown_menu">
              <li>
                <Link to="/Counter">{t("nav.Counterlink")}</Link>
              </li>
              <li>
                <Link to="/Toogle">{t("nav.Tooglelink")}</Link>
              </li>
              <li>
                <Link to="/Metier">{t("nav.Metierlink")}</Link>
              </li>
              <li>
                <Link to="/List">{t("nav.Listlink")}</Link>
              </li>
              <li>
                <Link to="/Calculus">UseReducer Calculus</Link>
              </li>
              <li>
                <Link to="/CountIntervalCompo">
                  {t("nav.CountIntervalCompolink")}
                </Link>
              </li>
              <li>
                <Link to="/MouseMove">{t("nav.MouseMovelink")}</Link>
              </li>
            </ul>
          </li>
          <li>
            <DropI18N />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBarAcceuil;
