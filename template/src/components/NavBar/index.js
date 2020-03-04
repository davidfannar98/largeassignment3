import React, {Component} from 'react';
import NavLinks from '../NavLinks/NavLinks';

class NavBar extends Component{
    render() {
        return(
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/products">Products</a></li>
                <li><a href="/bundles">Bundles</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/cart">Cart</a></li>
            </ul>
        )
    }
}

export default NavBar