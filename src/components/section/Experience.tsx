// src/components/ResumeExperienceSection/ResumeExperienceSection.tsx
import React from 'react';
import styles from '@/App.module.css'; // Import the CSS Module



const ResumeExperienceSection: React.FC = () => {
  return (
    <section id="resume" className={styles.resumeSection}>
      <h2 className={styles.sectionHeading}>Experience & Education</h2>
      <div className={styles.contentContainer}>
        {/* Professional Experience - UPDATED SECTION */}
        <div className={styles.experienceEntry}>
          <h3 className={styles.entryTitle}>Frontend Developer & Collaborative Engineer</h3>
          {/* Adjusted timeframe based on user's input (2023 - Present) */}
          <p className={styles.entrySubtitle}>Independent Ventures & Collaborative Projects | 2023 - Present</p>
          <ul className={styles.entryList}>
            {/* Incorporated experience with React, collaboration, landing pages, and specific tools */}
            <li><b>Architected and deployed</b> high-performance, responsive web applications and engaging landing pages, significantly enhancing user experience and conversion rates.</li>
            <li><b>Spearheaded seamless integration</b> with diverse backend RESTful APIs, optimizing data flow and ensuring robust communication between frontend and server-side systems.</li>
            <li><b>Championed cross-functional collaboration</b>with both frontend and backend development teams, design, and product, fostering efficient workflows and delivering cohesive solutions.</li>
            <li><b>Leveraged cutting-edge build tools</b> including <b>Vite</b> and <b>Next.js</b> to establish highly optimized development environments and accelerate application build/deployment cycles.</li>
            <li><b>Implemented scalable user authentication and real-time data solutions</b> by integrating <b>Firebase</b> services (Auth, Firestore) into core application features.</li>
            <li><b>Managed comprehensive version control</b> using <b>Git</b>, contributing to over [X number, e.g., 50+] feature branches and successfully resolving complex merge conflicts in collaborative environments.</li>
            <li><b>Actively contributed to three distinct tech ventures</b>, driving product development from concept to deployment, and gaining diverse expertise in problem-solving and technical execution across varied domains.</li>
          </ul>
        </div>


        <div className={styles.downloadResumeContainer}>
          <a href='/e.pdf' target="_blank" rel="noopener noreferrer" className={styles.downloadButton}>
            Download My Resume (PDF)
          </a>
        </div>
      </div>
    </section>
  );
};

export default ResumeExperienceSection;
