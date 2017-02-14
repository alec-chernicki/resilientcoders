import './RouteTransition.scss';
import React from 'react'

class RouteTransition extends React.Component {
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
