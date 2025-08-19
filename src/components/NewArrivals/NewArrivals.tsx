import React from 'react';
import './NewArrivals.css'; // <-- Importa su propio CSS
import { Link } from 'react-router-dom';

const newProducts = [
  { id: 1, name: 'Seda para Masajes "Sensación"', price: '$1.500', image: 'https://via.placeholder.com/250x250/F26A8D/FFFFFF?text=Nueva+Seda' },
  { id: 2, name: 'Lencería Encaje "Pasión"', price: '$3.200', image: 'https://via.placeholder.com/250x250/DD2D4A/FFFFFF?text=Nueva+Lenceria' },
  { id: 3, name: 'Juguete Vibra "Placer Intenso"', price: '$4.800', image: 'https://via.placeholder.com/250x250/880D1E/FFFFFF?text=Nuevo+Vibrador' },
  { id: 4, name: 'Aceite Comestible "Dulce Placer"', price: '$900', image: 'https://via.placeholder.com/250x250/F49CBB/FFFFFF?text=Nuevo+Aceite' },
];

const NewArrivals = () => {
  return (
    <section className="new-arrivals-section">
      <h2 className="section-title">✨ Novedades en Mendoza ✨</h2>
      <div className="products-grid">
        {newProducts.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="product-price">{product.price}</p>
            <button className="add-to-cart-btn">Añadir al Carrito</button>
          </div>
        ))}
      </div>
      <Link to="/novedades" className="view-more-btn">
        Ver todas las Novedades
      </Link>
    </section>
  );
};

export default NewArrivals;