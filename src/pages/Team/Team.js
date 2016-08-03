import './Team.scss';
import React from 'react';
import BinaryText from '../../components/BinaryText/BinaryText';

const Team = (props) => {
  return (
    <div className="team">
      <div className="section-container-secondary">
        <h1>
          <BinaryText>
            The gang
          </BinaryText>
        </h1>
        <div className="square-grid-container">
          <div className="row row-one">
            <div className="photo-box">
              <img src="https://resilientcoders.s3.amazonaws.com/i/team/del.jpg" />
              <div className="photo-box-container">
                <p className="photo-name">David Delmar</p>
                <p className="photo-title">Executive Director</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Team
