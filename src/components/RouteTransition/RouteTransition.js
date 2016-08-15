import './RouteTransition.scss';
import React from 'react'

class RouteTransition extends React.Component {
  componentDidMount() {
    console.log('mounted');
    setTimeout(() => {
      document.body.scrollTop = 0;
    }, 250)
  }
  render() {
    return (
      <div>
        <div className="route-content">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default RouteTransition
