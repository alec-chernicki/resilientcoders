import './Steps.scss';
import React from 'react';
import CoworkingStep from './StepContent/CoworkingStep';
import BootcampStep from './StepContent/BootcampStep';
import LabStep from './StepContent/LabStep';
import StepNavigation from './StepNavigation/StepNavigation';
import ButtonPrimary from '../../../components/Buttons/ButtonPrimary';
import CenteredContainerInner from '../../../components/Containers/CenteredContainer/CenteredContainerInner';
import BinaryText from '../../../components/BinaryText/BinaryText';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import classNames from 'classnames';

import arrowLeft from '../../../images/left-arrow.svg';
import arrowRight from '../../../images/right-arrow.svg';

import stepConfig from './stepConfig';

class Steps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shownStepIndex: 0,
      textContainerElement: null,
      textContainerElementHeight: 0,
      changeDirection: 'right'
    };
    this.setShownStepIndex = this.setShownStepIndex.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.getTextContainerHeight = this.getTextContainerHeight.bind(this);
    this.setTextContainerElementRef = this.setTextContainerElementRef.bind(this);
    this.getChangeDirection = this.getChangeDirection.bind(this);
  }
  componentDidMount() {
    this.setState({
      textContainerElementHeight: this.getTextContainerHeight() + 110
    })
  }
  componentDidUpdate() {
    const {textContainerElementHeight} = this.state;
    const elHeight = this.getTextContainerHeight() + 110;

    if (textContainerElementHeight !== elHeight &&  elHeight !== 110) {
      this.setState({
        textContainerElementHeight: elHeight
      })
    }
  }
  getTextContainerHeight() {
    const {textContainerElement} = this.state;

    if (!textContainerElement) {
      return 0
    }
    return textContainerElement.clientHeight;
  }
  getChangeDirection (stepIndex) {
    const {shownStepIndex} = this.state;

    return shownStepIndex > stepIndex ? 'right' : 'left'
  }
  setTextContainerElementRef(element) {
    this.setState({
      textContainerElement: element
    });
  }
  setShownStepIndex(stepIndex) {
    this.setState({
      shownStepIndex: stepIndex,
      changeDirection: this.getChangeDirection(stepIndex)
    })
  }
  handlePrev() {
    const {shownStepIndex} = this.state;
    if (shownStepIndex >= 0) {
      const newStepIndex = shownStepIndex - 1;

      this.setState({
        shownStepIndex: newStepIndex,
        changeDirection: this.getChangeDirection(newStepIndex)
      })
    }
  }
  handleNext() {
    const {shownStepIndex} = this.state;

    if (shownStepIndex < stepConfig.length - 1) {
      const newStepIndex = shownStepIndex + 1;

      this.setState({
        shownStepIndex: newStepIndex,
        changeDirection: this.getChangeDirection(newStepIndex)
      })
    }
  }
  renderStep() {
    const {shownStepIndex, changeDirection} = this.state;

    const currentStep = stepConfig[shownStepIndex];

    return (
      <div className="step-content__background">
        <CenteredContainerInner standard={false}>
          {this.renderControls()}
          <StepNavigation
            shownStepIndex={shownStepIndex}
            setShownStepIndex={this.setShownStepIndex}
            stepConfig={stepConfig}
          />
          <div className="step-content__image-container">
            <div className="step-content__image-overlay" />
            <ReactCSSTransitionGroup
              transitionName={`step-content__image-${changeDirection}-animation`}
              transitionEnterTimeout={1000}
              transitionLeaveTimeout={1000}
            >
              <div key={currentStep.title}>
                <div className="step-content__image-outer">
                  <div className="step-content__image-inner">
                    <div
                      style={{backgroundImage: `url(${currentStep.image})`}}
                      className="step-content__image"
                    />
                  </div>
                </div>
              </div>
            </ReactCSSTransitionGroup>
          </div>
          <div
            className="step-content__text"
            style={{height: `${this.state.textContainerElementHeight}px`}}
          >
            <ReactCSSTransitionGroup
              transitionName={`step-content__text-${changeDirection}-animation`}
              transitionEnterTimeout={1200}
              transitionLeaveTimeout={1000}
            >
              <div
                className="step-content__text-inner"
                key={currentStep.title}
              >
                <div ref={this.setTextContainerElementRef}>
                  <h2>
                    <BinaryText isInverted={true}>
                      {currentStep.title}
                    </BinaryText>
                  </h2>
                  <p>{currentStep.text}</p>
                  <ButtonPrimary to={currentStep.link}>
                    Learn more
                  </ButtonPrimary>
                </div>
              </div>
            </ReactCSSTransitionGroup>
          </div>
        </CenteredContainerInner>
      </div>
    );
  }
  renderControls() {
    const {shownStepIndex} = this.state;

    const prevClass = classNames('steps-controls__prev', {
      'disabled': shownStepIndex === 0
    })

    const nextClass = classNames('steps-controls__next', {
      'disabled': shownStepIndex === stepConfig.length - 1
    })

    return (
      <div className="steps-controls">
        <button
          className={prevClass}
          onClick={this.handlePrev}
        >
          <img src={arrowLeft} />
        </button>
        <button
          className={nextClass}
          onClick={this.handleNext}
        >
          <img src={arrowRight} />
        </button>
      </div>
    )
  }
  render() {
    const {shownStepIndex} = this.state;

    return (
      <div>
        <CenteredContainerInner color="white">
          <div  className="text-center">
            <h1>AN END TO END SOLUTION</h1>
            <div className="divider divider__red" />
            <p className="text-constrained">
              In order to effectively educate and employ our students we’ve developed a funnel with overlapping means of engagement.
            </p>
          </div>
        </CenteredContainerInner>
        {this.renderStep()}
      </div>
    );
  }
}

export default Steps;
