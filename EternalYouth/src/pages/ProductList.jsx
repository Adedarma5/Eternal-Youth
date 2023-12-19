// src/pages/ProductList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching product data:', error.message);
      }
    };

    fetchData();
  }, []); // Tidak ada dependensi, efek hanya dijalankan saat komponen dipasang

  const handleAddToCart = async (product) => {
    try {
      const randomOrderID = Math.floor(Math.random() * 1000) + 1;
  
      // Convert the order ID to a number
      const orderID = randomOrderID;
  
      // Kirim permintaan ke backend untuk menambahkan produk ke keranjang/pesanan
      const response = await axios.post('http://localhost:3001/api/placeOrder', {
        OrderId: orderID,
        productName: product.ProductName,
        productID: product.ID,
        price: product.Price,
        image: product.Image,
      });
  
      // Handle response from the server
      if (response.status === 200) {
        addToCart(product);
        console.log('Added to cart:', product);
  
        // Tampilkan pesan sukses ke pengguna jika perlu
        alert('Product added to cart successfully!');
      } else {
        console.error('Error placing order:', response.data.message);
        // Tampilkan pesan kesalahan ke pengguna jika perlu
        alert('Failed to add product to cart. Please try again.');
      }
    } catch (error) {
      console.error('Error adding to cart:', error.message);
      // Tampilkan pesan kesalahan ke pengguna jika perlu
      alert('Failed to add product to cart. Please try again.');
    }
  };
  
  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.ID}>
            <img src={product.Image} alt={product.ProductName} style={{ maxWidth: '100px' }} />
            <div>
              <p>{product.ProductName}</p>
              <p>{product.ProductType}</p>
              <p>Harga: Rp{product.Price}</p>
              <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
