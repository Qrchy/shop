import logo from './logo.svg';
import './App.css';
import Card from './Card';

function CardSlider() {
  return (

    <div className='CardSlider'>
        
        <div id="Slider">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
        <button class="prev-btn" onClick={() => {
        document.getElementById("Slider").style.animation += "slideLeft 0.5s";
        document.getElementById("Slider").style.transform += "translateX(90px)";
        }}>&lt;</button>
        <button class="next-btn" onClick={() => {
        document.getElementById("Slider").style.animation += "slideRight 0.5s";
        document.getElementById("Slider").style.transform += "translateX(-90px)";
        }}>&gt;</button>
    </div>


  );
}

export default CardSlider;