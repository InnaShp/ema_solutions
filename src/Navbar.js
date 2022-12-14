import React from "react";
import "./Navbar.css";
import logo from "./images/logo.png";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Navbar() {
  
  return (
    <nav className="nav">
      <div>
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
          <span>ЕМА СОЛЮШЕНЗ</span>
        </Link>
      </div>
      <div className="menu">
        <ul>
          <CustomLink to="/" className="main">Головна</CustomLink>
          <div className="vl"></div>
          <CustomLink to="/">Електроенергія</CustomLink>
          <div className="vl"></div>
          <CustomLink to="/">Газ</CustomLink>
          <div className="vl"></div>
          <div className="dropdown-link">
            <NavDropdown title="Споживачу" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                <div className="dropdown-item">
                  <CustomLink to="/">Тарифи електроенергія</CustomLink>
                </div>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">
                <div className="dropdown-item">
                  <CustomLink to="/" >Тарифи природній газ</CustomLink>
                </div>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                <div className="dropdown-item">
                  <CustomLink to="/toConsumer">Інформація споживачу</CustomLink>
                </div>
              </NavDropdown.Item>
            </NavDropdown>
          </div>
          
          <div className="vl"></div>
          
          <CustomLink to="/">Контакти</CustomLink>
          <div className="vl"></div>
          <div className="dropdown-link">
            <NavDropdown title="Еще" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                <div className="dropdown-item">
                  <CustomLink to="/about">Про нас</CustomLink>
                </div>
              </NavDropdown.Item>
            </NavDropdown>
          </div>
        </ul>
      </div>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}

