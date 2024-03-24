//import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './component/Homepage'; // Assuming Homepage component file location
//import ProductPage from './component/ProductPage'; // Import other page components if needed
//import LoginPage from './component/LoginPage';
import Productpage from './component/Productpage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="/products" element={<Productpage /> } />
      </Routes>
    </BrowserRouter>
    

  );
};


export default App;
