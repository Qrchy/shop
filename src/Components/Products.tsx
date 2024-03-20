import React, { useEffect, useState } from 'react';
import Card from './Card';

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

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => setProducts(data.slice(0, 30)))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className='Products'>
      {products.map((product, index) => (
        <Card key={index} product={product} />
      ))}
    </div>
  );
};

export default Products;