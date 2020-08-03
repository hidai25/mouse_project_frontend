
import React from 'react';
import './App.css';
import {  Switch, Route } from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import { Link } from 'react-router-dom';
import {Layout, Header, Navigation, Drawer, Content, download} from 'react-mdl';
import Home from './components/Home';
import About from './components/About';
import DataCollection from './components/DataCollection';
import the_team from './components/the_team.js';
import division from './components/division.js';
import Machine_Learning from './components/Machine_Learning';
import Main from './components/main';


function App() {
  return (



   <div className="App">
   <Layout>
           <head>
           </head>
           <Content>
               <Main/>
           </Content>

       </Layout>
   </div>
     );
   }

   export default App;
