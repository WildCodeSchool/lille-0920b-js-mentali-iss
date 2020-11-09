import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="logo-iss">
        <a className="logo-mentali" href="#1">
          <img id="logoISS" src="/photos/logoISS.jpg" alt="logo" />
          <h2>MENTAL-ISS</h2>
        </a>
      </div>
      <ul className="navbar">
        <a className="navLink" href="#2">
          <li>ISS</li>
        </a>
        <a className="navLink" href="#2">
          <li>Galerie</li>
        </a>
        <a className="navLink" href="#2">
          <li>Rover on Mars</li>
        </a>
        <a className="navLink" href="#2">
          <li>Contact</li>
        </a>
      </ul>
    </header>
  );
};

export default Header;
