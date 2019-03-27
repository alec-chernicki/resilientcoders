import React from 'react';
import PropTypes from 'prop-types';

class NavigationDesktopLink extends React.PureComponent {
  render () {
    <li >
      <a onClick={partial(this.handleMobileNavigationClick.bind(this), this.props.path, index)}>
        {this.props.text}
      </a>
    </li>
  }
}

export default NavigationDesktopLink;
