import './Steps.scss';
import './StepTracker/StepTracker.scss';
import React from 'react';
import FirstStepContent from './StepContent/FirstStepContent';
import SecondStepContent from './StepContent/SecondStepContent';
import ConnectingLineVertical from './ConnectingLineVertical';
import ConnectingLineHorizontal from './ConnectingLineHorizontal';
import ConnectingDot from './ConnectingDot';

const Steps = () => {
  return (
    <div>
      <div className="step-tracker left">
        <ConnectingLineVertical className="first-vertical"/>
        <ConnectingDot />
        <ConnectingLineVertical className="second-vertical"/>
      </div>
      <div className="steps">
        <div className="step-content">
          <FirstStepContent />
          <ConnectingLineHorizontal />
          <SecondStepContent />
        </div>
      </div>
      <div className="step-tracker right">
        <ConnectingLineVertical className="third-vertical"/>
        <ConnectingDot />
        <ConnectingLineVertical className="fourth-vertical"/>
      </div>
    </div>
  )
}

export default Steps
