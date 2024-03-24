import React from 'react';
import Navbar from '../Components/Navbar';

const Cart = () => {
  return (
    <div className='Cart'>
      <Navbar />
      
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
        <h1>Your Shopping Cart</h1>
        <p>Your cart is currently empty.</p>
      </div>
    </div>
  );
};

export default Cart;
