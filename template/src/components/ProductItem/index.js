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
                        image: image,
                        id: id,
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
    var condition = false
    if (cart.length == 0) {
        cart.push(id)
    } else {
        for (var i = 0; i < cart.length; i++) {
            if (parseInt(id) == parseInt(cart[i])) {
                condition = true
            }
        }
        if (!condition) {
            cart.push(id)
        }
    }
    localStorage.setItem('cart', JSON.stringify(cart))
    console.log(localStorage)
}



export default ProductItem;
