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
          Our full-day "bootcamp" model is offered in partnership with the Mayor's Office of Public Safety, to young people who are not in school. Students meet for five hours a day, five days a week, for 8 weeks.
        </p>
        <p>
          During this time, they are working out of a coworking space, receiving instruction and direct mentorship from tech professionals. The program is built around key "milestones," identified in our curriculum and informed by the needs of the market.
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
