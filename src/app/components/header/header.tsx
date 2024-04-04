"use client";
import { useRef, useState } from "react";
import "./header.css";

export default function Header() {
  const [menu, setMenu] = useState("list");

  const menuState = () => {
    if (menu === "list") {
      setMenu("list active");
    } else {
      setMenu("list");
    }
  };

  return (
    <header id="header">
      <h1 className="logo">
        <span>E</span>nuch
      </h1>
      <div className="mobile-menu" onClick={menuState}>
        <div className="line-1"></div>
        <div className="line-2"></div>
        <div className="line-3"></div>
      </div>
      <nav className={menu} onClick={menuState}>
        <a href="#home">
          Home
        </a>
        <a href="#about">
          About me
        </a>
        <a href="#experiences">
          Experiences
        </a>
        <a href="#projects">
          Projects
        </a>
        <a href="#skills">
          Skills
        </a>
      </nav>
    </header>
  );
}
