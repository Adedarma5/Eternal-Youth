import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Keranjang = () => {
  const initialItems = [
    { id: 1, name: 'Makarijo Shampoo', price: 20000, image: '/P1.png' },
    { id: 2, name: 'Makarijo Shampoo', price: 30000, image: '/P2.png' },
    { id: 3, name: 'Makarijo Slink', price: 25000, image: '/P3.png' },
    // Add more products as needed
  ];

  const [cartItems, setCartItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const addToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
  
    if (existingItem) {
      const updatedCart = cartItems.map((cartItem) =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      );
      setCartItems(updatedCart);
    } else {
      // If the item is not in the cart, add it with quantity 1
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };
  

  const decreaseQuantity = (itemId) => {
    const updatedCart = cartItems.map((item) =>
      item.id === itemId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCartItems(updatedCart);
  };

  const removeProduct = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleProductSelect = (itemId) => {
    const updatedCart = cartItems.map((item) =>
      item.id === itemId ? { ...item, selected: !item.selected } : item
    );
    setCartItems(updatedCart);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(price);
  };

  const filteredItems = initialItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const recommendedProducts = [
    { id: 4, name: 'Layhal Shampoo ', price: 40000, image: '/p8.png' },
    { id: 5, name: 'Makarjo Shampoo', price: 35000, image: '/P1.png' },
    // Add more recommended products as needed
  ];

  const totalSelectedItems = cartItems.filter((item) => item.selected).length;

  return (
    <div className="shopping-cart" style={{ backgroundColor: '#F4EAE0' }}>
      <img src="/Logo2.png" alt="Logo" className='logo-keranjang' />
      <h3 className='text-keranjang'>
        <span className='garis'>|</span> Keranjang {'<'}
      </h3>
      <div className="search-container">
        <input
          type="text"
          placeholder="Cari Produk"
          value={searchTerm}
          onChange={handleSearch}
        />
        <FontAwesomeIcon icon={faSearch} className="search-icon" style={{color: 'white', marginLeft: '15px', width: '10%', height: '50%'}} />
      </div>
      <div className="product-list" >
        {filteredItems.map((item) => (
          <div key={item.id} >
            <input
              type="checkbox"
              checked={item.selected || false}
              onChange={() => handleProductSelect(item.id)}
            />
            <div className="product-info" >
              <img src={item.image} alt={item.name} />
              <div>
                <span className="product-name">{item.name}</span>
                <br />
                <span className="product-price">{formatPrice(item.price)}</span>
                <div className="quantity-container">
                  <button onClick={() => decreaseQuantity(item.id)} style={{ borderRadius: '10px' }}>-</button>
                  <span>{item.quantity || 0}</span>
                  <button onClick={() => addToCart(item)} style={{ borderRadius: '10px' }}>+</button>
                </div>
                <button className="remove-button" onClick={() => removeProduct(item.id)}>
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {totalSelectedItems > 0 && (
        <div className="payment-container">
          <button className="payment-button" style={{borderRadius: '10px', padding: '10px 50px 10px 50px', marginRight: '40px'}}><a href='https://app.sandbox.midtrans.com/payment-links/Product-A-1702365819541' style={{textDecoration: 'none', color: 'white'}}>
            Pembayaran </a>
          </button>
        </div>
      )}
      <div className="recommended-products">
        <h2>Recommended Products</h2>
        <div className="product-list">
          {recommendedProducts.map((item) => (
            <div key={item.id} className="product-card">
              <input
                type="checkbox"
                checked={item.selected || false}
                onChange={() => handleProductSelect(item.id)}
              />
              <div className="product-info">
                <img src={item.image} alt={item.name} />
                <div>
                  <span className="product-name">{item.name}</span>
                  <br />
                  <span className="product-price">{formatPrice(item.price)}</span>
                  <div className="quantity-container">
                    <button onClick={() => decreaseQuantity(item.id)} style={{ borderRadius: '10px' }}>-</button>
                    <span>{item.quantity || 0}</span>
                    <button onClick={() => addToCart(item)} style={{ borderRadius: '10px' }}>+</button>
                  </div>
                  <button className="remove-button" onClick={() => removeProduct(item.id)}>
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Keranjang;
