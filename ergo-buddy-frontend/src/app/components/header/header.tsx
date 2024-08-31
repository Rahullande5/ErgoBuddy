import React from 'react';
import Link from 'next/link';
import styles from '../../ergoBuddyCss/Header.module.css';
import ubsLogo from '../../images/image.png';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>ErgoBuddy</div>
      <nav className={styles.nav}>
        <Link href="#features" className={styles.navLink}>Features</Link>
        <Link href="/about" className={styles.navLink}>About</Link>
        <Link href="#contact" className={styles.navLink}>Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
