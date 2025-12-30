// src/components/CartItem.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../redux/cartSlice'; // Assuming you have these actions
import './CartItem.css';

function CartItem({ item }) {
  const dispatch = useDispatch();

  // Calculate the total price for the item (item price * quantity)
  const itemTotal = item.price * item.quantity;

  // Handle increase and decrease of item quantities
  const handleIncrease = () => {
    dispatch(increaseQuantity(item.id)); // Assuming you have an action for increasing quantity
  };

  const handleDecrease = () => {
    if (item.quantity > 1) {
      dispatch(decreaseQuantity(item.id)); // Assuming you have an action for decreasing quantity
    }
  };

  const handleRemove = () => {
    dispatch(removeFromCart(item.id)); // Assuming you have an action for removing item from cart
  };

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <div className="item-details">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <div className="quantity-controls">
          <button onClick={handleDecrease}>-</button>
          <span>{item.quantity}</span>
          <button onClick={handleIncrease}>+</button>
        </div>
        <div className="item-price">
          <p>Price: ${item.price}</p>
          <p>Total: ${itemTotal.toFixed(2)}</p>
        </div>
        <button className="remove-item" onClick={handleRemove}>Remove</button>
      </div>
    </div>
  );
}

// Calculate the total amount of the cart dynamically by summing up each item's total
export function calculateTotalAmount(cartItems) {
  return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
}

export default CartItem;
