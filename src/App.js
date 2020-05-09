import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import { Active } from './Active';
import { Completed } from './Completed';
import { Create } from './Create';
import { Discover } from './Discover';


function App() {
  return (
      <React.Fragment>
        <Router>
          <NavigationBar />
          <Switch>
            <Route exact path="/active" component={Active} />
            <Route path="/completed" component={Completed} />
            <Route path="/create" component={Create} />
            <Route path="/discover" component={Discover} />
          </Switch>
        </Router>
      </React.Fragment>
  )
}


export default App;
