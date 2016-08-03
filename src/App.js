import './App.scss';
import React, { PropTypes } from 'react';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';

const App = ({ children }) => (
  <div>
    <Navigation />
    {children}
    <Footer />
  </div>
);

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
