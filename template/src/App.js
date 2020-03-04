import React from 'react';
/*import { Navbar } from "react-bootstrap";*/
import {Switch, Route} from 'react-router-dom';
import Routes from "./Routes";
import About from "./components/About";
import NavBar from "./components/NavBar";


const App = () => {
    return (

        <div className={App}>
        <Switch>
            <NavBar />
            <Route path="/about" component={ About }/>

            <Route path="/contact/:id">
                <Contact />
            </Route>
            <Route path="/contact">
                <AllContacts />
            </Route>
            <Route path="/">
            </Route>
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