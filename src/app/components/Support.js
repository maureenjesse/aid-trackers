import Image from 'next/image';
import styles from '../styles/Support.module.css';
import imageUrl from '../../../public/images/Frame160.png'

const Support = ({ imageUrl, location, amount, title, description }) => {
    
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" className={styles.image} />
        <div className={styles.overlay}>
          <div className={styles.location}>{location}</div>
          <div className={styles.amount}>{amount}</div>
        </div>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <a href="#" className={styles.link}>Donate Now &rsaquo;</a>
      </div>
    </div>
  );
};

export default Support;
