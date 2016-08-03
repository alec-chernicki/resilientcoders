import './WorkItem.scss';
import React, { PropTypes } from 'react'

const WorkItem = ({ image, title, description }) => {
  return (
    <div className="work-item">
      <img src={image} />
      <div className="work-details">
        <p className="work-company">
          {title}
        </p>
        <p className="work-text">
          {description}
        </p>
      </div>
    </div>
  )
}

export default WorkItem
