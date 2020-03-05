import React from 'react';
import { getProducts } from '../../../../server/services/bubbleService'
import ProductList from '../ProductList';

class Bundles extends React.Component{
    componentDidMount() {
        this.setState({
            Products: getProducts()
        })
    }

    constructor(props) {
        super(props);
        this.state = {
            Products: [],
        };
    };

    render() {
        return(
            <div>
                <ProductList products={ this.state.Products } />
            </div>
        )
    }
}

export default Bundles