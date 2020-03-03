import React from 'react';
import {Switch, Route} from 'react-router-dom';
import About from "./components/About";

const App = () => {
    return (
      <div>
        <Switch>
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
  }

export default App;
