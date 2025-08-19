import { useState, useEffect, useCallback } from 'react'; // Eliminada la importación 'type SetStateAction'
import './Carousel.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Asegúrate de tener react-router-dom instalado y configurado

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
      link: "/catalogo" // Asegúrate que esta ruta sea válida en tu app y esté definida en tu Router
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

  // nextSlide y prevSlide se envuelven en useCallback para optimización
  // y para evitar advertencias de ESLint sobre dependencias en useEffect.
  // carouselItems.length es una dependencia ya que estas funciones la utilizan.
  const nextSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide === carouselItems.length - 1 ? 0 : prevSlide + 1));
  }, [carouselItems.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? carouselItems.length - 1 : prevSlide - 1));
  }, [carouselItems.length]);

  // goToSlide fue corregido para no usar desestructuración ni anotaciones de tipo TypeScript.
  const goToSlide = (index) => { // Eliminada la anotación ': SetStateAction<number>'
    setCurrentSlide(index);
  };

  // Autoplay functionality: el efecto se re-ejecutará solo si 'nextSlide' cambia.
  // Al usar useCallback en nextSlide, esta función solo se re-creará si sus propias
  // dependencias (carouselItems.length) cambian, lo cual es eficiente.
  useEffect(() => {
    const autoPlay = setInterval(nextSlide, 5000); // Cambia de slide cada 5 segundos
    return () => clearInterval(autoPlay); // Limpia el intervalo al desmontar el componente
  }, [nextSlide]); // 'nextSlide' es una dependencia del efecto.

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {carouselItems.map((item, index) => (
          <div key={index} className="carousel-slide">
            {/* Contenedor de la imagen que irá de fondo y se ajusta con object-fit: cover */}
            <div className="carousel-image-container">
              <img src={item.image} alt={item.title} />
            </div>
            {/* Contenido de texto que se superpone a la imagen */}
            <div className="carousel-text-content">
              <h2>{item.title}</h2>
              <p>{item.text}</p>
              {/* Usa el componente <Link> de React Router DOM para navegación interna.
                  Asegúrate de que 'item.link' apunte a una ruta válida configurada en tu Router. */}
              <Link to={item.link} className="carousel-button">
                Ver catálogo
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Botones de navegación con iconos de react-icons */}
      <button className="carousel-arrow left-arrow" onClick={prevSlide}>
        <FaArrowLeft />
      </button>
      <button className="carousel-arrow right-arrow" onClick={nextSlide}>
        <FaArrowRight />
      </button>

      {/* Puntos de navegación (dots) */}
      <div className="carousel-dots">
        {carouselItems.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentSlide === index ? 'active' : ''}`}
            onClick={() => goToSlide(index)} // Al hacer clic, cambia al slide correspondiente
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;