import React from "react";
import "./ProductCard.css";

type ProductCardProps = {
  name: string;
  price: string;
  image: string;
  discount?: string;
};

const ProductCard: React.FC<ProductCardProps> = ({ name, price, image, discount }) => {
  return (
    <div className="product-card">
      {discount && <span className="discount-badge">{discount}</span>}
      <img src={image} alt={name} className="product-image" />
      <h3 className="product-name">{name}</h3>
      <p className="product-price">{price}</p>
    </div>
  );
};

export default ProductCard;
