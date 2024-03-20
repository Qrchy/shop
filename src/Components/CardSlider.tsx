import Card from './Card';

const CardSlider = () => {
  return (
    <div className='CardSlider'>
      
        <div id="Slider">
            
        </div>
        <button className="prev-btn" onClick={() => {
        const slider = document.getElementById("Slider");
        if (slider) {
            slider.style.animation = "slideLeft 0.5s";
            slider.style.transform += "translateX(90px)";
        }
        }}>&lt;</button>
        <button className="next-btn" onClick={() => {
        const slider = document.getElementById("Slider");
        if (slider) {
            slider.style.animation = "slideRight 0.5s";
            slider.style.transform += "translateX(-90px)";
        }
        }}>&gt;</button>
    </div>
  );
};

export default CardSlider;
