import React, { useRef } from "react";
import './App.css';

import Navbar from "./Navbar"
import ToConsumer from "./pages/ToConsumer"
import Home from "./pages/Home"
import About from "./pages/About"
import { Route, Routes } from "react-router-dom"
import Footer from "./pages/homepage-components/Footer";

const App = () => {
  const feedbackRef = useRef(null);
  return (
    <div className="App">
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home ref={feedbackRef} />} />
          <Route path="/toConsumer" element={<ToConsumer />} />
          <Route path="/about" element={<About feedbackRef={feedbackRef} />} />
        </Routes>
        <Footer />
      </div>
    </div>
  )
}

export default App;