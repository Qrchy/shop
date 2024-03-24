import React from 'react';
import Navbar from '../Components/Navbar';
import Categories from '../Components/Categories';
import Products from '../Components/Products';
import { useState, useEffect } from 'react';
import Card from '../Components/Card';
import Slider from '@mui/material/Slider'; // Added import statement for Slider component

const API_URL = "https://api.escuelajs.co/api/v1/products";

const product = {
  "id": 44,
  "title": "Classic Blue Suede Casual Shoes",
  "price": 39,
  "description": "Step into comfort with our Classic Blue Suede Casual Shoes, perfect for everyday wear. These shoes feature a stylish blue suede upper, durable rubber soles for superior traction, and classic lace-up fronts for a snug fit. The sleek design pairs well with both jeans and chinos, making them a versatile addition to any wardrobe.",
  "images": [
    "https://i.imgur.com/sC0ztOB.jpeg",
    "https://i.imgur.com/Jf9DL9R.jpeg",
    "https://i.imgur.com/R1IN95T.jpeg"
  ],
  "creationAt": "2024-03-17T04:41:46.000Z",
  "updatedAt": "2024-03-17T04:41:46.000Z",
  "category": {
    "id": 4,
    "name": "Shoes",
    "image": "https://i.imgur.com/qNOjJje.jpeg",
    "creationAt": "2024-03-17T04:41:46.000Z",
    "updatedAt": "2024-03-17T04:41:46.000Z"
  }
}
let x = 0, y = 30;
let price = 0;
const Store = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchProducts = async (title: string) => {
    const response = await fetch(`${API_URL}?title=${title}`);
    const data = await response.json()
    .then(data => setProducts(data.slice(x, y)));
  }

  useEffect(() => {
    searchProducts('');
  }, []);

  return (
      <div className='Store'>
        <Navbar />
        <div className='Categories'>
          <h2>Categories</h2>
          <hr />
          <h3>All</h3>
          <h3>Clothes</h3>
          <h3>Furniture</h3>
          <h3>Shoes</h3>
          <h3>Miscellaneous</h3>
          <hr />
          <h4>Search Product With Name <span>*</span></h4>
          <input type="text" placeholder='Type a product' value={searchTerm} onChange={(e) => {setSearchTerm(e.target.value); searchProducts(searchTerm); x = 0; y=30}} />
          <h4>Price Range</h4>
          {/* <Slider
            getAriaLabel={() => 'Minimum distance'}
            value={price}
            onChange={() => {searchProducts(searchTerm); x = 0; y=30}}
            valueLabelDisplay="auto"
            getAriaValueText={(value) => `${value}`}
            disableSwap
          /> */}
        </div>
        
        {products?.length > 0 ? (
        <div className='Products'>
          <div>
            {products.map((product) => (
              <Card product={product} />
            ))}
          </div>
          
          <div style={{width: '100%', float: 'right'}}>
            <button onClick={() => {if (x != 0) {x = x - 30; y = y - 30; searchProducts(searchTerm); window.scrollTo(0,0)}}}>&lt;</button>
            <button onClick={() => {if (y == products?.length) {x = x + 30; y = y + 30; searchProducts(searchTerm); window.scrollTo(0,0)}}}>&gt;</button>
          </div>
        </div>
        ) : (
          <div className='noProducts'>No products found</div>
          
        )}
      </div>
  );
};

export default Store;
