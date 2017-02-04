import './CenteredContainer.scss';
import React, { PropTypes } from 'react';
import classNames from 'classnames';

class CenteredContainerInner extends React.Component {
  render () {
    const {color, children, className, standard, direction, accent} = this.props;
    const CenteredContainerInnerClass =  classNames(
      'centered-container-inner', className,
      {
        'centered-container-inner--dark-grey': color === 'dark-grey',
        'centered-container-inner--grey': color === 'grey',
        'centered-container-inner--white': color === 'white',
        'centered-container-inner--transparent': color === 'transparent',
        'centered-container-inner--nonstandard': standard === false,
        'centered-container-inner--standard': standard === true,
        'centered-container-inner--accent': accent === true,
      }
    );

    return (
      <div className={CenteredContainerInnerClass}>
        {children}
      </div>
    )
  }
}

CenteredContainerInner.defaultProps = {
  standard: true,
  direction: 'column',
  accent: false
}

export default CenteredContainerInner;
