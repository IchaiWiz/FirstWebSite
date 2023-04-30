import React from 'react';
import "./PageError.css";
import { Link } from 'react-router-dom';

const PageError = () => {
  return (
    <div className="error_container">
        <div className="error_404">
            <h1>404</h1>
        </div>
        <div className="error_text">
            <h2>Oups !</h2>
            <p>Il semblerait que la page que vous cherchez ait été emportée par un tourbillon d'originalité.</p>
            <Link to="index.html" className="error_btn">Retour à l'accueil</Link>
        </div>
    </div>
  )
}

export default PageError