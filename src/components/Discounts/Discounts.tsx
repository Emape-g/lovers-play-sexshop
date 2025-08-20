
import React from "react";
import ProductCard from "./../ProductCard/ProductCard";
import { Link } from "react-router-dom";

const discountProducts = [
  { id: 1, name: 'Juego de Rol "Maestro"', price: '$2.800', image: 'https://via.placeholder.com/250x250/880D1E/FFFFFF?text=Desc+1', discount: '20%' },
  { id: 2, name: 'Bolas Chinas "Intensidad"', price: '$1.900', image: 'https://via.placeholder.com/250x250/F49CBB/FFFFFF?text=Desc+2', discount: '20%' },
  { id: 3, name: 'Poción de Amor "Encanto"', price: '$1.100', image: 'https://via.placeholder.com/250x250/DD2D4A/FFFFFF?text=Desc+3', discount: '25%' },
  { id: 4, name: 'Látigo Cuero "Dominación"', price: '$3.500', image: 'https://via.placeholder.com/250x250/F26A8D/FFFFFF?text=Desc+4', discount: '15%' },
];

const Discounts: React.FC = () => {
  return (
    <section className="products-section">
      <h2 className="section-title">Descuentos Imperdibles</h2>
      <div className="products-grid">
        {discountProducts.map(p => (
          <ProductCard key={p.id} name={p.name} price={p.price} image={p.image} discount={p.discount} />
        ))}
      </div>
      <Link to="/descuentos" className="view-more-btn">Ver todos los Descuentos</Link>
    </section>
  );
};

export default Discounts;
