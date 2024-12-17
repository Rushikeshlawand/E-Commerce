// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home'; // Default import
import MenClothes from './pages/MenClothes'; // Default import
import WomenClothes from './pages/WomenClothes'; // Default import
import Electronics from './pages/Electronics'; // Default import
import Shoes from './pages/Shoes'; // Default import
import KidsWear from './pages/KidsWear'; // Default import
import Toys from './pages/Toys'; // Default import
import Contact from './pages/Contact'; 

import BuyProductForm from './components/BuyProductForm'; // Default import
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
  
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/men-clothes" element={<MenClothes />} />
          <Route path="/women-clothes" element={<WomenClothes />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/shoes" element={<Shoes />} />
          <Route path="/kids-wear" element={<KidsWear />} />
          <Route path="/toys" element={<Toys />} />
          <Route path="/contact" element={<Contact />} />
         
          <Route path="/buy" element={<BuyProductForm />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
