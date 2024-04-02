import "./header.css";

export default function Header() {
  return (
    <nav id="navbar">
      <div className="logo">
        <p><span className="initial-logo">E</span>nuch</p>
      </div>
      <div className="list">
        <ul className="list-menu">
          <li className="list-item">
            <a href="#home">Home</a>
          </li>
          <li className="list-item">
            <a href="#about">About me</a>
          </li>
          <li className="list-item">
            <a href="#experience">Experience</a>
          </li>
          <li className="list-item">
            <a href="#projects">Projects</a>
          </li>
          <li className="list-item">
            <a href="#skilss">Skills</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
