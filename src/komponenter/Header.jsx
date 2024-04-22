import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../assets/lille_logo.svg";

function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };
  

  return (
    <div className="header">
      <NavLink to="/"> <img id="logo" src={logo} alt="logo" /></NavLink>
      
          <div className={`burger-menu ${isOpen ? 'active' : ''}`}>
              <div id="burgermenu_knap" onClick={toggleMenu}>
                MENU
              </div>
              
              <nav className={`burger-menu-nav ${isOpen ? 'active' : ''}`}>
                <div className="kryds" onClick={toggleMenu}>
                  LUK MENU
                </div>
                <br />
                <NavLink to="/error" onClick={closeMenu}>Cases</NavLink>
                <br />
                <NavLink to="/" onClick={() => { closeMenu(); document.getElementById('footer').scrollIntoView({ behavior: 'smooth' }); }}>Kontakt</NavLink>
                <br />
                <NavLink to="/omos" onClick={closeMenu}>Om os</NavLink>
                <br />
                <NavLink to="/webinar" onClick={closeMenu}>Book Webinar</NavLink>
              </nav>
          </div>
    </div>
  );
}

export default BurgerMenu;
