// src/App.jsx
import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";
import CartPage from "./components/CartPage";

function App() {
  // State to manage whether the product list is shown
  const [showProductList, setShowProductList] = useState(false);

  // Function to handle the click event for the "Get Started" button
  const handleGetStartedClick = () => {
    setShowProductList(true); // This will show the product list when clicked
  };

  return (
    <div className="App">
      <div className="background-image">
        <div className="landing-page">
          <h1>Welcome to Paradise Nursery</h1>
          <p>Your go-to place for houseplants</p>
          <button onClick={handleGetStartedClick}>Get Started</button>
        </div>
      </div>

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<AboutUs />} />
          
          {/* Conditionally render the ProductList component based on state */}
          {showProductList && <Route path="/products" element={<ProductList />} />}
          
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
