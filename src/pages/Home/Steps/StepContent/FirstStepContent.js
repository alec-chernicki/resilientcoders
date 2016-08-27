import './StepContent.scss';
import React from 'react';
import {Link} from 'react-router';
import StepOneVerticalImage from './step-one-vertical.png';
import StepOneHorizontalImage from './step-one-horizontal.png';
import ButtonPrimary from '../../../../components/Buttons/ButtonPrimary';

const FirstStepContent = () => {

  return (
    <div className="step-section first-step-section">
      <div className="step-text">
        <h2>Resilient Bootcamp</h2>
        <p>
          For seven weeks, daily, a select cohort of early-career individuals meet to
          receive direct instruction from tech professionals on front-end development
          skills.
        </p>
        <p>
          By the end of their time with us, they have solid proficiency in semantically
          structured HTML, well-crafted and responsive CSS, JavaScript fundamentals,
          jQuery, and Git. They have an appreciation for progressive enhancement,
          accessibility, and usability. At the end, we recruit out of our Bootcamp into
          Resilient Lab.
        </p>
        <ButtonPrimary to="/bootcamp">
          LEARN MORE
        </ButtonPrimary>
      </div>
      <img src={StepOneHorizontalImage} role="presentation" className="step-one-horizontal-image" />
      <img src={StepOneVerticalImage} alt="Student working at Resilient Bootcamp" className="step-one-vertical-image" />
    </div>
  );
};

export default FirstStepContent;
