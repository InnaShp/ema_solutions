import React, { useState } from "react";
import "./Navbar.css";
import logo from "./images/logo.png";
import NavDropdown from 'react-bootstrap/NavDropdown';
import SideBar from "./SideBar";



export default function Navbar() {
  const [sideBar, setSidebar] = useState(false);

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
        <div className="vl"/>
        <a href="/#electricity">Електроенергія</a>
        <div className="vl"/>
        <a href="/#gas">Газ</a>
        <div className="vl"/>
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
      <div className="sideBarButton">
        {sideBar &&
          <SideBar/>
        }
        <button onClick={()=> setSidebar(!sideBar)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
          </svg>
        </button>
      </div>
    </nav>

  );
}
