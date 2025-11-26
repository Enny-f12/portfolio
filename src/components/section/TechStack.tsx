// src/components/TechStackSection/TechStackSection.tsx
import React from 'react';
import styles from '@/App.module.css'; // Import the CSS Module


const TechStackSection: React.FC = () => {
  
  const techStack = [
    { name: 'TypeScript', img: 'https://placehold.co/64x64/3178c6/ffffff?text=TS' },
    { name: 'React', img: 'https://placehold.co/64x64/000000/61DAFB?text=React' },
    { name: 'Next.js', img: 'https://placehold.co/64x64/000000/E9D5FF?text=Next' },
    { name: 'Tailwind CSS', img: 'https://placehold.co/64x64/0F172A/06B6D4?text=Tailwind' },
   { name: 'JavaScript', img: 'https://placehold.co/64x64/f7df1e/000000?text=JS' },
   { name: 'CSS', img: 'https://placehold.co/64x64/264de4/ffffff?text=CSS' },
    { name: 'Git', img: 'https://placehold.co/64x64/239120/ffffff?text=Git' },
    { name: 'HTML', img: 'https://placehold.co/64x64/9B2C2C/ffffff?text=HTML' },
    
  ];

  return (
    <section id="stack" className={styles.techStackSection}>
      <h2 className={styles.sectionHeading}>My Tech Stack</h2>
      <div className={styles.techGrid}>
        {techStack.map((tech, index) => ( // Added 'index' here
          <div key={index} className={styles.techCard}> {/* Used 'index' for key */}
            <img src={tech.img}
              alt={tech.name} 
              
              className={styles.techIcon} />
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStackSection;
