/*
In summary,

ProductItem displays indivdual product details and the add to cart button. 
When we press the "add to cart" button the associated data will be
displayed as a CartItem.


 */

import React from 'react';

const CartItem = ({ item, removeFromCart }) => {
  const { id, image, name, price, quantity } = item;

  const handleRemove = () => {
    removeFromCart(id);
  };

  return (
    <div className="cart-item">
      <img src={image} alt={name} />
      <div>
        <h4>{name}</h4>
        <p>Price: ${price}</p>
        <p>Quantity: {quantity}</p>
        <p>Total: ${price * quantity}</p>
        <button onClick={handleRemove}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;
