import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import { useAuth } from "../../components/Authentification/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';


function validatePassword(password, t) {
  const errors = [];

  if (password.length < 8) {
    errors.push(t('Login.error8c'));
  }

  if (!/[A-Z]/.test(password)) {
    errors.push(t('Login.errorMajc'));
  }

  if (!/[a-z]/.test(password)) {
    errors.push(t('Login.errorMinc'));
  }

  if (!/\d/.test(password)) {
    errors.push(t('Login.errornumber'));
  }

  if (!/[!@#$%^&*]/.test(password)) {
    errors.push(t('Login.errorsymbole'));
  }

  return errors;
}


function LoginForm() {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setLoggedIn, setToken } = useAuth();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const passwordErrors = validatePassword(password, t);

    if (passwordErrors.length > 0) {
      const errorMessage =
        t('Login.passwordErrorIntro') +
        (passwordErrors.length > 1
          ? passwordErrors.slice(0, -1).join(', ') + t('Login.passwordErrorAnd')
          : '') +
        passwordErrors.slice(-1) + ".";
      setErrorMessage(errorMessage);
      return;
    }
    

    axios
      .get("https://projet-cv-bcbfb4.appdrag.site/api/checkUser", {
        params: {
          email: email,
          password: password,
          AD_PageNbr: "1",
          AD_PageSize: "500",
        },
      })
      .then(function (response) {
        console.log(response.data);
       // const userExists = response.data.Table.some((user) => user.token);

        if (response.data.Table.length === 0) { // en cqs dùerreur
          setErrorMessage(t('Login.connectionError'));

        } else { // reussite
          const userToken = response.data.Table[0].token;
localStorage.setItem("token", userToken);
setToken(userToken);

          setLoggedIn(true);
          navigate("/");
        }
        })
        .catch(function (error) {
          console.error(error);
          setErrorMessage(t('Login.checkIdentifiants'));
        });
      };

  return (
    <div className="login-page">
      <div className="login-form-container">
        <h1 className="login-title">{t('Login.title')}</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">{t('Login.password')}</label>
            <input
              type={passwordVisible ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="show-password">
            <label>
              <input
                type="checkbox"
                checked={passwordVisible}
                onChange={() => setPasswordVisible(!passwordVisible)}
              />
              {t('Login.showPassword')}
            </label>
            <Link to="/HelpPage" className="help-link">
              {t('Login.forgotPassword')}
            </Link>
          </div>

          <button type="submit" className="login-button">
            {t('Login.btn')}
          </button>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
