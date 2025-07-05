
import React from 'react';
import styles from '@/App.module.css'; 
import Image from 'next/image';


const HeroSection: React.FC = () => {
  return (
    <section id="home" className={styles.heroSection}>
      <div className={styles.heroContentWrapper}>
        <div className={styles.heroTextContainer}>
          <h1 className={styles.heroHeading}>
            Hi, I&apos;m <span className={styles.highlightText}>Esther Alayande</span>
          </h1>
          <p className={styles.heroSubheading}>
            A passionate <span className={styles.highlightTextBold}>Frontend Developer and UI/UX Designer</span> building engaging and accessible web experiences.
          </p>
          <div className={styles.heroButtons}>
            <a href="#portfolio" className={styles.primaryButton}>View My Work</a>
            <a href="alayandeesther469@gmail.com" className={styles.secondaryButton}>Get In Touch</a>
          </div>
        </div>
        <div className={styles.heroImageContainer}>
          <Image
            src="/esther.jpg"
            alt="Developer Illustration"
            width={1080}
            height={1013}
            className={styles.heroImage}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
