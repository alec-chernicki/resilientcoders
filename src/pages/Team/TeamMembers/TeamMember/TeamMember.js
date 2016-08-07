import './TeamMember.scss';
import React, { PropTypes } from 'react'

const TeamMember = ({ image, title, description }) => {
  return (
    <div className="team-item">
      <img src={image}/>
      <div className="team-details">
        <p className="team-company">
          {title}
        </p>
        <p className="team-text">
          {description}
        </p>
      </div>
    </div>
  )
}

export default TeamMember
