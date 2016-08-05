import './Lab.scss';
import NumberAnimation from './NumberAnimation';
import React, { PropTypes } from 'react';
import BinaryText from '../../components/BinaryText/BinaryText';
import Work from './Work/Work';

const Lab = (props) => {
  return (
    <div> 
      <div className="panel-container">
        <div className="panel-visibility-container">
          <div className="panel-item panel-left">
            <h2>

              <span className="panel-number">
                <NumberAnimation value={0}/>
                %
              </span>
              HEADING ONE
            </h2>
          </div>
        </div>
        <div className="panel-visibility-container">
          <div className="panel-item panel-right">
            <h2>
              <span className="panel-number">
                <NumberAnimation value={0}/>
                %
              </span>
              HEADING TWO
            </h2>
          </div>
        </div>
      </div>
      <div className="tiered-program-background">
        <div className="offset-container section-container-secondary">
          <h1>
            Our Work
          </h1>
          <div className="divider" />
          <Work />
        </div>
      </div>
    </div>
  )
}

export default Lab
