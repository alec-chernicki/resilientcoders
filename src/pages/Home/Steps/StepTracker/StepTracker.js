import './StepTracker.scss';
import React, { PropTypes } from 'react'

const StepTracker = (props) => {
  return (
    <div className="step-tracker left">
      <div className="connecting-line" />
      <div className="dot-with-circle active" />
      <div className="connecting-line" />
    </div>
  )
}

export default StepTracker;
