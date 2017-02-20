import './RouteTransition.scss';
import React from 'react'

class RouteTransition extends React.PureComponent {
  componentDidMount() {
    setTimeout(() => {
      document.body.scrollTop = 0;
    }, 250)
  }
  render() {
    return (
      <div className="route-transition">
        <div className="route-content">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default RouteTransition
