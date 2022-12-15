import React from "react";
import "./Navbar.css";
import logo from "./images/logo.png";
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Navbar() {
  return (
    <nav className="nav">
      <div>
        <a href="/#hero">
          <img src={logo} alt="Logo" className="logo" />
          <span>ЕМА СОЛЮШЕНЗ</span>
        </a>
      </div>
      <div className="menu">
        <a className="main" href="/#hero">Головна</a>
        <div className="vl"></div>
        <a href="/#electricity">Електроенергія</a>
        <div className="vl"></div>
        <a href="/#gas">Газ</a>
        <div className="vl"></div>
        <div className="dropdown-link">
          <NavDropdown title="Споживачу" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">
              <div className="dropdown-item">
                <a href="/#electricity-declaration">Тарифи електроенергія</a>
              </div>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.2">
              <div className="dropdown-item">
                <a href="/#gas-declaration" >Тарифи природній газ</a>
              </div>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              <div className="dropdown-item">
                <a href="/ToConsumer#consumer">Інформація споживачу</a>
              </div>
            </NavDropdown.Item>
          </NavDropdown>
        </div>
        <div className="vl"></div>
        <a href="/#contact">Контакти</a>
        <div className="vl"></div>
        <div className="dropdown-link">
          <NavDropdown title="Еще" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">
              <div className="dropdown-item">
                <a href="/about/#feedback">Про нас</a>
              </div>
            </NavDropdown.Item>
          </NavDropdown>
        </div>
      </div>
    </nav>

  )
}
