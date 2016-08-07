import './Team.scss';
import React from 'react';
import BinaryText from '../../components/BinaryText/BinaryText';
import { scrollTime } from '../../routeConfig/routeTransition';
import TeamMembers from './TeamMembers/TeamMembers';

const Team = (props) => {
  return (
    <div className="team">
      <div className="section-container-secondary">
        <h1>
          <BinaryText>
            The gang
          </BinaryText>
        </h1>
        <TeamMembers />
      </div>
    </div>
  )
}

export default Team
