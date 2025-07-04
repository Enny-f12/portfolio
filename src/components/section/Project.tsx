// src/components/PortfolioSection/PortfolioSection.tsx
import React from 'react';
import styles from '@/App.module.css'; // Import the CSS Module

interface PortfolioSectionProps {
  // Define any props if needed
}

const PortfolioSection: React.FC<PortfolioSectionProps> = () => {
  const projects = [
    {
      id: 1,
      title: 'Hyperbuds (Creative collaboration using AI)',
      description: 'A unified platform for creators to brainstorm, plan, and publish content collaboratively, addressing the fragmented creator landscape. Its AI-powered workflow provides smart suggestions and templates, eliminating inefficient manual collaboration discovery.',
      technologies: ['React', 'Next.js', 'Firebase', 'Tailwind CSS'], 
      image: '/hyperbus.jpg', 
      liveLink: 'https://admirable-custard-ccb42e.netlify.app/', 
      githubLink: 'https://github.com/Enny-f12/project.git',
      figmaLink: 'https://www.figma.com/design/KKhxWICO1IDWNHLXd0OZrT/HyperBuds?node-id=0-1&t=SUGwE8OEIcZnvY52-1', 
    },
    {
      id: 2,
      title: 'FettyExchange (Crypto Exchange)',
      description: 'All-in-one digital marketplace for crypto and more! A versatile digital platform designed to simplify cryptocurrency and digital service transactions. It enables users to quickly buy, sell, and convert crypto into cash or other currencies with low fees.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      image: '/fetty.jpg',
      liveLink: 'https://fettyexchange.com/',
      githubLink: 'https://github.com/Enny-f12/fettywebsite.git',
    },
    {
      id: 3,
      title: 'Image Gallery (Pexels API)',
      description: 'An interactive image gallery consuming the Pexels API, featuring search, and responsive design. Demonstrates API integration and efficient data fetching. This platform enables users to download any kind of image they need.',
      technologies: ['React', 'TypeScript', 'API Integration', 'Frontend State Mgmt'],
      image: '/imageapp.jpg',
      liveLink: 'https://gilded-dolphin-d76644.netlify.app/',
      githubLink: 'https://github.com/DesignguyLTD/imageapp-ennyf12.git',
    },
    {
      id: 4,
      title: 'Famtech (Agricultural SaaS Platform)',
      description: 'A platform aimed to revolutionize agriculture by integrating technology with traditional farming. The platform provides farmers with simpler, smarter tools to monitor, manage, and optimize their operations, ensuring more effective agricultural practices.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      image: '/famtech.jpg',
      liveLink: 'https://famtech.netlify.app/',
      githubLink: 'https://github.com/Enny-f12/famtech.git',
    },
    // Removed the separate Figma design project
  ];

  return (
    <section id="portfolio" className={styles.portfolioSection}>
      <h2 className={styles.sectionHeading}>My Projects</h2>
      <div className={styles.projectsGrid}>
        {projects.map((project) => (
          <div key={project.id} className={styles.projectCard}>
           
            <img src={project.image} alt={project.title} className={styles.projectImage} />
            <h3 className={styles.projectTitle}>{project.title}</h3>
            <p className={styles.projectDescription}>{project.description}</p>
            <div className={styles.techTags}>
              {project.technologies.map((tech) => (
                <span key={tech} className={styles.techTag}>{tech}</span>
              ))}
            </div>

            <div className={styles.projectButtons}>
              
              {project.liveLink && (
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className={styles.primaryButton}>
                  Launched Website
                </a>
              )}
              {project.githubLink && (
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className={styles.secondaryButton}>
                  GitHub Code
                </a>
              )}
              {/* NEW: Conditionally render Figma button if project has a figmaLink */}
              {project.figmaLink && (
                <a href={project.figmaLink} target="_blank" rel="noopener noreferrer" className={styles.secondaryButton}>
                  View Design
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
