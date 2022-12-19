import React from "react";
import "./SideBar.css"
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function SideBar() {

  return (
    <div className="sideBar">
      <a className="main" href="/#hero">Головна</a>
      <a href="/#electricity">Електроенергія</a>
      <a href="/#gas">Газ</a>
    
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
        <a href="/#contact">Контакти</a>
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
  )
}