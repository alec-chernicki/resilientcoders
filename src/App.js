import './App.scss';
import React, { PropTypes } from 'react';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { transitionTime } from './routeConfig/routeTransition';

const App = ({ children, location }) => (
  <div>
    <Navigation />
    <ReactCSSTransitionGroup
      component="div"
      transitionName="example"
      transitionEnterTimeout={transitionTime}
      transitionLeaveTimeout={transitionTime}
    >
      {React.cloneElement(children, {
        key: location.pathname
      })}
      <div className="route-transition" />
    </ReactCSSTransitionGroup>
    <Footer />
  </div>
);

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
