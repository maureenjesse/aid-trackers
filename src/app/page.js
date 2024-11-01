// import Image from 'next/image';
import Head from 'next/head';
// import styles from './/styles/Home.module.css';
import Header from './components/Header.js'
import Hero from './components/Hero.js'
import Works from './components/works.js'
import Benefits from './components/Benefits.js'
import Feature from './components/Feature.js'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Aid Tracker</title>
        <meta name="description" content="Ensuring transparency and efficient aid distribution in Nigeria" />
      </Head>


      <Header />
      <Hero />
      <Works />
      <Benefits />
      <Feature />
    </div>
  );
}