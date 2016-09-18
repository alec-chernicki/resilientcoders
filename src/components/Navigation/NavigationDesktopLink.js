import React, { PropTypes } from 'react'

class NavigationDesktopLink extends React.Component {
  render () {
    <li >
      <a onClick={partial(this.handleMobileNavigationClick.bind(this), this.props.path, index)}>
        {this.props.text}
      </a>
    </li>
  }
}

export default NavigationDesktopLink;
