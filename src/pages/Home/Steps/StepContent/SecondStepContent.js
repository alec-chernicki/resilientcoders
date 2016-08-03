import './StepContent.scss';
import React, { PropTypes } from 'react'
import { Link } from 'react-router';
import FirstStepImage from '../../coding-camp.png';
import StepOneVerticalImage from './step-one-vertical.png';
import StepOneHorizontalImage from './step-one-horizontal.png';
import Parallax from '../../../../components/Effects/Parallax';

const SecondStepContent = (props) => {
  return (
    <div className="step-section second-step-section">
      <div className="step-text">
        <h2>Resilient Lab</h2>
        <p>
          We run a web development shop that provides meaningful employment opportunities for our highest-performing youth. Client projects include design and development of City Awake, and designing the interface for the iPhone app released by Wanderu, a local tech startup.
        </p>
        <p>
          Probably some more text here. Probably some more text here. Probably some more text here. Probably some more text here. Probably some more text here.
        </p>
        <Link to="/lab" className="button">
          LEARN MORE
        </Link>
      </div>
      <Parallax
        from={0}
        to={0}
        className="second-step-image-one"
      >
        <img src={StepOneHorizontalImage} />
      </Parallax>
      <Parallax
        from={0}
        to={-0}
        className="second-step-image-two"
      >
        <img src={StepOneVerticalImage} />
      </Parallax>
    </div>
  );
};

export default SecondStepContent;
