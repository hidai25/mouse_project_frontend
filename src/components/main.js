import React from 'react';
import { Switch, Route} from 'react-router-dom';
import the_team from './the_team';
import division from './division';
import Home from './Home';
import About from './About';
import DataCollection from './DataCollection';
import Machine_Learning from './Machine_Learning';
import References from './References';


const Main = () => (
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/DataCollection" component={DataCollection}/>
     <Route path="/Machine Learning" component={Machine_Learning}/>
    <Route path="/The team" component={the_team}/>
    <Route path="/Division of Work" component={division}/>
    <Route path="/References" component={References}/>
  </Switch>
)

export default Main;
