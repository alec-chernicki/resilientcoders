import './buttons.scss';
import React, {PropTypes} from 'react'

const ButtonPrimary = ({children, target, href}) => {
  return (
    <div className="button-container">
      <a className="button" href={href} target={target}>
        {children}
      </a>
    </div>
  )
}

ButtonPrimary.propTypes = {
  target: PropTypes.string,
  href: PropTypes.string,
}

export default ButtonPrimary
