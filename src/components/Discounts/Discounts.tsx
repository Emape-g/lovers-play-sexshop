import React from 'react';
import './Discounts.css'; // <-- Importa su propio CSS
import { Link } from 'react-router-dom';

const discountProducts = [
  { id: 1, name: 'Juego de Rol "Maestro"', price: '$2.800', oldPrice: '$3.500', image: 'https://via.placeholder.com/250x250/880D1E/FFFFFF?text=Desc+1' },
  { id: 2, name: 'Bolas Chinas "Intensidad"', price: '$1.900', oldPrice: '$2.400', image: 'https://via.placeholder.com/250x250/F49CBB/FFFFFF?text=Desc+2' },
  { id: 3, name: 'Poción de Amor "Encanto"', price: '$1.100', oldPrice: '$1.500', image: 'https://via.placeholder.com/250x250/DD2D4A/FFFFFF?text=Desc+3' },
  { id: 4, name: 'Látigo Cuero "Dominación"', price: '$3.500', oldPrice: '$4.200', image: 'https://via.placeholder.com/250x250/F26A8D/FFFFFF?text=Desc+4' },
];

const Discounts = () => {
  return (
    <section className="discounts-section"> {/* Misma clase de sección */}
      <h2 className="section-title">💸 ¡Descuentos Imperdibles! 🏷️</h2>
      <div className="products-grid">
        {discountProducts.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="product-price">
              <span className="old-price">{product.oldPrice}</span>{' '}
              {product.price}
            </p>
            <button className="add-to-cart-btn">Añadir al Carrito</button>
          </div>
        ))}
      </div>
      <Link to="/descuentos" className="view-more-btn">
        Ver todos los Descuentos
      </Link>
    </section>
  );
};

export default Discounts;