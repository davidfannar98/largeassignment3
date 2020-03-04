import React, {Component} from 'react';
import NavLinks from '../NavLinks/NavLinks';

class NavBar extends Component{
    render() {
        return(
            <React.Fragment>
                <nav className='navbar navbar-dark bg-dark mb-3'>
                    <a className='navbar-brand' href='#'>
                        <h1> Total Items</h1>
                    </a>
                </nav>
            </React.Fragment>
        )
    }
}

export default NavBar