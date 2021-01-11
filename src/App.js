import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
function App() {
  return (
    <div className="App">
      <Router>
      <Nav/>
        <Switch>
          <Route exact path="/" component={Home}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
