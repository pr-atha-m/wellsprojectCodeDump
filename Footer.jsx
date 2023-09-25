import React from 'react';
import './Footer.css'; // Import your CSS file for styling

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="your-logo.png" alt="Bank Logo" />
        </div>
        <div className="footer-links">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="footer-social">
          <ul>
            <li><a href="#"><i className="fab fa-facebook"></i></a></li>
            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
            <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;




/* Footer container */
.footer {
  background-color: #333; /* Background color */
  color: #fff; /* Text color */
  padding: 20px 0; /* Adjust padding as needed */
}

/* Footer content container */
.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Footer logo */
.footer-logo img {
  max-width: 100px; /* Adjust logo size */
}

/* Footer links */
.footer-links ul {
  list-style: none;
  padding: 0;
  display: flex;
}

.footer-links li {
  margin-right: 20px; /* Adjust spacing between links */
}

.footer-links a {
  text-decoration: none;
  color: #fff;
  font-weight: bold;
}

/* Footer social icons */
.footer-social ul {
  list-style: none;
  padding: 0;
  display: flex;
}

.footer-social li {
  margin-right: 10px; /* Adjust spacing between icons */
}

.footer-social a {
  text-decoration: none;
  color: #fff;
  font-size: 20px; /* Adjust icon size */
}

