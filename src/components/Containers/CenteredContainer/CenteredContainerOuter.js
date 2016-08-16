import './CenteredContainer.scss';
import React, { PropTypes } from 'react';
import classNames from 'classnames';

const CenteredContainerOuter = ({color, children, className}) => {

  const CenteredContainerOuterClass =  classNames(
    'centered-container-outer', className,
    {
      'centered-container-outer--grey': color === 'grey',
      'centered-container-outer--white': color === 'white',
    }
  );
  return (
    <div className={CenteredContainerOuterClass}>
      {children}
    </div>
  )
}

export default CenteredContainerOuter;
