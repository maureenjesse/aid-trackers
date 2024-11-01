// components/Header.js

import React from "react";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Aid Tracker</div>
      <nav className={styles.nav}>
        <a href="#">Home</a>
        <a href="#">How It Works</a>
        <a href="#">Features</a>
        <a href="#">Beneficiaries</a>
        <a href="#">Donors</a>
        <button className={styles.contactButton}>Contact Us</button>
      </nav>
    </header>
  );
};

export default Header;
