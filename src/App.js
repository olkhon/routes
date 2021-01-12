import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
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
       <Route path="/">
         <div>This is the default page</div>
       </Route>
     </Switch>
     <Link to="/users">Get me users</Link>
     <Link to="/about">Get me about</Link>
     <Link to="/">Get me default</Link>
    </div>
  );
}

export default App;
