import React, { useState} from 'react';

const ProductItem = ({product, addToCart}) => {

    const [showDesc, setShowProdDetails] = useState(false);
    //trigger the toggleDetails function when the mouse enters or leaves the product item
    const toggleDetails = () => {
        setShowProdDetails(!showDesc);
    }

    return (
        <div className="product-item" onMouseEnter={toggleDetails} onMouseLeave={toggleDetails}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>

          {/*display the product description when the showDesc state is true*/}
          <p className={showDesc ? "show" : "hide"}>{product.description}</p>

          <p>Price: ${product.price}</p>
          
          {/*add the product to the cart when the Add to Cart button is clicked */}
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      );
}

export default ProductItem