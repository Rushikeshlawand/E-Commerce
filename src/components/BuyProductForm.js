import React, { useState } from 'react';
import '../styles/buyproduct.css';

const BuyProductForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
    product: '',
    quantity: 1,
    paymentMethod: '',
    address: {
      street: '',
      city: '',
      state: '',
      postalCode: '',
      country: '',
    },
  });

  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  // Fungicide, Herbicide, and Insecticide products
  const products = {
    Shoes: ['Nike Air Max', 'Adidas Ultraboost', 'Puma Ignite', 'Reebok Flexagon', 'Converse All Star'],
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('address')) {
      const addressField = name.split('.')[1];
      setFormData({
        ...formData,
        address: {
          ...formData.address,
          [addressField]: value,
        },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create an object to send to the API
    const dataToSend = {
      Name: formData.name,
      Email: formData.email,
      Quantity: formData.quantity,
      Productname: formData.product,
      streetAddress: formData.address.street,
      City: formData.address.city,
      state: formData.address.state,
      postalcode: formData.address.postalCode,
      Country: formData.address.country,
    };

    try {
      // Make a POST request to the API using fetch
      const response = await fetch('http://localhost:4000/apii/buy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Specify the content type
        },
        body: JSON.stringify(dataToSend), // Convert data to JSON
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const responseData = await response.json(); // Parse the JSON response
      console.log('Response:', responseData);
      
      // Show the success modal
      setShowModal(true);

      // Optionally, reset the form after submission
      setFormData({
        name: '',
        email: '',
        category: '',
        product: '',
        quantity: 1,
        paymentMethod: '',
        address: {
          street: '',
          city: '',
          state: '',
          postalCode: '',
          country: '',
        },
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle errors here (e.g., show an error message)
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="buy-product-container mt-5">
      <h2 className="buy-product-title">Buy Product</h2>

      <form onSubmit={handleSubmit}>
        {/* Name Field */}
        <div className="buy-product-field mb-3">
          <label htmlFor="name" className="buy-product-label form-label">Name</label>
          <input
            type="text"
            className="buy-product-input form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Email Field */}
        <div className="buy-product-field mb-3">
          <label htmlFor="email" className="buy-product-label form-label">Email</label>
          <input
            type="email"
            className="buy-product-input form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Product Category Dropdown */}
      

        {/* Product Dropdown - Depends on selected category */}
        {formData.category && (
          <div className="buy-product-field mb-3">
            <label htmlFor="product" className="buy-product-label form-label">Select Product</label>
            <select
              className="buy-product-select form-select"
              id="product"
              name="product"
              value={formData.product}
              onChange={handleChange}
              required
            >
              <option value="">Choose Product...</option>
              {products[formData.category].map((product, index) => (
                <option key={index} value={product}>{product}</option>
              ))}
            </select>
          </div>
        )}

        {/* Quantity Field */}
        <div className="buy-product-field mb-3">
          <label htmlFor="quantity" className="buy-product-label form-label">Quantity</label>
          <input
            type="number"
            className="buy-product-input form-control"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            min="1"
            required
          />
        </div>

        {/* Address Section */}
        <h4 className="buy-product-section-title">Shipping Address</h4>
        
        <div className="buy-product-field mb-3">
          <label htmlFor="street" className="buy-product-label form-label">Street Address</label>
          <input
            type="text"
            className="buy-product-input form-control"
            id="street"
            name="address.street"
            value={formData.address.street}
            onChange={handleChange}
            required
          />
        </div>

        <div className="buy-product-field mb-3">
          <label htmlFor="city" className="buy-product-label form-label">City</label>
          <input
            type="text"
            className="buy-product-input form-control"
            id="city"
            name="address.city"
            value={formData.address.city}
            onChange={handleChange}
            required
          />
        </div>

        <div className="buy-product-field mb-3">
          <label htmlFor="state" className="buy-product-label form-label">State/Province</label>
          <input
            type="text"
            className="buy-product-input form-control"
            id="state"
            name="address.state"
            value={formData.address.state}
            onChange={handleChange}
            required
          />
        </div>

        <div className="buy-product-field mb-3">
          <label htmlFor="postalCode" className="buy-product-label form-label">Postal Code</label>
          <input
            type="text"
            className="buy-product-input form-control"
            id="postalCode"
            name="address.postalCode"
            value={formData.address.postalCode}
            onChange={handleChange}
            required
          />
        </div>

        <div className="buy-product-field mb-3">
          <label htmlFor="country" className="buy-product-label form-label">Country</label>
          <input
            type="text"
            className="buy-product-input form-control"
            id="country"
            name="address.country"
            value={formData.address.country}
            onChange={handleChange}
            required
          />
        </div>

        {/* Payment Method */}
        <h4 className="buy-product-section-title">Payment Method</h4>
        <div className="buy-product-field mb-3">
          <label className="buy-product-label form-label">Payment Method</label>
          <div className="buy-product-radio">
            <input
              className="buy-product-radio-input form-check-input"
              type="radio"
              name="paymentMethod"
              id="creditCard"
              value="Credit Card"
              onChange={handleChange}
              required
            />
            <label className="buy-product-radio-label form-check-label" htmlFor="creditCard">
              Credit Card
            </label>
          </div>
          <div className="buy-product-radio">
            <input
              className="buy-product-radio-input form-check-input"
              type="radio"
              name="paymentMethod"
              id="paypal"
              value="PayPal"
              onChange={handleChange}
            />
            <label className="buy-product-radio-label form-check-label" htmlFor="paypal">
              PayPal
            </label>
          </div>
          <div className="buy-product-radio">
            <input
              className="buy-product-radio-input form-check-input"
              type="radio"
              name="paymentMethod"
              id="bankTransfer"
              value="Bank Transfer"
              onChange={handleChange}
            />
            <label className="buy-product-radio-label form-check-label" htmlFor="bankTransfer">
              Bank Transfer
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <button type="submit" className="buy-product-submit btn btn-primary">Submit</button>
      </form>

      {/* Modal for Success Message */}
      {showModal && (
        <div className="modal fade show" style={{ display: 'block' }} onClick={handleCloseModal}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Success!</h5>
                <button type="button" className="btn-close" onClick={handleCloseModal}></button>
              </div>
              <div className="modal-body">
                <p>Order placed successfully!</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BuyProductForm;
