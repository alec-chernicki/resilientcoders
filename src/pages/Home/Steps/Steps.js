import './Steps.scss';
import React from 'react';
import FirstStepContent from './StepContent/FirstStepContent';
import SecondStepContent from './StepContent/SecondStepContent';
import ConnectingLineVertical from '../../../components/ProgressBar/ConnectingLineVertical/ConnectingLineVertical'
import ConnectingDot from '../../../components/ProgressBar/ConnectingDot/ConnectingDot';

const Steps = () => {
  return (
    <div>
      <div className="home-progress-bar">
        <ConnectingLineVertical className="first-line" />
        <ConnectingDot />
        <ConnectingLineVertical className="second-line" />
        <ConnectingDot />
        <ConnectingLineVertical className="fourth-vertical"/>
      </div>
      <div className="steps">
        <div className="step-content">
          <FirstStepContent />
          <SecondStepContent />
        </div>
      </div>
    </div>
  )
}

export default Steps
