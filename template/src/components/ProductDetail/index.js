import React from 'react';

const ProductDetail = (props) => {
    var product = props.location.state
    return (
    <div>
        <div>
            <h1 ><b>{ product.name }</b></h1>
            <img src={ product.image }></img>

        </div>
        <div>
            <p>{ product.description }</p>
            <p>{ product.price } kr.</p>
            <p>{ product.id }</p>
            <button class="btn btn-light" onClick={function() {addCart(product.id)}}>Add to cart</button>
        </div>
    </div> 
    );
}

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

export default ProductDetail;
