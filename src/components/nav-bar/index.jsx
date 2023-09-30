import React, { useState, useEffect } from "react";
import "./index.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleMenuToggle = () => {
    if (window.innerWidth < 900) {
      setIsMenuOpen(!isMenuOpen);
    } else {
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 250);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navBarClass = `nav-bar ${isMenuOpen ? "active" : ""} ${
    isScrolled ? "scrolled" : ""
  }`;

  return (
    <section id="header">
      <div
        className="header container"
        style={{ backgroundColor: isScrolled ? "grey" : "transparent" }}
      >
        <div className={navBarClass}>
          <div className="brand">
            <h1>SAHER HANIF</h1>
          </div>
          <div className="nav-list">
            <div className="hamburger" onClick={handleMenuToggle}>
              <div className="bar"></div>
            </div>
            <ul className={isMenuOpen ? "active" : ""}>
              <li>
                <a href="#home" onClick={handleMenuToggle}>
                Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={handleMenuToggle}>
                About
                </a>
              </li>
              <li>
                <a href="#skills" onClick={handleMenuToggle}>
                Skills
                </a>
              </li>
              <li>
                <a href="#projects" onClick={handleMenuToggle}>
                Projects
                </a>
              </li>
              <li>
                <a href="#contact" onClick={handleMenuToggle}>
                Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
