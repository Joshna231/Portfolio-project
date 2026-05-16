import './Navbar.css';

export default function Navbar({ name }) {
  const links = ['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'];

  return (
    <nav className="navbar" id="navbar">
      <div className="container nav-inner">
        <a href="#hero" className="nav-brand">
          <span className="brand-bracket">&lt;</span>
          {name?.split(' ')[0] || 'Dev'}
          <span className="brand-bracket"> /&gt;</span>
        </a>
        <ul className="nav-links">
          {links.map(link => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className="nav-link">{link}</a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="btn btn-primary nav-cta">Hire Me</a>
      </div>
    </nav>
  );
}
