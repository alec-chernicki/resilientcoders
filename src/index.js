import './index.scss';
import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './routeConfig/routes';

render((
  <Router history={browserHistory}>
    {routes}
  </Router>
), document.getElementById('root'));
