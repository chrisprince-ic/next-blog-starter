import React from 'react'
import styles from './footer.module.css'

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Logo + Description */}
        <div className={styles.footerSection}>
                 <div className={styles.logo}>
        Chris<span>blog</span>
       </div>
          <p className={styles.footerText}>
            Innovative solutions for a better digital tomorrow.
          </p>
        </div>

        {/* Quick Links */}
        <div className={styles.footerSection}>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className={styles.footerSection}>
          <h3>Subscribe</h3>
          <p>Get the latest news and updates.</p>
          <form className={styles.newsletterForm}>
            <input type="email" placeholder="Your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>

        {/* Social Icons */}
        <div className={styles.footerSection}>
          <h3>Follow Us</h3>
          <div className={styles.socialIcons}>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} AevonTech. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
