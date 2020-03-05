import React from 'react';

const PickUp = (props) => {
    var products = props.location.state
    return(
        <div class="checkout_form">
            <h2>Checkout</h2>
            <form>
                <div class="form-group">
                    <label >Name</label>
                    <input type="name" class="form-control" placeholder="Enter name"/>
                </div>
                <div class="form-group">
                    <label >Phone number</label>
                    <input type="phone" class="form-control" placeholder="Enter phone number"/>
                </div>
        
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
};

export default PickUp;