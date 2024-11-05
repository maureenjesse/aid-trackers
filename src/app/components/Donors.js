// components/Donors.js
"use client"
import Image from "next/image";
import styles from "../styles/Donors.module.css";
import { useState } from "react";
import WalletModal from "./WalletModal";

export default function Donors() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showMiniAlert, setShowMiniAlert] = useState(false);

    const toggleModal = () => {
        setShowMiniAlert(true);
        setTimeout(() => setShowMiniAlert(false), 2000); // Hide alert after 2 seconds
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div className={styles.container} id="donors">
            <h2 className={styles.title}>Donors</h2>
            <div className={styles.images}>
                <Image src="/images/image (1).png" alt="Child receiving aid" className={styles.heroImage} width={100} height={200}/>
                <Image src="/images/image.png" alt="Mother with child" className={styles.heroImage2} width={600} height={250}/>
                <Image src="/images/image (11).png" alt="Child looking at aid worker" className={styles.heroImage3} width={100} height={200}/>
            </div>
            <div className={styles.content}>
                <h3 className={styles.heading}>Register as a Donor</h3>
                <p className={styles.description}>
                    Ensuring that aid reaches those who need it the most with blockchain-based humanitarian aid.
                </p>
                <button className={styles.registerButton} onClick={toggleModal}>Connect Wallet</button>
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
