import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './StepNavigation.css';
import {partial} from 'underscore';

import UIFlexRow from 'UILibrary/grid/UIFlexRow';
import UIFlex from 'UILibrary/grid/UIFlex';
import UITextShadow from 'UILibrary/text/UITextShadow';

class StepNavigation extends React.PureComponent {
  renderSteps() {
    const {setShownStepIndex, shownStepIndex, stepConfig} = this.props;

    return stepConfig.map((item, i) => {
      const shadowText = `0${i + 1}.`;
      const isActive =shownStepIndex === i;

      return (
        <UIFlex
          key={i}
          basis="auto"
          grow={0}
          shrink={0}
          className="cursor-pointer"
        >
          <h3
            onMouseEnter={partial(setShownStepIndex, i)}
          >
            <UITextShadow
              isActive={isActive}
              text={shadowText}
            >
              {item.name}
            </UITextShadow>
          </h3>
        </UIFlex>
      )
    })
  }
  render() {
    return (
      <div>
        <UIFlexRow
          justify="space-between"
          className="p-x-15 flex-sm-row p-sm-x-0"
        >
          {this.renderSteps()}
        </UIFlexRow>
      </div>
    );
  }
}

export default CSSModules(StepNavigation, styles);
