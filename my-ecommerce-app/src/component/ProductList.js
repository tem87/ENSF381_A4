import React from 'react';
import ProductItem from './ProductItem';
import products from '../data/products';

const ProductList = ({ addToCart }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default ProductList;


// => callback function, calling each product in the array
// returning the ProductItem component with the product object 
// product={product} passes the product object to the ProductItem component
//allows access to all the information about the product
// addToCart={addToCart} passes the addToCart function to the ProductItem component
// when the add to cart button is clicked