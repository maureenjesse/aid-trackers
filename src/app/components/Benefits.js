// components/Benefits.js
<<<<<<< HEAD
import styles from '../styles/Benefits.module.css';
import Image from 'next/image'
=======
import styles from "../styles/Benefits.module.css";
>>>>>>> 5183af6 (new profile components)

export default function Benefits() {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h2 className={styles.title}>
            Benefit of Using the <br />
            <span className={styles.highlight}>Blockchain Technology</span>
          </h2>
          <p className={styles.description}>
            With blockchain technology, AidTrackers ensures transparent and
            secure donations, allowing donors to track every dollar from start
            to finish. Funds are protected with advanced security, reducing
            risks of fraud and unauthorized access. Direct transactions
            eliminate delays, ensuring aid reaches beneficiaries quickly, while
            minimized overhead costs mean more of each contribution goes
            directly to those in need. Blockchain also enables inclusive access,
            allowing aid to reach even those without traditional banking,
            creating a reliable and impactful support network for vulnerable
            communities..
          </p>
          <a href="#" className={styles.link}>
            See more Information <span className={styles.arrow}>→</span>
          </a>
        </div>
        <div className={styles.imageContainer}>
<<<<<<< HEAD
          <Image src="/images/Abou-us-Video.png" alt="Blockchain Benefit" className={styles.image} width={200} height={200}/>
=======
          <img
            src="/images/Abou-us-Video.png"
            alt="Blockchain Benefit"
            className={styles.image}
          />
>>>>>>> 5183af6 (new profile components)
        </div>
      </div>
    </section>
  );
}
