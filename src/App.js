import logo from './logo.svg';
import './App.css';
import CardSlider from './CardSlider';
import Navbar from './Navbar';

function App() {
  return (
    <div className="HomePage">
      <Navbar />
      <CardSlider />
      <CardSlider />
    </div>
  );
}

export default App;
