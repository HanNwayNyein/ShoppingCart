import React from 'react';
import { useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../redux/cartSlice';

const CartItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increaseQuantity(product));
  };

  const handleDecrease = () => {
    dispatch(decreaseQuantity(product));
  };

  const handleRemove = () => {
    dispatch(removeFromCart(product));
  };

  return (
    <div>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price} USD</p>
      <p>Quantity: {product.quantity}</p>
      <button onClick={handleIncrease}>+</button>
      <button onClick={handleDecrease}>-</button>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
};

export default CartItem;
