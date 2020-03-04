import React from 'react';
/*import { Navbar } from "react-bootstrap";*/
import {Switch, Route} from 'react-router-dom';
import Routes from "./Routes";
import Nav from "./components/NavBar"
import About from "./components/About";
import Products from "./components/Products";
import Cart from "./components/Cart"


const App = () => {
    return (
        <div className="App">
            <Nav />
            <Switch>
                <Route path="/about" component={ About }/>
                <Route path="/products" component={ Products }/>
                <Route path="/cart" component={ Cart }/>
            </Switch>
        </div>
    );
};


export default App;

/*<div className="App container">
<Navbar fluid collapseOnSelect>
        <Navbar.Header>
            <Navbar.Brand>
                <Link to="/">Scratch</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
    </Navbar>
    <Routes />
</div>*/