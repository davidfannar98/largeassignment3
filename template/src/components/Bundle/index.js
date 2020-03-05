import React from 'react';
import { getProducts, getBundles } from '../../../../server/services/bubbleService'
import BundleList from '../BundleList';

class Bundles extends React.Component{
    componentDidMount() {
        this.setState({
            bundles: getBundles()
        })
    }
    constructor(props) {
        super(props);
        this.state = {
            bundles: [],
        };
    };


    render() {
        return(
            <div>
                <BundleList bundles = { this.state.bundles } />
            </div>
        )
    }
}

export default Bundles