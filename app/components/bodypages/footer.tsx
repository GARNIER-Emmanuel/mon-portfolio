export default function Footer() {
  return (
    <footer className="portfolio-footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} EMmanuel GARNIER BOIDUN </p>
        <div className="footer-links">
          <a href="#about">À propos de moi</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}
