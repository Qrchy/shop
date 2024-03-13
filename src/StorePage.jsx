import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Categories from './Categories';
import Products from './Products';

function StorePage() {
  return (
    <div className="StorePage">
      <Navbar />
      <Categories />
      <Products />
    </div>
  );
}

export default StorePage;
