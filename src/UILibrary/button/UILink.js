import React from 'react';
import PropTypes from 'prop-types';
import LinkBase from './_core/LinkBase';

class UILink extends React.PureComponent {
  render () {
    const {external} = this.props;
    const target = external ? '_blank' : '';

    return (
      <LinkBase target={target} {...this.props} />
    )
  }
}

UILink.propTypes = {
  external: PropTypes.bool
};

export default UILink;
