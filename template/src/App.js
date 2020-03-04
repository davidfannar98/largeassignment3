import React from 'react';
/*import { Navbar } from "react-bootstrap";*/
import {Switch, Route} from 'react-router-dom';
import Routes from "./Routes";
import Nav from "./components/NavBar"
import About from "./components/About";
import Products from "./components/Products";
import Bundles from "./components/Bundles"
import Cart from "./components/Cart"


const App = () => {
    return (
        <div className="App">
            <Nav />
            <Switch>
                <Route path="/about" component={ About }/>
                <Route path="/products" component={ Products }/>
                <Route path="/bundles" component = {Bundles}/>
                <Route path="/cart" component = { Cart }/>
            </Switch>
        </div>
    );
};


export default App;

