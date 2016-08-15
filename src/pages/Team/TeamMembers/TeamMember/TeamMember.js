import './TeamMember.scss';
import React from 'react'

const TeamMember = ({image, title, description}) => {
  return (
    <div className="team-item">
      <img src={image} alt="Team member"/>
      <div className="team-item-container">
        <p className="team-item__name">
          {title}
        </p>
        <p className="team-item__title">
          {description}
        </p>
        <button className="team-item__button">
          +
        </button>
      </div>
    </div>
  )
}

export default TeamMember
