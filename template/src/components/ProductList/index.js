import React from 'react';
import ProductItem from '../ProductItem'
const ProductList = ({ products }) => {
    if (localStorage.key(0) !== 'cart') {
        localStorage.setItem('cart', '[]')
    }
    return (
        <div>
            { products.map(p => 
                <ProductItem 
                key={ p.id }
                id={ p.id }
                name={ p.name }
                description={ p.description }
                price={ p.price }
                image={ p.image }/>
                ) 
            }
        </div>
    );

}
export default ProductList