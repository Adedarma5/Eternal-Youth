// src/pages/Cart.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Cart = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/placeOrder');
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error.message);
      }
    };

    fetchOrders();
  }, []);

  const handlePayment = async (orderId, price) => {
    try {
      const response = await axios.post('http://localhost:3001/get-payment-token', {
        orderId,
        price 
      });

      const { token } = response.data;

      window.snap.pay(token, {
        onSuccess: function (result) {
          console.log('Pembayaran berhasil: ', result);
        },
        onPending: function (result) {
          console.log('Pembayaran tertunda: ', result);
        },
        onError: function (result) {
          console.log('Error pembayaran: ', result);
        },
      });
    } catch (error) {
      console.error('Error handling payment:', error.message);
    }
  };

  return (
    <div>
      <h1>Your Cart</h1>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Product Name</th>
            <th>Product ID</th>
            <th>Price</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.OrderID}>
              <td>{order.OrderID}</td>
              <td>{order.ProductName}</td>
              <td>{order.ProductID}</td>
              <td>{order.Price}</td>
              <td>
                <img src={order.Image} alt={order.ProductName} style={{ maxWidth: '50px' }} />
              </td>
              <td>
                <button onClick={() => handlePayment(order.OrderID, order.Price)}>
                  Pay Now
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
