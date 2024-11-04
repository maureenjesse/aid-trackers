// components/Header.js
"use client";
import Image from 'next/image';
import { useState } from 'react';
import React from "react";
import styles from "../styles/Header.module.css";
import WalletModal from './WalletModal';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <header className={styles.header}>
            <div className={styles.logocontainer}>
                <Image src="/images/Union.png" alt="company logo" className={styles.companylogo} width={20} height={20} />
                <h2 className={styles.highlight}>Aid <span className={styles.logo}>Tracker</span></h2>
            </div>
            <nav className={styles.nav}>
                <a href="#home">Home</a>
                <a href="#how-it-works">How It Works</a>
                <a href="#features">Features</a>
                <a href="#beneficiary">Beneficiaries</a>
                <a href="#donors">Donors</a>
            </nav>
            <button className={styles.contactButton} onClick={toggleModal}>Connect Wallet</button>
            <div className={`${styles.menuIcon} ${isOpen ? styles.open : ''}`} onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <ul className={`${styles.navLinks} ${isOpen ? styles.showMenu : ''}`}>
                <li><a href="#home">Home</a></li>
                <li><a href="#how-it-works">How it Works</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#beneficiary">Beneficiaries</a></li>
                <li><a href="#donors">Donors</a></li>
                <button className={styles.WalletButton} onClick={toggleModal}>Connect Wallet</button>
            </ul>

            {isModalOpen && <WalletModal onClose={toggleModal} />}
        </header>
    );
};

export default Header;
