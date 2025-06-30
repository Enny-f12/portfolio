import React from 'react';
import styles from '@/App.module.css'; 

const AboutMeSection: React.FC = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <h2 className={styles.sectionHeading}>About Me</h2>
      <div className={styles.contentContainer}>
        <p className={styles.paragraph}>
          I am a dedicated Frontend Developer with a strong passion for creating intuitive, dynamic, and visually appealing web applications. My journey into web development began with a fascination for how digital experiences come to life, evolving into a commitment to crafting user-centric interfaces.
        </p>
        <p className={styles.paragraph}>
          I thrive on solving complex problems and transforming ideas into robust code. My expertise lies in building responsive and performant applications, ensuring a seamless experience across various devices and browsers. I am constantly exploring new technologies and best practices to stay at the forefront of the ever-evolving web landscape.
        </p>
        <p className={styles.paragraphLast}>
          Outside of coding, I enjoy solving puzzles, singing, traveling, doing chores, exploring new design trends, contributing to projects which further fuels my creativity and problem-solving skills. I am eager to contribute my skills to impactful projects and collaborate with innovative teams.
        </p>
      </div>
    </section>
  );
};

export default AboutMeSection;
