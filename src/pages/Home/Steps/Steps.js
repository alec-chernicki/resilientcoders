import './Steps.scss';
import React, { PropTypes } from 'react';
import StepTracker from './StepTracker/StepTracker';
import FirstStepContent from './StepContent/FirstStepContent';
import SecondStepContent from './StepContent/SecondStepContent';

const Steps = (props) => {
  return (
    <div>
      <StepTracker />
      <div className="steps">
        <div className="step-content">
          <FirstStepContent />
          <div className="connecting-line-horizontal" />
          <SecondStepContent />
          <div className="step-tracker right">
            <div className="connecting-line" />
            <div className="dot-with-circle active" />
            <div className="connecting-line" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Steps
