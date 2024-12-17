import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import productelec1 from '../assets/elec1.jpg';
import productelec2 from '../assets/elec2.jpg';
import productelec3 from '../assets/elec3.jpg';
import productelec4 from '../assets/img4.webp';
import productelec5 from '../assets/elec5.jpg';
import productelec6 from '../assets/img5.webp';
import '../styles/ProductCard.css'; 

const Electronics = () => {
  // State for filter
  const [filter, setFilter] = useState('All');
  const [priceRange, setPriceRange] = useState('All');

  // List of products
  const products = [
    { title: "Smart TV", description: "Latest model with advanced features.", price: 699, image: productelec1, category: 'TV' },
    { title: "Samsung TV", description: "Noise-cancelling, high-quality sound.", price: 1999, image: productelec2, category: 'TV' },
    { title: "Smart Watch", description: "Track your fitness and notifications.", price: 299, image: productelec3, category: 'Watch' },
    { title: "Smart Watch", description: "Track your fitness and notifications.", price: 299, image: productelec4, category: 'Watch' },
    { title: "Blue Wireless Bluetooth On-Ear Headphones", description: "Noise-cancelling, high-quality sound.", price: 999, image: productelec5, category: 'Headphones' },
    { title: "Smart Watch", description: "Track your fitness and notifications.", price: 299, image: productelec6, category: 'Watch' },
  ];

  // Filter products by category
  const filteredProducts = products.filter(product => {
    // Filter by category
    const categoryMatch = filter === 'All' || product.category === filter;

    // Filter by price range
    let priceMatch = true;
    if (priceRange === 'below500') {
      priceMatch = product.price < 500;
    } else if (priceRange === '500to1000') {
      priceMatch = product.price >= 500 && product.price <= 1000;
    } else if (priceRange === 'above1000') {
      priceMatch = product.price > 1000;
    }

    return categoryMatch && priceMatch;
  });

  return (
    <div>
      <h1 className='head1'>Electronics</h1>

      {/* Filter Section */}
      <div className="filter-section">
        <label>Filter by category: </label>
        <select onChange={(e) => setFilter(e.target.value)} value={filter}>
          <option value="All">All</option>
          <option value="TV">TV</option>
          <option value="Watch">Smart Watch</option>
          <option value="Headphones">Headphones</option>
        </select>

        <label>Filter by price: </label>
        <select onChange={(e) => setPriceRange(e.target.value)} value={priceRange}>
          <option value="All">All</option>
          <option value="below500">Below $500</option>
          <option value="500to1000">$500 - $1000</option>
          <option value="above1000">Above $1000</option>
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

export default Electronics;
