import './StepContent.scss';
import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import StepOneVerticalImage from './step-one-vertical.png';
import StepOneHorizontalImage from './step-one-horizontal.png';
import Parallax from '../../../../components/Effects/Parallax';

const FirstStepContent = (props) => {

  return (
    <div className="step-section first-step-section">
      <div className="step-text">
        <h2>Bootcamp</h2>
        <p>
          For seven weeks, daily, a select cohort of early-career individuals meet to receive direct instruction from tech professionals on front-end development skills.
        </p>
        <p>
          By the end of their time with us, they have solid proficiency in semantically structured HTML, well-crafted and responsive CSS, JavaScript fundamentals, jQuery, and Git. They have an appreciation for progressive enhancement, accessibility, and usability. At the end, we recruit out of our Bootcamp into Resilient Lab.
        </p>
        <Link to="/bootcamp" className="button">
          LEARN MORE
        </Link>
      </div>
      <Parallax
        from={0}
        to={0}
        className="first-step-image-one"
      >
        <img src={StepOneHorizontalImage} />
      </Parallax>
      <Parallax
        from={0}
        to={0}
        className="first-step-image-two"
      >
        <img src={StepOneVerticalImage} />
      </Parallax>
    </div>
  );
};

export default FirstStepContent;
