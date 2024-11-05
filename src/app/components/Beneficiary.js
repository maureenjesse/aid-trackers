// components/Beneficiary.js
"use client";
import Image from 'next/image';
import { useState } from 'react';
import styles from '../styles/Beneficiary.module.css';
import WalletModal from './WalletModal';

export default function Beneficiary() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showMiniAlert, setShowMiniAlert] = useState(false);

    const toggleModal = () => {
        setShowMiniAlert(true);
        setTimeout(() => setShowMiniAlert(false), 2000); // Hide alert after 2 seconds
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div className={styles.container} id='beneficiary'>
            <h1>Beneficiary</h1>
            <div className={styles.images}>
                {/* <Image src="/images/image (1).png" alt="Child receiving aid" className={styles.heroImage} width={100} height={200}/> */}
                <Image src="/images/Rectangle 78.png" alt="Child receiving aid" className={styles.heroImage2} width={1000} height={300}/>
                {/* <Image src="/images/image (11).png" alt="Child receiving aid" className={styles.heroImage} width={100} height={200}/> */}
            </div>
            <div className={styles.content}>
                <h2 className={styles.head}>Register as a Beneficiary</h2>
                <p className={styles.text}>Ensuring that aid reaches those who need it the most with blockchain-based humanitarian aid.</p>
                <button className={styles.register} onClick={toggleModal}>Connect Wallet</button>
            </div>

            {isModalOpen && <WalletModal onClose={toggleModal} />}

            {showMiniAlert && (
                <div className={styles.miniAlert}>
                    Please connect wallet
                </div>
            )}
        </div>
    );
}
