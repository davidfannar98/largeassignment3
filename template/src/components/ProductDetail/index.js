import React from 'react';

const ProductDetail = (props) => {
    var product = props.location.state
    return (
    <div className="bg-light bubbleDetails">
        <div className="basicDetails">
            <h1 ><b>{ product.name }</b></h1>
            <img src={ product.image }></img>

        </div>
        <div className="productDetails">
            <p>{ product.description }</p>
            <p>{ product.price } kr.</p>
            <button onClick={function() {addCart(id)}}>Add to cart</button>
        </div>
    </div> 
    );
}
export default ProductDetail;
