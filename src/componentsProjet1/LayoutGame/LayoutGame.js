import React from "react";
import styles from "./LayoutGame.module.css";
import { useTranslation } from "react-i18next";

const Layout = ({ children }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.layout}>
      <header className={styles.header}>{t("GameLayout.title")}</header>
      <main className={styles.content}>{children}</main>
      <footer className={styles.footer}>{t("GameLayout.footer")}</footer>
    </div>
  );
};

export default Layout;

