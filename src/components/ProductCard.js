import React, { useState } from 'react';
import '../styles/ProductCard.css'; // Ensure CSS is correctly imported
import { Link } from 'react-router-dom';

const ProductCard = ({ title, description, price, image }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleImageClick = () => {
    setShowDetails(!showDetails); // Toggle product details visibility
  };

  return (
    <div className="card">
      <div className="image-container" onClick={handleImageClick}>
        <img src={image} alt={title} className="card-img" />
        {showDetails && (
          <div className="card-details">
            <h4>Product Details</h4>
            <p>{description}</p>
          </div>
        )}
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <p className="card-price">{price}</p>
        
        {/* Update Link to point to the '/buy' route */}
        <Link to="/buy" className="buy-now-btn">
          Buy Now
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
