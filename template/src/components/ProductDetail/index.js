import React from 'react';

const ProductDetail = (props) => {
    var product = props.location.state
    return (
    <div className="bg-light bubbleDetails">
        <div className="basicDetails">
            <h1 ><b>{ product.name }</b></h1>
            <p>{ product.description }</p>

        </div>
        <div className="productDetails">
            <img src={ product.image }></img>
            <p>{ product.price } kr.</p>
            <button onClick={function() {addCart(id)}}>Add to cart</button>
        </div>
    </div> 
    );
}
export default ProductDetail;
