import './Navigation.scss';
import React from 'react';
import classNames from 'classnames';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {browserHistory} from 'react-router';
import routePaths from '../../constants/routePaths';

import logoRed from './logo_red.png';
import {Link} from 'react-router';
import Headroom from 'react-headroom';
import _ from 'underscore';

const {partial} = _

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isMobileNavActive: false,
    }

    this.hideMobileNav = this.hideMobileNav.bind(this);
    this.showMobileNav = this.showMobileNav.bind(this);
  }
  hideMobileNav() {
    this.setState({
      isMobileNavActive: false
    })
  }
  showMobileNav() {
    const {isMobileNavActive} = this.state;

    this.setState({
      isMobileNavActive: !isMobileNavActive
    })
  }
  renderNavigationLinks(className) {
    const routeKeys = Object.keys(routePaths);

    const links = routeKeys.map((routeKey, i) => {
      const routeItem = routePaths[routeKey]
      return (
        <li key={i}>
          <Link
            to={routeItem.route}
            onClick={this.hideMobileNav}
            activeClassName="active"
            onlyActiveOnIndex={true}
          >
            {routeItem.name}
          </Link>
        </li>
      );
    })

    return (
      <ul className={className}>
        {links}
      </ul>
    )
  }
  renderMobileNavigation () {
    if (!this.state.isMobileNavActive) {
      return null;
    }

    return this.renderNavigationLinks('nav-links-mobile-container');
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
        {this.renderNavigationLinks('nav-links nav-links--desktop')}
        <div className="nav-links nav-links--mobile">
          <a className={mobileNavIconClass} onClick={this.showMobileNav}>
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
