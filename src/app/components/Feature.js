// components/Feature.js
import Image from "next/image";
import styles from "../styles/Feature.module.css";

const Feature = () => {
  return (
<<<<<<< HEAD
    <section className={styles.featureSection} id='features'>
=======
    <section className={styles.featureSection} id="#features">
>>>>>>> 5183af6 (new profile components)
      <h2 className={styles.title}>Features</h2>
      <div className={styles.featureContainer}>
        <div className={styles.textContainer}>
          <h3>Transparent Tracking</h3>
          <p>
            AidTrackers ensures complete transparency in the donation process,
            allowing donors to see exactly how their contributions are utilized.
            Each transaction is recorded on the blockchain, providing a clear
            and traceable path from donor to beneficiary.
          </p>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/images/Delivery app for tracking order with GPS.png"
            alt="Tracking illustration"
            className={styles.image}
            width={400}
            height={400}
          />
        </div>
      </div>
    </section>
  );
};

export default Feature;
