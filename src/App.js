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
    const link = "https://www.eventbrite.com/e/resilient-coders-demo-day-tickets-58142024360";
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
              <span className="text-white">Looking to hire software engineers? Join us at&nbsp;</span>
              <a href={link} target="_blank">Resilient Coders Demo Day</a>
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
