import '../../../../node_modules/odometer/themes/odometer-theme-default.css';
import Odometer from 'odometer';
import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

class NumberAnimation extends React.Component {
  componentDidMount() {
    const {value} = this.props;

    this.odometer = new Odometer({
      el: ReactDOM.findDOMNode(this),
      value: 0
    });

    this.odometer.update(0);
  }
  componentDidUpdate () {
    const { shouldAnimate } = this.props;

    if (shouldAnimate()) {
      this.animateNumber();
    }
    else {
      this.odometer.update(0)
    }
  }
  animateNumber () {
    const odometer = this.odometer
    this.timeout = setTimeout(() => {
      odometer.update(50)
    }, 500);
  }
  componentWillUnmount () {
    clearTimeout(this.timeout);
    this.odometer = null;
  }
  render () {
    return (
      <div />
    )
  }
}

export default NumberAnimation;
