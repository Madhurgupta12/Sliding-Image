import React, { useState, useEffect } from 'react';
import './style.css'; // Import your CSS file for styling

const images = ["./coolie2.png"]; // Paths to your images

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // Change slide every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow-container">
      {images.map((image, index) => (
        <div
          key={index}
          className={index === currentIndex ? 'slide active' : 'slide'}
        >
          <img src="./logo.svg" alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default Carousel;
