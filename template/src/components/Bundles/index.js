import React from 'react';
import { getBundles, getProducts } from '../../../../server/services/bubbleService'
import ProductList from '../ProductList';


class About extends React.Component{
    render() {
        return(
            <div>
                <h2>Bundles</h2>
            </div>
        )
    }
}

export default About;