import './GetInvolvedBase.scss';
import React, { PropTypes } from 'react';
import CenteredContainerOuter from '../../../components/Containers/CenteredContainer/CenteredContainerOuter';
import CenteredContainerInner from '../../../components/Containers/CenteredContainer/CenteredContainerInner';

const GetInvolvedBase = ({children}) => {
  return (
    <div className="get-involved-base">
      <div className="get-involved-base-hero" />
      <CenteredContainerOuter color="grey">
        {children}
      </CenteredContainerOuter>
    </div>
  )
}

export default GetInvolvedBase
