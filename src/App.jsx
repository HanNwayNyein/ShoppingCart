// src/App.jsx
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import ProductList from './components/ProductList';
import CartPage from './components/CartPage';

function App() {
  return (
    <div className="App">
      <div className="landing-page">
        <h1>Welcome to Paradise Nursery</h1>
        <p>Your go-to place for houseplants</p>
        <button>Get Started</button>
      </div>
    </div>
  );
}
export default App;
