import { useState, useEffect } from 'react';
import banners from '../Data/bannerData';
import './Carousel.css';

export default function MyCarousel() {
  const [index, setIndex] = useState(0);

  // Tự động chuyển slide mỗi 5 giây
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + banners.length) % banners.length);
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        <img 
          src={banners[index].imageURL} 
          alt={banners[index].title} 
          className="carousel-image"
        />
        <div className="carousel-content">
          <h2>{banners[index].title}</h2>
          <p>{banners[index].caption}</p>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button className="carousel-btn prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="carousel-btn next" onClick={nextSlide}>
        &#10095;
      </button>

      {/* Dots */}
      <div className="carousel-dots">
        {banners.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? 'active' : ''}`}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>
    </div>
  );
}
