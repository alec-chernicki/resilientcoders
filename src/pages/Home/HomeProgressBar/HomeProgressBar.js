import './HomeProgressBar.scss';
import React, { PropTypes } from 'react'
import ConnectingLineVertical from '../../../components/ProgressBar/ConnectingLineVertical/ConnectingLineVertical';
import ConnectingLineHorizontal from '../../../components/ProgressBar/ConnectingLineHorizontal/ConnectingLineHorizontal';
import ConnectingDot from '../../../components/ProgressBar/ConnectingDot/ConnectingDot';

const HomeProgressBar = (props) => {
  return (
    <div className="home-progress-bar">
      <ConnectingLineVertical className="first" />
      <ConnectingDot />
      <ConnectingLineVertical className="second" />
      <ConnectingLineHorizontal className="third" />
      <ConnectingLineVertical className="fourth" />
      <ConnectingDot />
      <ConnectingLineVertical className="fifth"/>
    </div>
  )
}

export default HomeProgressBar
