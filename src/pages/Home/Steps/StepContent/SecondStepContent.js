import './StepContent.scss';
import React from 'react'
import { Link } from 'react-router';
import StepOneVerticalImage from './step-one-vertical.png';
import StepOneHorizontalImage from './step-one-horizontal.png';

const SecondStepContent = (props) => {
  return (
    <div className="step-section second-step-section">
      <div className="step-text">
        <h2>Resilient Lab</h2>
        <p>
          We run a web development agency that provides meaningful employment opportunities for our highest-performing youth. We've designed and built websites for local startups, non profits, schools, and small businesses.
        </p>
        <p>
          Probably some more text here. Probably some more text here. Probably some more text here. Probably some more text here. Probably some more text here.
        </p>
        <Link to="/lab" className="button">
          LEARN MORE
        </Link>
      </div>
      <img src={StepOneHorizontalImage} role="presentation" className="step-two-horizontal-image" />
      <img src={StepOneVerticalImage} alt="Student working with Resilient Lab" className="step-two-vertical-image" />
    </div>
  );
};

export default SecondStepContent;
