import React from 'react';
import { Switch, Route} from 'react-router-dom';
import the_team from './the_team';
import division from './division';
import Home from './Home';
import About from './About';
import Machine_Learning from './Machine_Learning';


const Main = () => (
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/about" component={About}/>
     <Route path="/Machine Learning" component={Machine_Learning}/>
    <Route path="/The team" component={the_team}/>
    <Route path="/Division of Work" component={division}/>
  </Switch>
)

export default Main;
