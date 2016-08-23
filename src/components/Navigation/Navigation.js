import './Navigation.scss';
import React from 'react';
import classNames from 'classnames';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import logoRed from './logo_red.png';
import {Link} from 'react-router';
import Headroom from 'react-headroom';

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isMobileNavActive: false
    }
  }
  handleMobileNavigationClick() {
    this.setState({
      isMobileNavActive: !this.state.isMobileNavActive
    })
  }
  renderMobileNavigation () {
    if (!this.state.isMobileNavActive) {
      return null;
    }

    return (
      <ul className="nav-links-mobile-container">
        <li>
          <Link to="/bootcamp">Bootcamp</Link>
        </li>
        <li>
          <Link to="/lab">Lab</Link>
        </li>
        <li>
          <Link to="/news">News</Link>
        </li>
        <li>
          <Link to="/team">Team</Link>
        </li>
        <li>
          <Link to="/get-involved">Get Involved</Link>
        </li>
      </ul>
    )
  }
  render () {
    const mobileNavIconClass = classNames('nav-icon', {
      active: this.state.isMobileNavActive
    });
    return (
      <Headroom>
        <Link to="/" className="nav-logo">
          <img src={logoRed} alt="Resilient Coders logo"/>
        </Link>
        <ul className="nav-links nav-links--desktop">
          <li onClick={this.handleMobileNavigationClick.bind(this)}>
            <Link to="/bootcamp">
              Bootcamp
            </Link>
          </li>
          <li>
            <Link to="/lab">Lab</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
          <li>
            <Link to="/team">Team</Link>
          </li>
          <li>
            <Link to="/get-involved">Get Involved</Link>
          </li>
        </ul>
        <div className="nav-links nav-links--mobile">
          <a className={mobileNavIconClass} onClick={this.handleMobileNavigationClick.bind(this)}>
            <span className="nav-line line-1" />
            <span className="nav-line line-2" />
            <span className="nav-line line-3" />
          </a>
          <ReactCSSTransitionGroup
            component="div"
            transitionName="mobile-navigation"
            transitionEnterTimeout={200}
            transitionLeaveTimeout={200}
          >
            {this.renderMobileNavigation()}
          </ReactCSSTransitionGroup>
        </div>
      </Headroom>
    )
  }
}

export default Navigation;
