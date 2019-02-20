import React from 'react';
import styles from './UILoading.css';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';

class UILoading extends React.Component {
  render () {
    const { className } = this.props;

    const loadingClass =  classNames({
        'loader': true,
    });

    const loadingBarClass =  classNames({
        'loader-bar': true,
    });
    
    const loadingLoadedClass =  classNames({
        'loader-loaded': true,
    });

    return (
        <div className={className} styleName={loadingClass}>
            <div className={className} styleName={loadingBarClass}>
                <div className={className} styleName={loadingLoadedClass} />
            </div>
            <h3>RESILIENT CODERS</h3>
        </div>
    )
  }
}

export default CSSModules(UILoading, styles);
