import './StepContent.scss';
import React from 'react'
import { Link } from 'react-router';
import StepOneVerticalImage from './step-one-vertical.png';
import StepOneHorizontalImage from './step-one-horizontal.png';
import ButtonPrimary from '../../../../components/Buttons/ButtonPrimary';

const SecondStepContent = (props) => {
  return (
    <div className="step-section second-step-section">
      <div className="step-text">
        <h2>Resilient Lab</h2>
        <p>
          We run a web development agency that provides meaningful employment opportunities for our
          highest-performing youth. We've designed and built websites for local startups, non
          profits, schools, and small businesses.
        </p>
        <p>
          During their apprenticeship with us at Resilient Lab, youth coders continue learning
          JavaScript, explore additional skills and frameworks as identified by hiring
          partners, and visit local tech companies.
        </p>
        <ButtonPrimary to="/lab">
          LEARN MORE
        </ButtonPrimary>
      </div>
      <img src={StepOneHorizontalImage} role="presentation" className="step-two-horizontal-image" />
      <img src={StepOneVerticalImage} alt="Student working with Resilient Lab" className="step-two-vertical-image" />
    </div>
  );
};

export default SecondStepContent;
