import React from 'react';

const Delivery = () => {
    return(

        <div class="checkout_form">
            <h2>Checkout</h2>
            <form>
                <div class="form-group">
                    <label >Name</label>
                    <input type="name" class="form-control" placeholder="Enter name"/>
                </div>
                <div class="form-group">
                    <label >Address</label>
                    <input type="address" class="form-control" placeholder="Enter address"/>
                </div>
                <div class="form-group">
                    <label >City</label>
                    <input type="city" class="form-control" placeholder="Enter name"/>
                </div>
                <div class="form-group">
                    <label >Phone number</label>
                    <input type="phone" class="form-control" placeholder="Enter phone number"/>
                </div>
                <div class="form-group">
                    <label >Postal code</label>
                    <input type="postal" class="form-control" placeholder="Enter postal code"/>
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
};

export default Delivery;