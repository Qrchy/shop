import React from 'react';
import Navbar from '../Components/Navbar';

const Cart = () => {
  return (
    <div className='Cart'>
        <Navbar />
      <h1>Your Shopping Cart</h1>
      <p>Your cart is currently empty.</p>
    </div>
  );
};

export default Cart;
