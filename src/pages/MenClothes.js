import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import productelec1 from '../assets/men1.jpg';
import productelec2 from '../assets/men2.jpg';
import productelec3 from '../assets/men3.jpg';
import productelec4 from '../assets/men4.jfif';
import productelec5 from '../assets/men5.jfif';
import productelec6 from '../assets/men3.jpg';
import '../styles/ProductCard.css';

const MenClothes = () => {
  // State for brand filter
  const [brandFilter, setBrandFilter] = useState('All');

  // Products array
  const products = [
    {
      title: "WINE COLOR DENIM PLAIN CASUAL SHIRT",
      description: "Latest model with advanced features.",
      price: 699,
      brand: "Shirt",
      image: productelec1,
    },
    {
      title: "Levis Solid T-shirt",
      description: "Noise-cancelling, high-quality sound.",
      price: 1999,
      brand: "T-shirt",
      image: productelec2,
    },
    {
      title: "H&M",
      description: "Track your fitness and notifications.",
      price: 500,
      brand: "Kurta",
      image: productelec3,
    },
    {
      title: "T-shirt",
      description: "Track your fitness and notifications.",
      price: 290,
      brand: "Suit",
      image: productelec4,
    },
    {
      title: "Shirt - Bluetooth Headphones",
      description: "Noise-cancelling, high-quality sound.",
      price: 999,
      brand: "Shirt",
      image: productelec5,
    },
    {
      title: "Suit - Smart Watch",
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
      <h1 className='head1'>Men Clothes</h1>

      {/* Filter Section */}
      <div className="filter-section">
        <label>Filter by Category: </label>
        <select value={brandFilter} onChange={handleBrandFilterChange}>
          <option value="All">All</option>
          <option value="Shirt">Shirt</option>
          <option value="T-shirt">T-shirt</option>
          <option value="Kurta">Kurta</option>
          <option value="Suit">Suit</option>
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

export default MenClothes;
