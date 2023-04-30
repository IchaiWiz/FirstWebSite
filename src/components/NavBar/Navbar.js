import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className="conteneur">
        <div className="flex-menu">
          <Link to="/">Acceuil</Link>
          <Link to="/blog">Blog</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar