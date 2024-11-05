import Image from "next/image";
import styles from "../styles/Update.module.css";

const Update = () => {
  return (
    <section className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src="/images/Health insurance papers and first aid kit.png"
          alt="Illustration"
          width={300}
          height={400}
        />
      </div>
      <div className={styles.textContainer}>
        <h2 className={styles.headtext}>Real Time Update on Aids</h2>
        <p className={styles.minitext}>
          Stay informed with real-time updates on your donations and ongoing aid
          campaigns. AidTrackers provides instant notifications and insights,
          allowing donors to track the impact of their contributions as aid is
          delivered to those in need.
        </p>
      </div>
    </section>
  );
};

export default Update;
