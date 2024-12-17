// src/pages/Electronics.js
import React from 'react';
import ProductCard from '../components/ProductCard';
import productelec1 from '../assets/elec1.jpg';
import productelec2 from '../assets/elec2.jpg';
import productelec3 from '../assets/elec3.jpg';
import productelec4 from '../assets/img4.webp';
import productelec5 from '../assets/elec5.jpg';
import productelec6 from '../assets/img5.webp';
import '../styles/ProductCard.css'; 
const Toys = () => {
  return ( <div ><h1 className='head1'>Toys</h1>
    <div className="product-page">
      
      <div className="product-grid">
        <ProductCard
          title="Smart TV"
          description="Latest model with advanced features."
          price={699}
          image={productelec1}
        />
        <ProductCard
          title="Samsung TV"
          description="Noise-cancelling, high-quality sound."
          price={199}
          image={productelec2}
        />
        <ProductCard
          title="Smart Watch"
          description="Track your fitness and notifications."
          price={299}
          image={productelec3}
        />
        <ProductCard
          title="Smart Watch"
          description="Track your fitness and notifications."
          price={299}
          image={productelec4}
        />
         <ProductCard
          title="Blue Wireless Bluetooth On-Ear Headphones "
          description="Noise-cancelling, high-quality sound."
          price={999}
          image={productelec5}
        />
         <ProductCard
          title="Smart Watch"
          description="Track your fitness and notifications."
          price={299}
          image={productelec6}
        />
      </div>
    </div></div>
  );
};

export default Toys;
