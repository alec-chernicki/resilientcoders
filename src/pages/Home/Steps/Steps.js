import './Steps.scss';
import React from 'react';
import FirstStepContent from './StepContent/FirstStepContent';
import SecondStepContent from './StepContent/SecondStepContent';
import ConnectingLineVertical from '../../../components/ProgressBar/ConnectingLineVertical/ConnectingLineVertical';
import ConnectingLineHorizontal from '../../../components/ProgressBar/ConnectingLineHorizontal/ConnectingLineHorizontal';
import ConnectingDot from '../../../components/ProgressBar/ConnectingDot/ConnectingDot';


const Steps = () => {
  return (
    <div className="steps">
      <div className="step-tracker left">
        <ConnectingLineVertical className="first"/>
        <ConnectingDot />
        <ConnectingLineVertical className="second"/>
      </div>
      <div className="step-content">
        <FirstStepContent />
        <ConnectingLineHorizontal className="step-tracker-horizontal" />
        <SecondStepContent />
      </div>
      <div className="step-tracker right">
        <ConnectingLineVertical className="third"/>
        <ConnectingDot />
        <ConnectingLineVertical className="fourth"/>
      </div>
    </div>
  )
}

export default Steps
