import React from 'react';
import {Link} from 'react-router-dom';


const ProductItem = ({
  id, name, description, price, image
}) => (
    <div> 
            <Link 
                to={{
                    pathname: "/bubbles/" + id,
                    state: {
                        name: name,
                        image: image,
                        price: price,
                        description: description
                    }
                }}>
                <h2><b>{ name }</b></h2>
                <img src={ image }></img>
            </Link>
            
        </div>
);


export default ProductItem;
