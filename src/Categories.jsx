import logo from './logo.svg';
import './App.css';
import './Categories.css'
import { Link } from 'react-router-dom';

function Categories() {
  return (
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
        <input type="text" placeholder='Type a product' />
        <h4>Price Range</h4>
    </div>
  );
}

export default Categories;
