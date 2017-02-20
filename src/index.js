import './index.scss';
import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './routeConfig/routes';
import GoogleAnalytics from 'react-ga';

GoogleAnalytics.initialize('UA-66576358-3');

const logPageView = () => {
  GoogleAnalytics.set({ page: window.location.pathname });
  GoogleAnalytics.pageview(window.location.pathname);
};

render((
  <Router history={browserHistory} onUpdate={logPageView}>
    {routes}
  </Router>
), document.getElementById('root'));
