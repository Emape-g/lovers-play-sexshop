import React from 'react';
import './FeaturedProducts.css'; // Importa su propio CSS
import { Link } from 'react-router-dom';

const featuredItems = [
  { id: 1, name: 'Lencería Exclusiva "Atrevida"', price: '$4.500', image: 'https://via.placeholder.com/250x250/DD2D4A/FFFFFF?text=Destacado+1' },
  { id: 2, name: 'Vibrador de Lujo "Poder"', price: '$7.000', image: 'https://via.placeholder.com/250x250/880D1E/FFFFFF?text=Destacado+2' },
  { id: 3, name: 'Kit Íntimo "Explorador"', price: '$5.800', image: 'https://via.placeholder.com/250x250/F26A8D/FFFFFF?text=Destacado+3' },
  { id: 4, name: 'Aceite de Masajes Afrodisíaco', price: '$1.800', image: 'https://via.placeholder.com/250x250/F49CBB/FFFFFF?text=Destacado+4' },
];

const FeaturedProducts = () => {
  return (
    <section className="featured-products-section product-section"> {/* Añadimos 'product-section' para estilos comunes */}
      <h2 className="section-title">✨ Productos Destacados ✨</h2>
      <div className="products-grid">
        {featuredItems.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="product-price">{product.price}</p>
            <button className="add-to-cart-btn">Añadir al Carrito</button>
          </div>
        ))}
      </div>
      <Link to="/destacados" className="view-more-btn">
        Ver todos los Destacados
      </Link>
    </section>
  );
};

export default FeaturedProducts;