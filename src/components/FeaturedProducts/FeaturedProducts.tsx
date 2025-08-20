
import React from "react";
import ProductCard from "./../ProductCard/ProductCard";
import { Link } from "react-router-dom";

const featuredItems = [
  { id: 1, name: 'Lencería Exclusiva "Atrevida"', price: '$4.500', image: 'https://via.placeholder.com/250x250/DD2D4A/FFFFFF?text=Destacado+1' },
  { id: 2, name: 'Vibrador de Lujo "Poder"', price: '$7.000', image: 'https://via.placeholder.com/250x250/880D1E/FFFFFF?text=Destacado+2' },
  { id: 3, name: 'Kit Íntimo "Explorador"', price: '$5.800', image: 'https://via.placeholder.com/250x250/F26A8D/FFFFFF?text=Destacado+3' },
  { id: 4, name: 'Aceite de Masajes Afrodisíaco', price: '$1.800', image: 'https://via.placeholder.com/250x250/F49CBB/FFFFFF?text=Destacado+4' },
];

const FeaturedProducts: React.FC = () => {
  return (
    <section className="products-section">
      <h2 className="section-title">Productos Destacados</h2>
      <div className="products-grid">
        {featuredItems.map(item => (
          <ProductCard 
            key={item.id} 
            name={item.name} 
            price={item.price} 
            image={item.image} 
          />
        ))}
      </div>
      <Link to="/destacados" className="view-more-btn">Ver todos los Destacados</Link>
    </section>
  );
};

export default FeaturedProducts;
