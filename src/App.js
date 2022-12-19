import React from "react";
import './App.css';
import Navbar from "./Navbar"
import ToConsumer from "./pages/ToConsumer"
import Home from "./pages/Home"
import About from "./pages/About"
import { Route, Routes } from "react-router-dom"
import Footer from "./pages/homepage-components/Footer";

const App = () => {

  return (
    <div className="App">
      <div className="navBar">
        <Navbar />
      </div>
    
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/toConsumer" element={<ToConsumer />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
    </div>
  )
}

export default App;