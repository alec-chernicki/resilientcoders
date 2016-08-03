import '../../../node_modules/odometer/themes/odometer-theme-default.css';
import Odometer from 'odometer';
import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

class NumberAnimation extends React.Component {
  componentDidMount () {
    this.odometer = new Odometer({
      el: ReactDOM.findDOMNode(this),
      value: this.props.value
    });
    this.animateNumber();
  }
  animateNumber () {
    // this.odometer.update(50);
    const odometer = this.odometer
    this.timeout = setTimeout(() => {
      odometer.update(50)
    }, 500);
  }
  componentWillUnmount () {
    clearTimeout(this.timeout);
  }
  render () {
    return (
      <div />
    )
  }
}

export default NumberAnimation;
