import React from "react";
import styles from "./LayoutGame.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>Catch Me If You Can !</header>
      <main className={styles.content}>{children}</main>
      <footer className={styles.footer}>
        © 2023 Conception et réalisation par Ichaï Wizman. Tous droits réservés.
      </footer>
    </div>
  );
};

export default Layout;
