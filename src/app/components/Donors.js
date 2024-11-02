import Image from 'next/image';
import styles from '../styles/Donors.module.css';

export default function Donors() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Donors</h2>
      <div className={styles.images}>
        <div className={styles.imageWrapper}>
          <Image src="/left-image.jpg" alt="Left image" width={100} height={150} layout="responsive" className={styles.image}/>
        </div>
        <div className={styles.imageWrapper}>
          <Image src="/center-image.jpg" alt="Center image" width={300} height={150} layout="responsive" className={styles.image}/>
        </div>
        <div className={styles.imageWrapper}>
          <Image src="/right-image.jpg" alt="Right image" width={100} height={150} layout="responsive" className={styles.image}/>
        </div>
      </div>
      <div className={styles.content}>
        <h3 className={styles.heading}>Register as a Donor</h3>
        <p className={styles.description}>
          Ensuring that aid reaches those who need it the most with blockchain
        </p>
        <button className={styles.registerButton}>Register</button>
      </div>
    </div>
  );
}
