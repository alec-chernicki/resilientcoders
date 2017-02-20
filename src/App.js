import './App.scss';
import React, {PropTypes} from 'react';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Helmet from "react-helmet";

const App = ({children, location}) => (
  <div className="app">
    <Helmet titleTemplate="Resilient Coders - %s" />
    <Navigation/>
    <ReactCSSTransitionGroup
      component="div"
      transitionName="route-changing"
      transitionEnterTimeout={500}
      transitionLeaveTimeout={250}>
      {React.cloneElement(children, {key: location.pathname})}
      <Footer/>
    </ReactCSSTransitionGroup>

  </div>
);

App.propTypes = {
  children: PropTypes.node.isRequired
};

export default App;
