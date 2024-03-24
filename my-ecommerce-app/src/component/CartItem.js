/*
=========================================================
Name        : CartItem.js
Assignment  : 4
Author(s)   : Thalia Espinoza,  Brandon Nguyen
UCID        : 30195212, 30169800
Submission  : 03/25/2024
Description : cart item implementation
=========================================================
*/
import React from 'react';

const CartItem = ({ item, updateQuantity, removeFromCart }) => {
  const { id, name, price, quantity, image } = item;

  const handleRemoveFromCart = () => {
    if (quantity > 1) {
        updateQuantity(id, quantity - 1);
    } else {
        removeFromCart(id);
    }
  };

  const calculatePrice = () => {
    return (price * quantity).toFixed(2);
  }


  return (
    <div className="cart-item">
      <div className="cart-item-image">
        {/* Apply fixed width and height for the images */}
        <img src={`/${image}`} alt={name} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
      </div>
      <div className="cart-item-details">
        <p>{name}</p>
        <p>Price: ${price}</p>
        <div className="cart-item-quantity">
          
          <p>Quantity: {quantity}</p>
          
        </div>
        <p>Total Price: ${calculatePrice()}</p>
        <button onClick={handleRemoveFromCart}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;
