import './CenteredContainer.scss';
import React, { PropTypes } from 'react';
import classNames from 'classnames';

const CenteredContainerInner = ({color, children, className, standard}) => {

  const CenteredContainerInnerClass =  classNames(
    'centered-container-inner', className,
    {
      'centered-container-inner--grey': color === 'grey',
      'centered-container-inner--white': color === 'white',
      'centered-container-inner--nonstandard': standard === false,
    }
  );
  return (
    <div className={CenteredContainerInnerClass}>
      {children}
    </div>
  )
}

CenteredContainerInner.defaultProps = {
  standard: true,
  color: 'white'
}

export default CenteredContainerInner;
