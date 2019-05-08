import { throttle } from 'underscore';
import React from 'react';
import StepNavigation from './StepNavigation/StepNavigation';
import UISection from 'UILibrary/layout/UISection';
import UIInformationCarousel from 'UILibrary/layout/UIInformationCarousel';


class Steps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shownStepIndex: 0,
    };
    this.setShownStepIndex = throttle(this.setShownStepIndex.bind(this), 0);
  }
  setShownStepIndex(stepIndex) {
    this.setState({
      shownStepIndex: stepIndex,
    })
  }
  renderStep() {
    const {shownStepIndex} = this.state;
    const {config} = this.props;

    return (
      <div>
        <UISection className="index-2">
          <StepNavigation
            shownStepIndex={shownStepIndex}
            setShownStepIndex={this.setShownStepIndex}
            stepConfig={config}
          />
          <UIInformationCarousel
            className="m-top-6 position-relative with-shadow"
            config={config}
            currentIndex={shownStepIndex}
          />
        </UISection>
      </div>
    );
  }
  render() {
    const { stepsTitle, stepsParagraph} = this.props;
    return (
      <div>
        <UISection className="text-center p-bottom-6">
          <h1 className="text-darkest">
            {stepsTitle}
          </h1>
          <div className="divider divider__red" />
          <p className="text-constrained m-x-auto">
            {stepsParagraph}
          </p>
        </UISection>
        {this.renderStep()}
      </div>
    );
  }
}

export default Steps;
