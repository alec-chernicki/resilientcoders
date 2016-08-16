import React, { PropTypes } from 'react';
import CenteredContainerInner from '../../../components/Containers/CenteredContainer/CenteredContainerInner';

const GetInvolvedRow = ({image, orientation, children}) => {
  return (
    <CenteredContainerInner color="white">
      <img src={image} alt="individual working with student" className="get-involved-image"/>
      <div className="get-involved-info-description">
        {children}
      </div>
    </CenteredContainerInner>
  )
}

export default GetInvolvedRow;
