import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='Navbar'>
        <Link to="/" className='link'>Home</Link>
        <Link to="/store" className='link'>Store</Link>
        <Link to="/cart" className='link'>Cart</Link>
    </div>
  );
}

export default Navbar;
