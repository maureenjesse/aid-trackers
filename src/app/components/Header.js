// components/Header.js
import Image from 'next/image';

import React from "react";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
         {/* <Image src="/images/Union.png" alt="Child receiving aid" width={20} height={20}/> */}
      <div className={styles.logo}> <span className={styles.highlight}>Aid</span>  Tracker</div>
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
