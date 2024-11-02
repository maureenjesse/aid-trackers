// components/Footer.js
import styles from '../styles/Footer.module.css';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerSection}>
        <div className={styles.logocontainer}>
      <Image src="/images/Union.png" alt="company logo" className={styles.companylogo} width={20} height={20}/>
        <h2 className={styles.logo}>Aid <span className={styles.txt}>Tracker</span></h2>
        </div>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <div className={styles.badges}>
          <Image src="/images/google-page-speed1.png" alt="Google Play" className={styles.icon} width={200} height={200} />
            {/* <Image src="/app-store-icon.png" alt="App Store" className={styles.icon} /> */}
        </div>
      </div>
      <div className={styles.footerSection}>
        <h3>Links</h3>
        <ul className={styles.linksList}>
          <li>Home</li>
          <li>How it Works</li>
          <li>Features</li>
          <li>Partners</li>
          <li>Beneficiaries</li>
          <li>Donor</li>
        </ul>
      </div>
      <div className={styles.footerSection}>
        <h3>Contact us</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <p>+23483561921</p>
        <div className={styles.socialIcons}>
          <Image src="/images/Group 5.png" alt="Facebook"  width={20} height={20}/>
          <Image src="/images/Group 11.png" alt="Instagram" width={20} height={20}/>
          <Image src="/images/Group 10.png" alt="Twitter" width={20} height={20}/>
          <Image src="/images/Group 9.png" alt="LinkedIn" width={20} height={20}/>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>© 2024 Copyright by Aid Tracker. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
