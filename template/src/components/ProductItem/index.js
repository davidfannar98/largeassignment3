import React from 'react';
import {Link} from 'react-router-dom';


const ProductItem = ({
  id, name, description, price, image
}) => {
    return(
        <div class="card product">
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
                <img class="card-img-top" src={ image }></img>
                <h5 class="card-title">{ name }</h5>
                <p class="card-text"> { price } kr.</p>
            </Link>
            <button class="btn btn-light" onClick={function() {addCart(id)}}>Add to cart</button>
            
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
