// Slider.js
import React, { useState, useEffect } from 'react';
import './Slider.css';

function Slider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const showSlide = (index) => {
    if (index >= images.length) {
      setCurrentIndex(0);
    } else if (index < 0) {
      setCurrentIndex(images.length - 1);
    } else {
      setCurrentIndex(index);
    }
  };

  const nextSlide = () => showSlide(currentIndex + 1);
  const prevSlide = () => showSlide(currentIndex - 1);

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="slider">
      <div
        className="slides"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: 'transform 0.5s ease',
        }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={process.env.PUBLIC_URL + src}
            alt={`Slide ${index + 1}`}
          />
        ))}
      </div>
      <button className='SliderButton' onClick={prevSlide}>❮</button>
      <button className='SliderButton' onClick={nextSlide}>❯</button>

      {/* Dot navigation */}
      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? 'active' : ''}`}
            onClick={() => showSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Slider;
