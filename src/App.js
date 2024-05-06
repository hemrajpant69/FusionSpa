import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from './components/Contact';
function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/Contact" element={<Contact/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;