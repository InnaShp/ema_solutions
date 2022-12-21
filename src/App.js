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
      <Navbar />
      
      <Routes>
          <Route path="/toConsumer" element={<ToConsumer />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
      </Routes>
      
      <Footer />
    </div>
  )
}

export default App;