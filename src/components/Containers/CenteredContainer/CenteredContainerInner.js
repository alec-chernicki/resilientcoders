import './CenteredContainer.scss';
import React, { PropTypes } from 'react';
import classNames from 'classnames';

const CenteredContainerInner = ({color, children, className}) => {

  const CenteredContainerInnerClass =  classNames(
    'centered-container-inner', className,
    {
      'centered-container-inner--grey': color === 'grey',
      'centered-container-inner--white': color === 'white',
    }
  );
  return (
    <div className={CenteredContainerInnerClass}>
      {children}
    </div>
  )
}

export default CenteredContainerInner;
