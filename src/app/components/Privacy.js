import Image from "next/image";
import styles from "../styles/Privacy.module.css";

const PrivacySection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.headtext}>
          Privacy and dignity of beneficiaries are protected
        </h2>
        <p className={styles.minitext}>
        We prioritize the privacy and dignity of our beneficiaries. AidTrackers safeguards personal information while ensuring that aid distribution respects the dignity of all individuals, fostering a respectful and secure environment for those receiving assistance..
        </p>
<<<<<<< HEAD
        <p className={styles.minitext}>
          Our <a href="/delivery-model" className={styles.link}>delivery model</a> helps you cut costs and deliver within budget.
        </p>
        <blockquote className={styles.quote}>
          &quot;Simform is quick to identify larger problems with the Software so we decided to expand our scope to build new modules&quot;
        </blockquote>
=======
        
        
>>>>>>> 5183af6 (new profile components)
      </div>
      <div className={styles.imageContainer}>
        <Image
          src="/images/privacy.png"
          alt="Privacy illustration"
          width={300}
          height={300}
        />
      </div>
    </section>
  );
};

export default PrivacySection;
