
import React, { useState } from 'react';

const Keranjang = () => {
    const initialItems = [
        { id: 1, name: 'Product A', price: 20, image: '/P1.png' },
        { id: 2, name: 'Product B', price: 30, image: '/P2.png' },
        { id: 3, name: 'Product C', price: 25, image: '/P3.png' },
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
    
      const filteredItems = initialItems.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    
      const recommendedProducts = [
        { id: 4, name: 'Product D', price: 40, image: '/p8.png' },
        { id: 5, name: 'Product E', price: 35, image: '/P1.png' },
        // Add more recommended products as needed
      ];
    
      const totalSelectedItems = cartItems.filter((item) => item.selected).length;
    
      return (
        <div className="shopping-cart" style={{backgroundColor: '#F4EAE0'}}>
            <img src="/Logo2.png" className='logo-keranjang'></img><h3 className='text-keranjang'><span className='garis'>|</span> Keranjang {'<'}</h3>
          <div className="search-container">
            <input
              type="text"
              placeholder="Cari Produk"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
          <div className="product-list">
            {filteredItems.map((item) => (
              <div key={item.id} className={`product-card ${item.selected ? 'selected' : ''}`}>
                <input
                  type="checkbox"
                  checked={item.selected || false}
                  onChange={() => handleProductSelect(item.id)}
                />
                <div className="product-info">
                  <img src={item.image} alt={item.name} />
                  <div>
                    <span className="product-name">{item.name}</span>
                    <span className="product-price">${item.price}</span>
                    <div className="quantity-container">
                      <button onClick={() => decreaseQuantity(item.id)}>-</button>
                      <span>{item.quantity || 0}</span>
                      <button onClick={() => addToCart(item)}>+</button>
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
              <button className="payment-button">
                Proceed to Payment ({totalSelectedItems} items selected)
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
                      <span className="product-price">${item.price}</span>
                      <div className="quantity-container">
                        <button onClick={() => decreaseQuantity(item.id)}>-</button>
                        <span>{item.quantity || 0}</span>
                        <button onClick={() => addToCart(item)}>+</button>
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
