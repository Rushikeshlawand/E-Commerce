import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import productelec1 from '../assets/download11.jfif';
import productelec2 from '../assets/download 12.jfif';
import productelec3 from '../assets/shoes.webp';
import productelec4 from '../assets/shoes1.webp';
import productelec5 from '../assets/shoes3.jfif';
import productelec6 from '../assets/shoes5.jfif';
import '../styles/ProductCard.css';

const Shoes = () => {
  // State for brand filter
  const [brandFilter, setBrandFilter] = useState('All');

  // Products array
  const products = [
    {
      title: "men - bata",
      description: "Latest model with advanced features.",
      price: 699,
      brand: "Shirt",
      image: productelec1,
    },
    {
      title: "Adidas Ultraboost",
      description: "Noise-cancelling, high-quality sound.",
      price: 199,
      brand: "T-shirt",
      image: productelec2,
    },
    {
      title: "Puma Ignite",
      description: "Track your fitness and notifications.",
      price: 299,
      brand: "Kurta",
      image: productelec3,
    },
    {
      title: "Reebok Flexagon",
      description: "Track your fitness and notifications.",
      price: 299,
      brand: "Suit",
      image: productelec4,
    },
    {
      title: "Nike Air Max",
      description: "Noise-cancelling, high-quality sound.",
      price: 999,
      brand: "Shirt",
      image: productelec5,
    },
    {
      title: "Converse All Star",
      description: "Track your fitness and notifications.",
      price: 299,
      brand: "Suit",
      image: productelec6,
    },
  ];

  // Handle brand filter change
  const handleBrandFilterChange = (event) => {
    setBrandFilter(event.target.value);
  };

  // Filter products based on the selected brand
  const filteredProducts = products.filter(product => {
    if (brandFilter === 'All') {
      return true;
    }
    return product.brand === brandFilter;
  });

  return (
    <div>
      <h1 className='head1'>Shoes</h1>

      {/* Filter Section */}
      <div className="filter-section">
        <label>Filter by Category: </label>
        <select value={brandFilter} onChange={handleBrandFilterChange}>
          <option value="All">All</option>
          <option value="Shirt">men</option>
          <option value="T-shirt">Women</option>
          <option value="Kurta">Kids</option>
         
        </select>
      </div>

      {/* Product Grid */}
      <div className="product-page">
        <div className="product-grid">
          {filteredProducts.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              description={product.description}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shoes;
