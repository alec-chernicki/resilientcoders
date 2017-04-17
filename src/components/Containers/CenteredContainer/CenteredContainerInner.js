import './CenteredContainer.scss';
import React from 'react';
import classNames from 'classnames';

class CenteredContainerInner extends React.PureComponent {
  render () {
    const {color, children, className, flush, accent} = this.props;
    const CenteredContainerInnerClass =  classNames(
      'centered-container-inner', className,
      {
        'centered-container-inner--dark-grey': color === 'dark-grey',
        'centered-container-inner--grey': color === 'grey',
        'centered-container-inner--white': color === 'white',
        'centered-container-inner--transparent': color === 'transparent',
        'centered-container-inner--nonstandard': flush === false,
        'centered-container-inner--standard': flush === true,
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
  flush: true,
  direction: 'column',
  accent: false
}

export default CenteredContainerInner;
