import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/Home';
import About from './components/About';
import { Router, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import history from './components/History'

ReactDOM.render(
  <Router history={history}>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
    </div>
  </Router>,
  document.getElementById('root'));
registerServiceWorker();
