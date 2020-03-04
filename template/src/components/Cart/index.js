import React from 'react';
import ProductList from '../ProductList';

class Cart extends React.Component{
    render() {
        return(
            <div>
                <div>Your cart:</div>
                <ProductList products={ JSON.parse(localStorage.getItem('cart')) } />
                <button onClick={function () {localStorage.setItem('cart', '[]');window.location.reload()}}>Erase cart</button>
            </div>
        )
    }
}

export default Cart