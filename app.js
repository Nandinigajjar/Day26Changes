import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import FullStackDevelopment from './components/FullStackDevelopment';
import DataScience from './components/DataScience';
import CyberSecurity from './components/CyberSecurity';
import Career from './components/Career';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/full-stack-development" component={FullStackDevelopment} />
          <Route path="/data-science" component={DataScience} />
          <Route path="/cyber-security" component={CyberSecurity} />
          <Route path="/career" component={Career} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
