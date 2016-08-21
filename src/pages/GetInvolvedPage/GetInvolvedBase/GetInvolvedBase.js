import './GetInvolvedBase.scss';
import React, { PropTypes } from 'react';
import Hero from '../../../components/Containers/Hero/Hero';
import CenteredContainerOuter from '../../../components/Containers/CenteredContainer/CenteredContainerOuter';
import CenteredContainerInner from '../../../components/Containers/CenteredContainer/CenteredContainerInner';

const GetInvolvedBase = ({image, title, children, heroContent}) => {
  return (
    <div className="get-involved-base">
      <Hero
        className="get-involved-base-hero"
        image={image}
        titleLineOne={title}
      >
        <div className="divider divider__red" />
        {heroContent}
      </Hero>
      <CenteredContainerOuter color="grey">
        {children}
      </CenteredContainerOuter>
    </div>
  )
}

GetInvolvedBase.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default GetInvolvedBase
