
import React from 'react';
import BundleItem from '../BundleItem';

const BundleList = ({ bundles }) =>  (
    <div className="bundleList">
        { bundles.map(b =>
            <BundleItem
                key={ b.id }
                bundleName={ b.name }
                bundleItems={ b.items }
            />)}
    </div>
);

export default BundleList;