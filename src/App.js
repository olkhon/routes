import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import UserDetails from './views/UserDetails';
import About from './views/About';

function App() {
  return (
    <div className="App">
     <h1>Test</h1>
     <Switch>
       <Route path="/users">
         <UserDetails />
       </Route>
       <Route path="/about">
         <About />
       </Route>
       <Route path=""></Route>
     </Switch>
    </div>
  );
}

export default App;
