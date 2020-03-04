import React from 'react';

const ProductDetail = (props) => {
    var product = props.location.state
    return (
    <div className="bg-light bubbleDetails">
        <div className="basicDetails">
            <h1 ><b>{ product.name }</b></h1>
            <img src={ product.image }></img>
        </div>
        <div className="extraDetails">
            <p>{ product.description }</p>
            <p>{ product.price } kr.</p>
        </div>
    </div> 
    );
}
export default ProductDetail;
