import { throttle } from 'underscore';
import React from 'react';
import StepNavigation from './StepNavigation/StepNavigation';

import UISection from 'UILibrary/layout/UISection';
import UICard from 'UILibrary/layout/UICard';
import UIInformationCarousel from 'UILibrary/layout/UIInformationCarousel';

import stepConfig from './stepConfig';

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

    return (
      <div>
        <UISection className="index-2">
          <StepNavigation
            shownStepIndex={shownStepIndex}
            setShownStepIndex={this.setShownStepIndex}
            stepConfig={stepConfig}
          />
          <UIInformationCarousel
            className="m-top-6 position-relative with-shadow"
            config={stepConfig}
            currentIndex={shownStepIndex}
          />
        </UISection>
      </div>
    );
  }
  render() {
    return (
      <div>
        <UISection>
          <UICard className="text-center p-bottom-6">
            <h1>AN END TO END SOLUTION</h1>
            <div className="divider divider__red" />
            <p className="text-constrained m-x-auto">
              In order to effectively educate and employ our students we’ve
              developed a funnel with overlapping means of engagement.
            </p>
          </UICard>
        </UISection>
        {this.renderStep()}
      </div>
    );
  }
}

export default Steps;
