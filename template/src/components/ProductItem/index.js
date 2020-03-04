import React from 'react';
import {Link} from 'react-router-dom';


const ProductItem = ({
  id, name, description, price, image
}) => {
    return(
        <div> 
            <Link 
                to={{
                    pathname: "/products/" + id,
                    state: {
                        name: name,
                        description: description,
                        price: price,
                        image: image
                    }
                }}>
                <h2><b>{ name }</b></h2>
                <img src={ image }></img>
                <button onClick={function() {addCart(id)}}>Add to cart</button>
            </Link>
            
        </div>
)};

function addCart(id, cart) {
    var cart = JSON.parse(localStorage.getItem('cart'))
    console.log(cart)
    if (cart[parseInt(id)] === undefined) {
        cart.push(id)
    }
    localStorage.setItem('cart', JSON.stringify(cart))
    console.log(localStorage)
}



export default ProductItem;
