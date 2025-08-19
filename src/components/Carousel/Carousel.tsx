import { useState, useEffect, useCallback } from 'react';
import './Carousel.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom'; 

import slider1 from '../../assets/slider-m.1.webp';
import slider2 from '../../assets/slider-m.2.webp';
import slider3 from '../../assets/slider-m.3.webp';
import slider4 from '../../assets/slider-m.4.webp';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselItems = [
    {
      image: slider1,
      title: "Explora la pasión",
      text: "Envíos a Mendoza y a todo el país.",
      link: "/catalogo" 
    },
    {
      image: slider2,
      title: "Redescubre tu placer",
      text: "Envíos a Mendoza y a todo el país.",
      link: "/catalogo"
    },
    {
      image: slider3,
      title: "Disfruta cada momento",
      text: "Envíos a Mendoza y a todo el país.",
      link: "/catalogo"
    },
    {
      image: slider4,
      title: "Crea experiencias inolvidables",
      text: "Envíos a Mendoza y a todo el país.",
      link: "/catalogo"
    }
  ];


  const nextSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide === carouselItems.length - 1 ? 0 : prevSlide + 1));
  }, [carouselItems.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? carouselItems.length - 1 : prevSlide - 1));
  }, [carouselItems.length]);

  
  const goToSlide = (index: number) => { 
    setCurrentSlide(index);
  };

  
  useEffect(() => {
    const autoPlay = setInterval(nextSlide, 5000); 
    return () => clearInterval(autoPlay);
  }, [nextSlide]); 

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {carouselItems.map((item, index) => (
          <div key={index} className="carousel-slide">
            {}
            <div className="carousel-image-container">
              <img src={item.image} alt={item.title} />
            </div>
            {}
            <div className="carousel-text-content">
              <h2>{item.title}</h2>
              <p>{item.text}</p>
              {}
              <Link to={item.link} className="carousel-button">
                Ver catálogo
              </Link>
            </div>
          </div>
        ))}
      </div>

      {}
      <button className="carousel-arrow left-arrow" onClick={prevSlide}>
        <FaArrowLeft />
      </button>
      <button className="carousel-arrow right-arrow" onClick={nextSlide}>
        <FaArrowRight />
      </button>

      {}
      <div className="carousel-dots">
        {carouselItems.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentSlide === index ? 'active' : ''}`}
            onClick={() => goToSlide(index)} 
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;