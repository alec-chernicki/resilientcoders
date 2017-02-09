import './StepNavigation.scss';
import React from 'react';
import {partial} from 'underscore';
import classNames from 'classnames';
import StepProgressBar from './StepProgressBar/StepProgressBar';

class StepNavigation extends React.Component {
  renderSteps() {
    const {setShownStepIndex, shownStepIndex, stepConfig} = this.props;

    const steps = stepConfig.map((item, i) => {
      const itemClass = classNames('step-navigation__item', {
        'active': shownStepIndex === i
      })

      return (
        <div
          key={i}
          className={itemClass}
          onClick={partial(setShownStepIndex, i)}
        >
          <h3>
            {item.name}
          </h3>
        </div>
      )
    })

    return (
      <div className="step-navigation__list">
        <StepProgressBar
          stepConfig={stepConfig}
          shownStepIndex={shownStepIndex}
        />
        {steps}
      </div>
    )
  }
  render() {
    return (
      <div className="step-navigation">
        {this.renderSteps()}
      </div>
    );
  }
}

export default StepNavigation;
