import './TimelineProgressBar.scss';
import React from 'react'
import ConnectingLineVertical from '../../../../components/ProgressBar/ConnectingLineVertical/ConnectingLineVertical';
import ConnectingDot from '../../../../components/ProgressBar/ConnectingDot/ConnectingDot';

const TimelineProgressBar = () => {
  return (
    <div className="timeline-progress-bar">
      <ConnectingDot/>
      <ConnectingLineVertical className="first"/>
      <ConnectingDot/>
      <ConnectingLineVertical className="second"/>
      <ConnectingDot/>
      <ConnectingLineVertical className="third"/>
      <ConnectingDot/>
      <ConnectingLineVertical className="fourth"/>
      <ConnectingDot/>
      <ConnectingLineVertical className="fifth"/>
      <ConnectingDot/>
    </div>
  )
}

export default TimelineProgressBar;
