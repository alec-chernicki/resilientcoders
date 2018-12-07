import Butter from 'buttercms';
const butter = Butter('878761b95f55636acf5b929c9c9977e842902c01');

// import './BlogBase.scss';
import React, { PropTypes } from 'react';
import Hero from '../../../components/Containers/Hero/Hero';
import CenteredContainerOuter from '../../../components/Containers/CenteredContainer/CenteredContainerOuter';
import CenteredContainerInner from '../../../components/Containers/CenteredContainer/CenteredContainerInner';

const BlogBase = ({image, title, children, heroContent}) => {
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
      {children}
    </div>
  )
}

butter.post.list({page: 1, page_size: 10}).then(function(response) {
    console.log(response)
})

BlogBase.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default BlogBase
