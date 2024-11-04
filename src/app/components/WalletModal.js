// components/WalletModal.js
import React from 'react';
import styles from '../styles/WalletModal.module.css';
import Image from 'next/image';

const WalletModal = ({ onClose }) => {
    const walletOptions = [
        { name: 'Defly', icon: '/images/image 3.png' },
        { name: 'PeraWallet', icon: '/images/image 4.png' },
        { name: 'Deffi ', icon: '/images/OIP.png' },
        // { name: 'Coinbase Wallet', icon: '/images/coinbase-icon.png' },
    ];

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose}>×</button>
                <h2 className={styles.modalTitle}>Connect Wallet</h2>
                <ul className={styles.walletList}>
                    {walletOptions.map((wallet) => (
                        <li key={wallet.name} className={styles.walletOption}>
                            <Image src={wallet.icon} alt={`${wallet.name} icon`} width={32} height={32} />
                            <span>{wallet.name}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default WalletModal;
