import Image from 'next/image';
import Head from 'next/head';
import styles from './/styles/Home.module.css';
import Works from './components/works.js'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Aid Tracker</title>
        <meta name="description" content="Ensuring transparency and efficient aid distribution in Nigeria" />
      </Head>

      <header className={styles.header}>
        <div className={styles.navbar}>
        <Image src="/images/Union.png" alt="Child receiving aid" width={20} height={20}/>
          <h1 className={styles.logo}> <span className={styles.highlight}>Aid</span>  Tracker</h1>
          <nav className={styles.navLinks}>
            <a href="#home">Home</a>
            <a href="#how-it-works">How it Works</a>
            <a href="#features">Features</a>
            <a href="#beneficiaries">Beneficiaries</a>
            <a href="#donors">Donors</a>
          </nav>
          <button className={styles.contactButton}>Contact Us</button>
        </div>
      </header>

      <main className={styles.mainContent}>
        <section className={styles.heroSection}>
          <div className={styles.imageContainer}>
            <Image src="/images/image (1).png" alt="Child receiving aid" className={styles.heroImage} width={200} height={200}/>
            <Image src="/images/image.png" alt="Mother with child" className={styles.heroImage2} width={400} height={400}/>
            <Image src="/images/image (11).png" alt="Child looking at aid worker" className={styles.heroImage} width={200} height={200}/>
          </div>
          <div className={styles.textContent}>
            <h2>Ensuring <span className={styles.highlight}>Transparency</span> and <span className={styles.highlight}>Efficient</span> Aid Distribution in Nigeria</h2>
            <p>Ensuring that aid reaches those who need it the most with blockchain.</p>
            <div className={styles.buttonGroup}>
              <button className={styles.getStartedButton}>Get Started</button>
              <button className={styles.learnMoreButton}>Learn More</button>
            </div>
          </div>
        </section>
      </main>
      <Works />
    </div>
  );
}