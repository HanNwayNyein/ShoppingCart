// src/components/ProductList.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';  // Assuming you have a Redux slice for cart
import './ProductList.css';

// Sample data - typically this would come from an API or be stored in a separate data file
const plantCategories = [
  {
    category: 'Succulents',
    plants: [
      { id: 1, name: 'Aloe Vera', description: 'Aloe Vera plant', image: 'aloe.jpg' },
      { id: 2, name: 'Cactus', description: 'A hardy cactus plant', image: 'cactus.jpg' },
      { id: 3, name: 'Jade Plant', description: 'Jade plant', image: 'jade.jpg' },
      { id: 4, name: 'Snake Plant', description: 'Snake plant', image: 'snake.jpg' },
      { id: 5, name: 'Zebra Cactus', description: 'Zebra cactus', image: 'zebra_cactus.jpg' },
      { id: 6, name: 'Echeveria', description: 'Beautiful rosette succulent', image: 'echeveria.jpg' },
    ]
  },
  {
    category: 'Indoor Plants',
    plants: [
      { id: 7, name: 'Spider Plant', description: 'A popular indoor plant', image: 'spider.jpg' },
      { id: 8, name: 'Peace Lily', description: 'Beautiful indoor plant', image: 'lily.jpg' },
      { id: 9, name: 'Ficus', description: 'Ficus plant', image: 'ficus.jpg' },
      { id: 10, name: 'Pothos', description: 'Easy-to-care indoor plant', image: 'pothos.jpg' },
      { id: 11, name: 'Areca Palm', description: 'Stylish indoor palm', image: 'areca_palm.jpg' },
      { id: 12, name: 'Dracaena', description: 'Low maintenance indoor plant', image: 'dracaena.jpg' },
    ]
  }
  // Add other categories as needed
];

function ProductList() {
  const dispatch = useDispatch();

  // Handle adding item to the cart
  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));  // Dispatch addToCart action to Redux store
  };

  return (
    <div className="product-list">
      {plantCategories.map((category, index) => (
        <div key={index} className="category">
          <h2>{category.category}</h2>
          <div className="products">
            {category.plants.map((plant) => (
              <div key={plant.id} className="product-card">
                <img src={`../assets/${plant.image}`} alt={plant.name} />
                <h3>{plant.name}</h3>
                <p>{plant.description}</p>
                <button onClick={() => handleAddToCart(plant)}>Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
