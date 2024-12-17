import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import productelec1 from '../assets/women1.jpg';
import productelec2 from '../assets/women2.webp';
import productelec3 from '../assets/women3.jpg';
import productelec4 from '../assets/women4.webp';
import productelec5 from '../assets/women5.jfif';
import productelec6 from '../assets/women6.webp';
import '../styles/ProductCard.css'; 

const WomenClothes = () => {
  // Add filter state
  const [filter, setFilter] = useState('All');

  // Define the products
  const products = [
    { title: "Printed Women's Casual Wear Western Dress", description: "Latest model with advanced features.", price: 699, image: productelec1, category: 'Dress' },
    { title: "Off White Lehenga Set", description: "Banarasi Border Work.", price: 199, image: productelec2, category: 'Lehenga' },
    { title: "Women's Formal Wear", description: "Latest formal trends.", price: 299, image: productelec3, category: 'Formal Wear' },
    { title: "Party Wear Saree In Organza", description: "Sequins Embroidered.", price: 299, image: productelec4, category: 'Saree' },
    { title: "Devika Silk Festive Wear Saree", description: "Festive wear saree.", price: 999, image: productelec5, category: 'Saree' },
    { title: "Smart Watch", description: "Track your fitness and notifications.", price: 299, image: productelec6, category: 'Accessories' }
  ];

  // Filter the products based on selected filter
  const filteredProducts = filter === 'All' ? products : products.filter(product => product.category === filter);

  return (
    <div>
      <h1 className='head1'>Women Clothes</h1>
      
      {/* Filter section */}
      <div className="filter-section">
        <label>Filter by category: </label>
        <select onChange={(e) => setFilter(e.target.value)} value={filter}>
          <option value="All">All</option>
          <option value="Dress">Dress</option>
          <option value="Lehenga">Lehenga</option>
          <option value="Saree">Saree</option>
          <option value="Formal Wear">Formal Wear</option>
          <option value="Accessories">Accessories</option>
        </select>
      </div>

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

export default WomenClothes;
