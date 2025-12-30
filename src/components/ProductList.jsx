// src/components/ProductList.js
import React from 'react';
import productsData from './productsData'; // Import your product data

function ProductList() {
  return (
    <div className="product-list">
      <h2>Our Plants Collection</h2>
      <div className="products-container">
        {productsData.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.img} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
