/*
=========================================================
Name        : Cart.js
Assignment  : 4
Author(s)   : Thalia Espinoza,  Brandon Nguyen
UCID        : 30195212, 30169800
Submission  : 03/25/2024
Description :cart implementation
=========================================================
*/

import React from 'react';
import CartItem from './CartItem';

const Cart = ({ cart, updateQuantity, removeFromCart }) => {
  // Calculate total price of all items in the cart
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Total (in cart): $0.00.</p>
      ) : (
        <>
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              updateQuantity={updateQuantity}
              removeFromCart={removeFromCart}
            />
          ))}
          <h3>Total Price (in cart): ${totalPrice.toFixed(2)}</h3>
        </>
      )}
    </div>
  );
};

export default Cart;
