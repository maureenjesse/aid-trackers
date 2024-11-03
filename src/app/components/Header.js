// components/Header.js
import Image from 'next/image';

import React from "react";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
          <div className={styles.logocontainer}>
      <Image src="/images/Union.png" alt="company logo" className={styles.companylogo} width={20} height={20}/>
        <h2 className={styles.highlight}>Aid <span className={styles.logo}>Tracker</span></h2>
        </div>
      <nav className={styles.nav}>
        <a href="#home">Home</a>
        <a href="#how-it-works">How It Works</a>
        <a href="#features">Features</a>
        <a href="#beneficiary">Beneficiaries</a>
        <a href="#donors">Donors</a>
      </nav>
        <button className={styles.contactButton}>Contact Us</button>
    </header>
  );
};

export default Header;
