'use client';
import React, { useState } from 'react';
import styles from '@/App.module.css';
import { FaBars, FaTimes } from 'react-icons/fa';


interface NavbarProps {
  // Define any props if needed, e.g., userName: string;
}

const Navbar: React.FC<NavbarProps> = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarInner}>
        <a href="#home" className={styles.brandLogo}>Portfolio</a>
        
        {/* Desktop Navigation */}
        <div className={styles.desktopNav}>
          <a href="#home" className={styles.navLink}>Home</a>
          <a href="#about" className={styles.navLink}>About</a>
          <a href="#stack" className={styles.navLink}>Stack</a>
          <a href="#portfolio" className={styles.navLink}>Portfolio</a>
          <a href="#resume" className={styles.navLink}>Experience</a>
          <a href="#contact" className={styles.navLink}>Contact</a>
        </div>
        
        <button className={styles.mobileMenuButton} onClick={toggleMobileMenu}>
      {isMobileMenuOpen ? (
    <FaTimes /> 
      ) : (
    <FaBars />
     )}
    </button>
      </div>

      
      {isMobileMenuOpen && (
        <div className={styles.mobileNavOverlay}>
          <div className={styles.mobileNavLinks}>
            <a href="#home" className={styles.navLinkMobile} onClick={toggleMobileMenu}>Home</a>
            <a href="#about" className={styles.navLinkMobile} onClick={toggleMobileMenu}>About</a>
            <a href="#stack" className={styles.navLinkMobile} onClick={toggleMobileMenu}>Stack</a>
            <a href="#portfolio" className={styles.navLinkMobile} onClick={toggleMobileMenu}>Portfolio</a>
            <a href="#resume" className={styles.navLinkMobile} onClick={toggleMobileMenu}>Experience</a>
            <a href="#contact" className={styles.navLinkMobile} onClick={toggleMobileMenu}>Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;