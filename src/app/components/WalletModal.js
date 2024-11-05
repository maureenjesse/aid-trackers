// components/WalletModal.js
import React, { useState } from 'react';
import styles from '../styles/WalletModal.module.css';
import Image from 'next/image';

const WalletModal = ({ onClose }) => {
    const [selectedWallet, setSelectedWallet] = useState(null);

    const walletOptions = [
        { name: 'Defly', icon: '/images/image 3.png' },
        { name: 'PeraWallet', icon: '/images/image 4.png' },
        { name: 'Deffi', icon: '/images/OIP.png' },
    ];

    const handleWalletSelect = (wallet) => {
        setSelectedWallet(wallet);
    };

    const handleCloseDialog = () => {
        setSelectedWallet(null);
        onClose();
    };

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={handleCloseDialog}>×</button>
                
                {selectedWallet ? (
                    <div className={styles.largeDialog}>
                        <Image src={selectedWallet.icon} alt={`${selectedWallet.name} icon`} width={100} height={100} />
                        <h2>{selectedWallet.name} Wallet Selected</h2>
                        <p>connect with {selectedWallet.name}. and Enjoy secure and seamless transactions!</p>
                        {/* <button className={styles.connectButton} onClick={handleCloseDialog}>Close</button> */}
                    </div>
                ) : (
                    <>
                        <h2 className={styles.modalTitle}>Connect Wallet</h2>
                        <ul className={styles.walletList}>
                            {walletOptions.map((wallet) => (
                                <li
                                    key={wallet.name}
                                    className={styles.walletOption}
                                    onClick={() => handleWalletSelect(wallet)}
                                >
                                    <Image src={wallet.icon} alt={`${wallet.name} icon`} width={32} height={32} />
                                    <span>{wallet.name}</span>
                                </li>
                            ))}
                        </ul>
                    </>
                )}
            </div>
        </div>
    );
};

export default WalletModal;
