import React from 'react';
import ProductItem from './ProductItem';
import productsInfo from '../data/productsInfo';

const ProductList = ( addToCart) => {
    return (
        <div className="product-list">
        {/* map function iterates over each element and display each product */}
        {/* use id for uniqueness */}
            {productsInfo.map((product) => (
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