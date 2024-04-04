"use client";
import { useRef, useState } from "react";
import "./header.css";

export default function Header() {
  const [menu, setMenu] = useState('list')

  const menuState = () => {
    if (menu === 'list') {
      setMenu('list active')
    } else {
      setMenu('list')
    }
  }

  return (
    <nav id="navbar">
      <h1>
        <span>E</span>nuch
      </h1>
      <div className="mobile-menu" onClick={menuState}>
        <div className="line-1"></div>
        <div className="line-2"></div>
        <div className="line-3"></div>
      </div>
      <ul className={menu}>
        <a href="#home"><li>Home</li></a>
        <a href="#about"><li>About me</li></a>
        <a href="#experiences"><li>Experiences</li></a>
        <a href="#projects"><li>Projects</li></a>
        <a href="#skills"><li>Skills</li></a>
      </ul>
    </nav>
  );
}
