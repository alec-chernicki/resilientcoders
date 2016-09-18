import './Steps.scss';
import React from 'react';
import FirstStepContent from './StepContent/FirstStepContent';
import SecondStepContent from './StepContent/SecondStepContent';

const Steps = () => {
  return (
    <div className="steps">
      <div className="step-content">
        <FirstStepContent />
        <SecondStepContent />
      </div>
    </div>
  )
}

export default Steps
