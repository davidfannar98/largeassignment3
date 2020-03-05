import React from 'react';
/*import { Navbar } from "react-bootstrap";*/
import {Switch, Route} from 'react-router-dom';
import Routes from "./Routes";
import Nav from "./components/NavBar"
import About from "./components/About";
import Products from "./components/Products";
import Cart from "./components/Cart"
import ProductDetail from "./components/ProductDetail"
import Bundles from "./components/Bundles"
import Checkout from "./components/Checkout"
import Delivery from "./components/Delivery"
import PickUp from "./components/PickUp"


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
                    <Route exact path="/checkout" component = { Delivery }/>
                    <Route exact path="/checkout/delivery" component = { Checkout }/>
                    <Route exact path="/checkout/pickup" component = { PickUp }/>
                </Switch>
            </div>
        </div>
    );
};


export default App;

