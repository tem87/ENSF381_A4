import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';
import Cart from './Cart';
import Header from './Header';
import Footer from './Footer';
import products from '../data/products';

const Productpage = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    const existingItemIndex = cart.findIndex((item) => item.id === product.id);
    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (productId, newQuantity) => {
    const updatedCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  return (
    <div className="product-page">
      <Header />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ flex: 1 }}>
          <ProductList products={products} addToCart={addToCart} />
        </div>
        <div style={{ flex: 1, marginLeft: '100px' }}>
          <Cart cart={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Productpage;
