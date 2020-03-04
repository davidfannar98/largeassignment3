import React, {Component} from 'react';

class NavBar extends Component{
    render() {
        return(
            <ul>
                <div className="navbar">
                <li><a href="/">Home</a></li>
                <li><a href="/products">Products</a></li>
                <li><a href="/bundles">Bundles</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/cart">Cart</a></li>
                </div>
            </ul>
        )
    }
}

export default NavBar