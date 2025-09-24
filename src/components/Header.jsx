import React, { useState } from "react";
import Logo from "../img/Mídia (3).jfif"
import "../css/Header.css"

function Header() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive((prev) => !prev);
  };

  return (
    <div>
      <header className="header-nv">
        <img src={Logo} alt="Logo" className="logo" />
        <button className="menu" onClick={toggleMenu}>☰</button>
        <nav className={`nav-header${menuActive ? " active" : ""}`}>
          <ul>
            <li>
              <a href="#">Início</a>
            </li>
            <li>
              <a href="#sobre-mim">Sobre Mim</a>
            </li>
            <li>
              <a href="#galeria">Galeria</a>
            </li>
            <li>
              <a href="#contatos">Contatos</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
