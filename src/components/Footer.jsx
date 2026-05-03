import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Copyright and tech stack info */}
        <p>&copy; 2026 Artistic Odyssey Creative Hub.</p>
        {/* Some helpful links */}
        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#privacy">Privacy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
