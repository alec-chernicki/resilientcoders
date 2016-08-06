import './App.scss';
import React, { PropTypes } from 'react';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const App = ({ children, location }) => (
  <div>
    <Navigation />
    <ReactCSSTransitionGroup
      component="div"
      transitionName="example"
      transitionEnterTimeout={150}
      transitionLeaveTimeout={150}
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
