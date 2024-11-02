// import Image from 'next/image';
import Head from 'next/head';
// import styles from './/styles/Home.module.css';
import Header from './components/Header.js'
import Hero from './components/Hero.js'
import Works from './components/works.js'
import Benefits from './components/Benefits.js'
import Feature from './components/Feature.js'
import Update from './components/Update.js'
import Privacy from './components/Privacy.js'
import Beneficiary from './components/Beneficiary.js'
import Testimonials from './components/Testimonials.js'
import Donors from './components/Donors.js'
import Support from './components/Support.js'
import Footer from './components/Footer.js'

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
      <Update />
      <Privacy />
      <Beneficiary />
      <Testimonials />
      <Donors />
      {/* <Support /> */}
      <Footer />
    </div>
  );
}