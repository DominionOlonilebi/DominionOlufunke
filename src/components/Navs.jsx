import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navs() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleNavbar = () => {
    setIsCollapsed(prevState => !prevState);
  };

  return (
    <nav className="navbar container pt-4 fixed-top">
      <div className="navbar-logo">
        <a href="#home" className="logo">
          <h4 className="text-white">Dm Tech</h4>
        </a>
      </div>

      {/* Toggle Button */}
      <button className="navbar-toggler" onClick={toggleNavbar} style={{color: "#e7008a"}}>
        {isCollapsed ? <FaTimes /> :  <FaBars />}
      </button>

      {/* Navbar Links */}
      <div className={`navbar-links ${isCollapsed ? "collapsed" : ""}`}>
        <ul>
          <li className="">
            <a href="/" className="linkss mx-3">
              Home
            </a>
          </li>
          <li className="">
            <a href="#about" className="linkss mx-3">
              About
            </a>
          </li>
          <li className="">
            <a href="#experience" className="linkss mx-3">
            Experience
            </a>
          </li>
          <li className="">
            <a
              href="#project"
              className="linkss mx-3"
            >
              Projects
            </a>
          </li>
          <li className="">
            <a
              href="#contact"
              className="linkss mx-3"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navs;