import './AlumniItem.scss';
import React, { PropTypes } from 'react'

const AlumniItem = ({image, name, biography}) => {
  return (
    <div className="alumni-item" style={{backgroundImage: `url(${image})`}}>
      <div className="alumni-information">
        <h1>
          {name}
        </h1>
        <div className="divider divider__red"/>
        <p>
          {biography}
        </p>
      </div>
    </div>
  )
}

export default AlumniItem
