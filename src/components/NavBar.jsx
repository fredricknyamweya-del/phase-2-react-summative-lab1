import './NavBar.css';

function NavBar() {
  return (
    <header className="nav-bar">
      {/* Brand section - our logo and name */}
      <div className="nav-brand">
        <span className="nav-logo">✦</span>
        <div>
          <p>Artistic Odyssey Creative Hub</p>
          <small>Portfolio platform</small>
        </div>
      </div>
      {/* Navigation links */}
      <nav>
        <a href="#projects">Projects</a>
        <a href="#add-project">Add Project</a>
      </nav>
    </header>
  );
}

export default NavBar;
