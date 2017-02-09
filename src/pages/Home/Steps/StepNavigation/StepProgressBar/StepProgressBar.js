import './StepProgressBar.scss';
import React from 'react';
import classNames from 'classnames';

class StepProgressBar extends React.Component {
  renderLines() {
    const {stepConfig, shownStepIndex} = this.props;

    return stepConfig.map((step, i) => {
      const dotClass = classNames('dot-with-circle', {
        'active': shownStepIndex >= i,
        'pulsing': shownStepIndex === i
      })

      const lineClass = classNames('connecting-line', {
        'active': shownStepIndex >= i,
      })

      return (
        <div key={i} className="step-progress-bar__item">
          <div className={lineClass}>
            <div className="connecting-line-progress" />
          </div>
          <div className={dotClass}>
            <div className="dot-pulse" />
          </div>
        </div>
      )
    })
  }
  render() {
    return (
      <div className="step-progress-bar">
        {this.renderLines()}
      </div>
    );
  }
}

export default StepProgressBar;
