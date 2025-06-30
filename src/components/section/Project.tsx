
import React from 'react';
import styles from '@/App.module.css'; 


const PortfolioSection: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'HyperChat (Real-time Messaging)',
      description: 'A real-time messaging application demonstrating user authentication, live chat, and notification integration. Showcases Firebase Firestore for real-time data and Firebase Authentication for user management.',
      technologies: ['React', 'Next.js', 'Firebase', 'Twilio/OneSignal'],
      image: 'https://placehold.co/600x350/2d3748/cbd5e0?text=HyperChat+Screenshot',
      liveLink: '#', // Replace with actual link
      githubLink: '#', // Replace with actual link
    },
    {
      id: 2,
      title: 'FettyExchange (Crypto exchange Landing page)',
      description: 'All-in-one digital marketplace for crypto and more!',
      technologies: ['Html', 'JavaScript', 'CSS', 'mediaqueries'],
      image: 'https://placehold.co/600x350/2d3748/cbd5e0?text=Hyperbuds+Screenshot',
      liveLink: 'https://fettyexchange.com/', // Replace with actual link
      githubLink: 'https://github.com/Enny-f12/fettywebsite.git', // Replace with actual link
    },
    {
      id: 3,
      title: 'Image Gallery (Pexels API)',
      description: 'An interactive image gallery consuming the Pexels API, featuring search, lazy loading, and responsive design. Demonstrates API integration and efficient data fetching.',
      technologies: ['React', 'API Integration', 'TypeScript', 'Frontend State Mgmt'],
      image: 'https://placehold.co/600x350/2d3748/cbd5e0?text=Image+Gallery+Screenshot',
      liveLink: 'https://gilded-dolphin-d76644.netlify.app/', // Replace with actual link
      githubLink: 'https://github.com/DesignguyLTD/imageapp-ennyf12.git', // Replace with actual link
    },
    {
      id: 4,
      title: 'Famtech (Agricultural Saas Platform)',
      description: 'A visually compelling and responsive e-commerce product detail page, focusing on clean UI/UX, interactive elements, and modern CSS techniques.',
      technologies: ['HTML', 'CSS', 'Responsive Design', 'JavaScript'],
      image: 'https://placehold.co/600x350/2d3748/cbd5e0?text=Product+Page+Screenshot',
      liveLink: 'https://famtech.netlify.app/', 
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
