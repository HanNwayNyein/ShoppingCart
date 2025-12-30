import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
  const itemsCount = useSelector(state =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  return (
    <header className="navbar">
      <Link to="/">Home</Link>
      <Link to="/products">Plants</Link>
      <Link to="/cart">Cart ({itemsCount})</Link>
    </header>
  );
}
