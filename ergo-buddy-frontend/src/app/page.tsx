import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import styles from './ergoBuddyCss/LandingPage.module.css';
const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome to ErgoBuddy</title>
        <meta name="description" content="Your personalized ergonomic assistant" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <section className={styles.hero}>
          <h2>Enhance Your Workspace Health</h2>
          <p>Get personalized ergonomic insights and exercises to keep you active and healthy at work.</p>
          <Link href="/signup">
            <button className={styles.ctaButton}>Get Started</button>
          </Link>
        </section>

        <section id="features" className={styles.features}>
          <h3>Features</h3>
          <br/>
          <div className={styles.featureList}>
            <div className={styles.featureItem}>
              <h4>Real-Time Activity Tracking</h4>
              <p>Monitor your posture and activity levels with real-time feedback.</p>
            </div>
            <div className={styles.featureItem}>
              <h4>Guided Exercises</h4>
              <p>Follow guided exercises to relieve stress and improve your posture.</p>
            </div>
            <div className={styles.featureItem}>
              <h4>Customizable Notifications</h4>
              <p>Receive tailored reminders for breaks, exercises, and posture checks.</p>
            </div>
          </div>
        </section>

        <section id="about" className={styles.about}>
          <h3>About ErgoBuddy</h3>
          <br/>
          <p>ErgoBuddy is designed to help you maintain a healthy and productive workspace by providing ergonomic advice and tools tailored to your needs.</p>
        </section>

        <section id="contact" className={styles.contact}>
          <p>Have questions or feedback? Get in touch with us.</p>
          <br/>
          <Link href="/contact">
            <button className={styles.contactButton}>Contact Us</button>
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
