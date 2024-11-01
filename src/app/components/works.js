// components/HowItWorks.js
import Image from 'next/image';
import styles from '..//styles/Works.module.css';

export default function Works() {
  const steps = [
    { title: 'Aid Distribution', description: 'A website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.' },
    { title: 'Aid Tracking', description: 'A website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.' },
    { title: 'Aid Distribution', description: 'A website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.' },
    { title: 'Aid Distribution', description: 'A website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.' },
    // { title: 'Aid Distribution', description: 'A website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.' }
  ];

  return (
    <section className={styles.section} id='#howitworks'>
      <h2 className={styles.heading} id="how-it-works">How it Works</h2>
      <div className={styles.cards}>
        {steps.map((step, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.iconPlaceholder}>
            {/* <Image src="/images/Group1.png" alt="distribution" className={styles.heroImage2} width={400} height={400}/> */}
            </div>
            <h3 className={styles.title}>{step.title}</h3>
            <p className={styles.description}>{step.description}</p>
          </div>
        ))}
      </div>
    </section>

  );
}
