import React from 'react';


const CartItem = ({
  id, name, description, price, image
}) => {
    return(
        <div class="card cart_card">
            <div class="card-body">
                <img class="cart_img"src={ image }/>
                <h5 class="cart_name"> { name } </h5>
                <p class="cart_desc">{ description } </p>
                <p class="cart_price"> { price } kr.</p>
            </div>
        </div>
)};
export default CartItem;