import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
import {BrowserRouter} from "react-router-dom";
import GoogleAnalytics from 'react-ga';

import App from './App';

// import { createBrowserHistory } from 'history';
// const history = createBrowserHistory();
// // export default history;

// GoogleAnalytics.initialize('UA-66576358-3');

// const logPageView = (state) => {
//   const currentPath = window.location.pathname;
//   // Manually push new page event to Google analytics
//   GoogleAnalytics.set({ page: currentPath });
//   GoogleAnalytics.pageview(currentPath);

//   // Manually push new page event to HubSpot analytics
//   const _hsq = window._hsq = window._hsq || [];
//   _hsq.push(['setPath', currentPath]);
//   _hsq.push(['trackPageView']);
// };
const render = () => {
  ReactDOM.render(
      <App />
  , document.getElementById('root'));

}

render();