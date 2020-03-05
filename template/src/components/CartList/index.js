import React from 'react';
import CartItem from '../CartItem'
const CartList = ({ products }) => {
    return (
        <div>
            { products.map(p => 
                <CartItem 
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
export default CartList