import './TimelineProgressBar.scss';
import React from 'react'
import ConnectingLineVertical from '../../../../components/ProgressBar/ConnectingLineVertical/ConnectingLineVertical';
import ConnectingDot from '../../../../components/ProgressBar/ConnectingDot/ConnectingDot';

const TimelineProgressBar = () => {
  return (
    <div className="timeline-progress-bar">
      <ConnectingDot/>
      <ConnectingLineVertical className="first-line"/>
      <ConnectingDot/>
      <ConnectingLineVertical/>
      <ConnectingDot/>
      <ConnectingLineVertical/>
      <ConnectingDot/>
      <ConnectingLineVertical className="last-line"/>
      <ConnectingDot/>
    </div>
  )
}

export default TimelineProgressBar;
