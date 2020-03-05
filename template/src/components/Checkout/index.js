import React from 'react'


const Checkout = () =>  (
    <div>
        <h1>Select delivery method</h1>
        <br></br>
        <br></br>
        <div className="checkout">
            <button className="btn btn-light"><a href="/delivery">Delivered</a></button>
            <button className="btn btn-light"><a href="/storepickup">Store pickup</a></button>
        </div>
    </div>
);

export default Checkout;
