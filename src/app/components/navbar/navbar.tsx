"use client";
import { useRef, useState } from "react";
import "./navbar.css";

export default function Navbar() {
  const [menu, setMenu] = useState("menu");

  const toggleMenu = () => {
    if (menu === "menu") setMenu("menu active");
    else setMenu("menu");
  };

  return (
    <header id="navbar">
      <section className="container">
        <section className="logo-container">
          <h1>
            <a href="#home" className="logo">
              <span className="text-color">E</span>nuch
            </a>
          </h1>
        </section>
        <nav className={menu} onClick={toggleMenu}>
          <a className="item-menu" href="#home">
            Home
          </a>
          <a className="item-menu" href="#about">
            About me
          </a>
          <a className="item-menu" href="#experiences">
            Experiences
          </a>
          <a className="item-menu" href="#education">
            Education
          </a>
          <a className="item-menu" href="#certificates">
            Certificates
          </a>
          <a className="item-menu" href="#projects">
            Projects
          </a>
        </nav>
        <section className="mobile-menu" onClick={toggleMenu}>
          <section></section>
          <section></section>
          <section></section>
        </section>
      </section>
    </header>
  );
}
