import React from 'react';

const CartItem = ({ item, updateQuantity, removeFromCart }) => {
  const { id, name, price, quantity, image } = item;

  // Increase quantity by 1
  const increaseQuantity = () => {
    updateQuantity(id, quantity + 1);
  };

  // Decrease quantity by 1
  const decreaseQuantity = () => {
    if (quantity > 1) {
      updateQuantity(id, quantity - 1);
    } else {
      removeFromCart(id);
    }
  };

  return (
    <div className="cart-item">
      <img src={image} alt={name} />
      <div className="cart-item-details">
        <h3>{name}</h3>
        <p>Price: ${price}</p>
        <p>Quantity: {quantity}</p>
        <p>Total: ${(price * quantity).toFixed(2)}</p>
      </div>
      <div className="cart-item-actions">
        <button onClick={increaseQuantity}>+</button>
        <button onClick={decreaseQuantity}>-</button>
        <button onClick={() => removeFromCart(id)}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;
