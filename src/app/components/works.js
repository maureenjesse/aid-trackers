
// components/Works.js
import Image from 'next/image';
import styles from '../styles/works.module.css';



export default function Works() {
  const steps = [
    {
      title: "Connect Wallet",
      description:
        "Connecting your pera wallet automatically gives you easy access to start supporting aid campaigns With blockchain-secured transactions.",
    },
    {
      title: "Create Profile",
      description:
        "Build your unique profile to participate in aid campaigns and make a difference! Join as a donor, beneficiary, or supporter, and get connected to impactful initiatives.",
    },
    {
      title: "Choose Beneficiary",
      description:
        "Explore impactful campaigns aimed at supporting internally displaced persons and individuals with disabilities. Track your donations securely on the Algorand blockchain, ensuring each contribution reaches those in need.",
    },
    {
      title: "Send Aids",
      description:
        "Empower change by sending aid directly to verified beneficiaries. With AidTrackers, your support reaches those who need it most through secure, transparent blockchain transactions.",
    },
    // { title: 'Aid Distribution', description: 'A website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.' }
  ];

  return (
    <section className={styles.section}>
      <h2 className={styles.heading} id="how-it-works">
        How it Works
      </h2>
      <div className={styles.cards}>
        {steps.map((step, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.iconPlaceholder}></div>
            <h3 className={styles.title}>{step.title}</h3>
            <p className={styles.description}>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
