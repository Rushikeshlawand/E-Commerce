// src/components/Footer.js
import React from 'react';
import '../styles/Footer.css';  // CSS for Footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info */}
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            We are a leading e-commerce store providing top quality products across multiple categories. 
            Shop with us for an amazing experience!
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/men">Men's Clothing</a></li>
            <li><a href="/women">Women's Clothing</a></li>
            <li><a href="/electronics">Electronics</a></li>
            <li><a href="/toys">Toys</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <ul className="contact-info">
            <li>Email: support@ecommerce.com</li>
            <li>Phone: +1 123 456 7890</li>
            <li>Location: 123 E-commerce St., Shopping City, USA</li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 E-Commerce Store. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
