
import React from 'react';
import styles from '@/App.module.css'; 


const PortfolioSection: React.FC = () => {
  const projects = [

    {
      id: 2,
      title: 'FettyExchange (Crypto exchange)',
      description: 'All-in-one digital marketplace for crypto and more! A versatile digital platform designed to simplify cryptocurrency and digital service transactions. It enables users to quickly buy, sell, and convert crypto into cash or other currencies with low fees.',
      technologies: ['Html', 'JavaScript', 'CSS', 'mediaqueries'],
      image: '/fetty.jpg',
      liveLink: 'https://fettyexchange.com/', // Replace with actual link
      githubLink: 'https://github.com/Enny-f12/fettywebsite.git', // Replace with actual link
    },
    {
      id: 3,
      title: 'Image Gallery (Pexels API)',
      description: 'An interactive image gallery consuming the Pexels API, featuring search, lazy loading, and responsive design. Demonstrates API integration and efficient data fetching.',
      technologies: ['React', 'API Integration', 'TypeScript', 'Frontend State Mgmt'],
      image: '/imageapp.jpg',
      liveLink: 'https://gilded-dolphin-d76644.netlify.app/', // Replace with actual link
      githubLink: 'https://github.com/DesignguyLTD/imageapp-ennyf12.git', // Replace with actual link
    },
    {
      id: 4,
      title: 'Famtech (Agricultural Saas Platform)',
      description: 'A platform aimed to revolutionize agriculture by integrating technology with traditional farming. The platform provides farmers with simpler, smarter tools to monitor, manage, and optimize their operations, ensuring more effective agricultural practices.',
      technologies: ['HTML', 'CSS', 'Responsive Design', 'JavaScript'],
      image: '/famtech.jpg',
      liveLink: 'https://famtech.netlify.app/', 
      githubLink: 'https://github.com/Enny-f12/famtech.git', // Replace with actual link
    },
     {
      id: 1,
      title: 'Hyperbuds (Creative collaboration using AI)',
      description: ' A unified platform for creators to brainstorm, plan, and publish content collaboratively, addressing the fragmented creator landscape. Its AI-powered workflow provides smart suggestions and templates, eliminating inefficient manual collaboration discovery.',
      technologies: ['HTML', 'CSS', 'Responsive Design', 'JavaScript'],
      image: '/hyperbus.jpg',
      liveLink: 'https://gilded-dolphin-d76644.netlify.app/', 
      githubLink: 'https://github.com/Enny-f12/famtech.git', // Replace with actual link
    },
  ];

  return (
    <section id="portfolio" className={styles.portfolioSection}>
      <h2 className={styles.sectionHeading}>My Projects</h2>
      <div className={styles.projectsGrid}>
        {projects.map((project) => (
          <div key={project.id} className={styles.projectCard}>
            {/* In a real Next.js app, you'd use <Image src={project.image} alt={project.title} width={600} height={350} /> */}
            <img src={project.image} alt={project.title} className={styles.projectImage} />
            <h3 className={styles.projectTitle}>{project.title}</h3>
            <p className={styles.projectDescription}>{project.description}</p>
            <div className={styles.techTags}>
              {project.technologies.map((tech) => (
                <span key={tech} className={styles.techTag}>{tech}</span>
              ))}
            </div>
            <div className={styles.projectButtons}>
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className={styles.primaryButton}>
                Launched Website
              </a>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className={styles.secondaryButton}>
                GitHub Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
