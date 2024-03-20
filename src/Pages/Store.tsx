import React from 'react';
import Navbar from '../Components/Navbar';
import Categories from '../Components/Categories';
import Products from '../Components/Products';


const Store = () => {
  return (
    <div className='Store'>
        <Navbar />
        <Categories />
        <Products />
    </div>
  );
};

export default Store;
