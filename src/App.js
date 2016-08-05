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
      className="hereIam"
      transitionName="example"
      transitionEnterTimeout={400}
      transitionLeaveTimeout={400}
    >
      {React.cloneElement(children, {
        key: location.pathname
      })}
    </ReactCSSTransitionGroup>
    <Footer />
  </div>
);

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
