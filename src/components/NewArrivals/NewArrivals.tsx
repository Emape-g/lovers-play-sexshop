import React from "react";
import ProductCard from "./../ProductCard/ProductCard";
import { Link } from "react-router-dom";

const newProducts = [
  { id: 1, name: 'Seda para Masajes "Sensación"', price: '$1.500', image: 'https://via.placeholder.com/250x250/F26A8D/FFFFFF?text=Seda' },
  { id: 2, name: 'Lencería Encaje "Pasión"', price: '$3.200', image: 'https://via.placeholder.com/250x250/DD2D4A/FFFFFF?text=Lenceria' },
  { id: 3, name: 'Juguete Vibra "Placer Intenso"', price: '$4.800', image: 'https://via.placeholder.com/250x250/880D1E/FFFFFF?text=Vibrador' },
  { id: 4, name: 'Aceite Comestible "Dulce Placer"', price: '$900', image: 'https://via.placeholder.com/250x250/F49CBB/FFFFFF?text=Aceite' },
];

const NewArrivals: React.FC = () => {
  return (
    <section className="products-section">
      <h2 className="section-title">Novedades en Mendoza</h2>
      <div className="products-grid">
        {newProducts.map(p => (
          <ProductCard key={p.id} name={p.name} price={p.price} image={p.image} />
        ))}
      </div>
      <Link to="/novedades" className="view-more-btn">Ver todas las Novedades</Link>
    </section>
  );
};

export default NewArrivals;