import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from './components/Contact';
import About from './components/About';
import Service from './components/Service';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/Contact" element={<Contact />} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Service" element={<Service />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
