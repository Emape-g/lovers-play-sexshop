import React from 'react';
import './MostSearched.css'; // <-- Importa su propio CSS
import { Link } from 'react-router-dom';

const mostSearchedProducts = [
  { id: 1, name: 'Estimulante Clítoris "Delicia"', price: '$2.000', image: 'https://via.placeholder.com/250x250/F49CBB/FFFFFF?text=Mas+Buscado+1' },
  { id: 2, name: 'Anillo Vibrador "Juego Intenso"', price: '$1.800', image: 'https://via.placeholder.com/250x250/DD2D4A/FFFFFF?text=Mas+Buscado+2' },
  { id: 3, name: 'Cremas Aumentadoras "Goce"', price: '$2.500', image: 'https://via.placeholder.com/250x250/880D1E/FFFFFF?text=Mas+Buscado+3' },
  { id: 4, name: 'Lubricante Térmico "Fuego"', price: '$1.000', image: 'https://via.placeholder.com/250x250/F26A8D/FFFFFF?text=Mas+Buscado+4' },
];

const MostSearched = () => {
  return (
    <section className="most-searched-section"> {/* Misma clase de sección */}
      <h2 className="section-title">🔍 Los Más Buscados 📈</h2>
      <div className="products-grid">
        {mostSearchedProducts.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="product-price">{product.price}</p>
            <button className="add-to-cart-btn">Añadir al Carrito</button>
          </div>
        ))}
      </div>
      <Link to="/mas-buscados" className="view-more-btn">
        Ver todos los Más Buscados
      </Link>
    </section>
  );
};

export default MostSearched;