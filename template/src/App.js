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


const App = () => {
    return (
        <div className="App">
            <Nav />
            <Switch>
                <Route path="/about" component={ About }/>
                <Route exact path="/products" component={ Products }/>
                <Route exact path="/products/:id" component={ ProductDetail }/>
                <Route path="/cart" component={ Cart }/>
                <Route path="/bundles" component = {Bundles}/>
            </Switch>
        </div>
    );
};


export default App;

