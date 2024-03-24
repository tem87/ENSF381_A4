import React from 'react';

const CartItem = ({ item, updateQuantity, removeFromCart }) => {
  const { id, name, price, quantity, image } = item;



  const handleRemoveFromCart = () => {
    removeFromCart(id);
  };

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
        <button onClick={handleRemoveFromCart}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;
