
import React from 'react';
import styles from '@/App.module.css'; 


import { FaEnvelope, FaWhatsapp, FaGithub } from 'react-icons/fa'; 



const ContactSection: React.FC = () => {
  return (
    <section id="contact" className={styles.contactSection}>
      <h2 className={styles.sectionHeading}>Get In Touch</h2>
      <p className={styles.subheading}>
        Have a project in mind, a question, or just want to say hello? Feel free to reach out!
      </p>
      <div className={styles.contactLinksContainer}>
        {/* Email Link */}
        <a href={`mailto:alayandeesther469@gmail.com`} className={styles.contactLinkCard} target="_blank" rel="noopener noreferrer">
          <FaEnvelope className={styles.contactIcon} />

        </a>

        {/* WhatsApp Link */}
        <a href={`https://wa.me/7015297437`} className={styles.contactLinkCard} target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className={styles.contactIcon} />
         
        </a>

        {/* NEW: GitHub Profile Link */}
        <a href='https://github.com/Enny-f12' className={styles.contactLinkCard} target="_blank" rel="noopener noreferrer">
          <FaGithub className={styles.contactIcon} />
         
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
