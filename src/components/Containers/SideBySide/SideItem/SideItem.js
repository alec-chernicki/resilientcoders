import './SideItem.scss';
import React, { PropTypes } from 'react';
import classNames from 'classnames';

const SideItem = ({children, size, type, className}) => {
  const sideItemClass = classNames('side-item', className, {
    'side-item--grey': type === 'grey',
    'side-item--red': type === 'red',
    'side-item--white': type === 'white',
    'side-item--image': type === 'image',
  })

  return (
    <div
      className={sideItemClass}
      style={{
        flex: `2 2 ${size}%`
      }}
    >
      {children}
    </div>
  )
}

SideItem.defaultProps = {
  size: 50,
  type: 'white',
}

SideItem.propTypes = {
  size: PropTypes.number,
  type: PropTypes.string,
}

export default SideItem
