import React from 'react';
/*import { Navbar } from "react-bootstrap";*/
import {Switch, Route} from 'react-router-dom';
import Routes from "./Routes";
import Nav from "./components/NavBar"
import About from "./components/About";
import Products from "./components/Products";
import Cart from "./components/Cart"
import ProductDetail from "./components/ProductDetail"
import Bundles from "./components/Bundle"
import Checkout from "./components/Checkout";
import StorePickup from "./components/Pickup";
import Delivery from "./components/Delivery"


const App = () => {
    return (
        <div class="App">
            <Nav />
            <div class="container">
                <Switch>
                    <Route path="/about" component={ About }/>
                    <Route exact path="/products" component={ Products }/>
                    <Route exact path="/products/:id" component={ ProductDetail }/>
                    <Route path="/cart" component={ Cart }/>
                    <Route path="/bundles" component = {Bundles}/>
                    <Route path="/checkout" component = { Checkout }/>
                    <Route path="/storepickup" component = { StorePickup }/>
                    <Route path="/delivery" component = { Delivery } />
                </Switch>
            </div>
        </div>
    );
};


export default App;

