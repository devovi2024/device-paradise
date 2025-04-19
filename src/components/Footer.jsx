import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-wrapper" style={styles.footer}>
      <div className="container" style={styles.container}>
        {/* Logo & Brand */}
        <div style={styles.brand}>
          <h3 style={styles.brandText}>Gadget Heaven</h3>
          <p style={styles.tagline}>Your ultimate tech destination.</p>
        </div>

        {/* Footer Links */}
        <div style={styles.linksWrapper}>
          <div>
            <h4 style={styles.heading}>Quick Links</h4>
            <ul style={styles.linkList}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/dashboard">Dashboard</Link></li>
              <li><Link to="/stats">Stats</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={styles.heading}>Categories</h4>
            <ul style={styles.linkList}>
              <li><Link to="/category/phones">Phones</Link></li>
              <li><Link to="/category/laptops">Laptops</Link></li>
              <li><Link to="/category/accessories">Accessories</Link></li>
              <li><Link to="/category/smart-home">Smart Home</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div style={styles.bottomBar}>
        <p>© {new Date().getFullYear()} Gadget Heaven. All rights reserved.</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#1c1c1e",
    color: "#eee",
    paddingTop: "2rem",
    marginTop: "3rem",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: "2rem",
    padding: "0 2rem",
  },
  brand: {
    maxWidth: "300px",
  },
  logo: {
    width: "50px",
    marginBottom: "0.5rem",
  },
  brandText: {
    fontSize: "1.5rem",
    marginBottom: "0.25rem",
  },
  tagline: {
    fontSize: "0.9rem",
    color: "#aaa",
  },
  linksWrapper: {
    display: "flex",
    gap: "3rem",
  },
  heading: {
    fontSize: "1.1rem",
    marginBottom: "0.75rem",
  },
  linkList: {
    listStyle: "none",
    padding: 0,
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  },
  bottomBar: {
    textAlign: "center",
    marginTop: "2rem",
    padding: "1rem 0",
    borderTop: "1px solid #444",
    fontSize: "0.85rem",
    color: "#aaa",
  },
};

export default Footer;
