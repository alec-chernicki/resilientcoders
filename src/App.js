import './App.scss';
import React, {PropTypes} from 'react';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import objectFitImages from 'object-fit-images';
import NotificationBar from './announcements/NotificationBar';

class App extends React.Component {
  componentDidMount() {
    objectFitImages();
  }
  render () {
    const {children, location} = this.props;
    const link = "https://www.eventbrite.com/e/women-queer-and-non-binary-folk-resilient-coders-recruiting-event-tickets-60469898093";
    return (
      <div className="app">
        <Navigation/>
        <ReactCSSTransitionGroup
          component="div"
          transitionName="route-changing"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={250}>
          {React.cloneElement(children, {key: location.pathname})}
          <Footer/>
          <NotificationBar>
            <p className="text-on-dark m-y-0">
              <span className="text-white">Join us at our <a href={link} target="_blank">Women, Queer and Non-Binary folk recruiting event</a> on April 29th, 2019.</span>
            </p>
          </NotificationBar>
        </ReactCSSTransitionGroup>

      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node.isRequired
};

export default App;
