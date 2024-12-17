import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import productelec1 from '../assets/kid1.jfif';
import productelec2 from '../assets/kid2.jfif';
import productelec3 from '../assets/kid3.jfif';
import productelec4 from '../assets/kid4.jfif';
import productelec5 from '../assets/kid5.jfif';
import productelec6 from '../assets/kid6.jfif';
import '../styles/ProductCard.css'; 

const KidsWear = () => {
  // State for filter
  const [filter, setFilter] = useState('All');
  const [priceRange, setPriceRange] = useState('All');

  // List of products
  const products = [
    { title: "Small Wear", description: "Kids casual wear.", price: 699, image: productelec1, category: 'Shirts' },
    { title: "Kids Trousers", description: "Comfortable trousers for kids.", price: 499, image: productelec2, category: 'Trousers' },
    { title: "Kids Smart Watch", description: "Track fitness and fun activities.", price: 299, image: productelec3, category: 'Accessories' },
    { title: "Kids Dress", description: "Beautiful summer dress.", price: 799, image: productelec4, category: 'Dresses' },
    { title: "Kids Headphones", description: "Noise-cancelling headphones for kids.", price: 999, image: productelec5, category: 'Accessories' },
    { title: "Kids Smart Watch", description: "Track fitness and notifications.", price: 299, image: productelec6, category: 'Accessories' },
  ];

  // Filter products by category and price range
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
      <h1 className='head1'>Kids Wear</h1>

      {/* Filter Section */}
      <div className="filter-section">
        <label>Filter by category: </label>
        <select onChange={(e) => setFilter(e.target.value)} value={filter}>
          <option value="All">All</option>
          <option value="Shirts">Shirts</option>
          <option value="Trousers">Trousers</option>
          <option value="Dresses">Dresses</option>
          <option value="Accessories">Accessories</option>
        </select>

        <label>Filter by price: </label>
        <select onChange={(e) => setPriceRange(e.target.value)} value={priceRange}>
          <option value="All">All</option>
          <option value="below500">Below $500</option>
          <option value="500to1000">$500 - $1000</option>
          <option value="above1000">Above $1000</option>
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

export default KidsWear;
