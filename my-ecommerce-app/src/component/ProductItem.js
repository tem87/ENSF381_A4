import React, { useState} from 'react';

const ProductItem = ({ product, addToCart }) => {
  const [showDesc, setShowProdDetails] = useState(false);

  const toggleDetails = () => {
    setShowProdDetails(!showDesc);
  }

  return (
    <div className="product-item" onMouseEnter={toggleDetails} onMouseLeave={toggleDetails}>
      {/* Use a relative path to the public directory */}
      <img src={`/images/${product.image}`} alt={product.name} />
      <h3>{product.name}</h3>
      <p className={showDesc ? "show" : "hide"}>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default ProductItem;
