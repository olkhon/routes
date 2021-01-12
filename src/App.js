import React from 'react';
import {Switch, Route, Link, Redirect} from 'react-router-dom';
import './App.css';
import UserDetails from './views/UserDetails';
import About from './views/About';
import WIP from './views/WorkinProgress';
import Students from './views/Students';

function App() {
  return (
    <div className="App">
     <h1>Test</h1>
     <Switch>
       <Redirect from="/about" to="/wip" />
       <Route path="/wip">
         <WIP />
       </Route>
       <Route path="/users">
         <UserDetails />
       </Route>
       <Route path="/about">
         <About />
       </Route>
        <Route path="/students/:studentName">
         <Students />
       </Route>
       <Route path="/">
         <div>This is the default page</div>
       </Route>
     </Switch>
     <Link to="/users">Get me users</Link>
     <Link to="/about">Get me about</Link>
     <Link to="/students">Get me students</Link>
     <Link to="/">Get me default</Link>
    </div>
  );
}

export default App;
