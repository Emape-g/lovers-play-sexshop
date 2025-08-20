import React from "react";
import ProductCard from "./../ProductCard/ProductCard";
import { Link } from "react-router-dom";

const mostSearchedProducts = [
  { id: 1, name: 'Vibrador "MaxPlacer"', price: '$5.000', image: 'https://via.placeholder.com/250x250/880D1E/FFFFFF?text=Vibrador' },
  { id: 2, name: 'Lencería "Secret"', price: '$3.000', image: 'https://via.placeholder.com/250x250/DD2D4A/FFFFFF?text=Lenceria' },
  { id: 3, name: 'Aceite Aromático', price: '$1.200', image: 'https://via.placeholder.com/250x250/F26A8D/FFFFFF?text=Aceite' },
  { id: 4, name: 'Juego Erótico "Duo"', price: '$2.400', image: 'https://via.placeholder.com/250x250/F49CBB/FFFFFF?text=Juego' },
];

const MostSearched: React.FC = () => {
  return (
    <section className="products-section">
      <h2 className="section-title">Más Buscados en Mendoza</h2>
      <div className="products-grid">
        {mostSearchedProducts.map(p => (
          <ProductCard key={p.id} name={p.name} price={p.price} image={p.image} />
        ))}
      </div>
      <Link to="/mas-buscados" className="view-more-btn">Ver Más Productos</Link>
    </section>
  );
};

export default MostSearched;
