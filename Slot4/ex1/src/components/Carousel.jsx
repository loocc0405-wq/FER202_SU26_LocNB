import React, { useState, useEffect } from 'react';
import './Carousel.css';
import banners from '../Data/bannerData';

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000); // Auto slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const banner = banners[currentSlide];

  return (
    <div className="carousel-container">
      <div className="carousel">
        <img src={banner.imageURL} alt={banner.title} className="carousel-image" />
        <div className="carousel-content">
          <h2>{banner.title}</h2>
          <p>{banner.caption}</p>
        </div>

        {/* Navigation Buttons */}
        <button className="carousel-btn prev" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="carousel-btn next" onClick={nextSlide}>
          &#10095;
        </button>

        {/* Dots Navigation */}
        <div className="carousel-dots">
          {banners.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
