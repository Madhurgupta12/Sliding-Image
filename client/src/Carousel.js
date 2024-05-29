import React, { useState, useEffect } from 'react';
import './style.css'; // Import your CSS file for styling
import i1 from "./Image/4503642.jpg"
import i2 from "./IMG-20231223-WA0017.jpg"
import i3 from "./leftKNU.png"
import i4 from "./IMG-20231223-WA0025.jpg"
import i5 from "./coolie2.png"
const images = [i1,i3,i4,i5]; // Paths to your images

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
    <div className="h-100 w-100 flex justify-center items-center">
      {images.map((image, index) => (
        <div
          key={index}
          className={index === currentIndex ? 'slide active' : 'slide'}
        >
          <img className="h-100 w-50 object-contain" src={image} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default Carousel;
