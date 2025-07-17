import React from 'react';
import styles from '@/App.module.css'; 

const AboutMeSection: React.FC = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <h2 className={styles.sectionHeading}>About Me</h2>
      <div className={styles.contentContainer}>
       <p className={styles.paragraph}>
  As a Frontend Developer, I specialize in building intuitive, responsive, and performant web applications. I enjoy transforming complex problems into user-centric interfaces that provide a seamless experience across all devices and browsers.
</p>
<p className={styles.paragraphLast}>
  I am a dedicated learner, constantly exploring new technologies to stay at the forefront of web development. I am eager to contribute my skills to impactful projects and collaborate with an innovative team.
</p>
      </div>
    </section>
  );
};

export default AboutMeSection;
