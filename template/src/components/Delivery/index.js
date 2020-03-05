import React from 'react';
import {Link} from 'react-router-dom';

class Delivery extends React.Component{
    render() {
        return(
            <div>
                <Link 
                to={{
                    pathname: "/checkout/delivery",
                }}
                
                class="btn btn-light"> Delivery </Link>
                <Link 
                to={{
                    pathname: "/checkout/pickup",
                }}
                
                class="btn btn-light"> Pick up </Link>
            </div>
        )
    }
}

export default Delivery;