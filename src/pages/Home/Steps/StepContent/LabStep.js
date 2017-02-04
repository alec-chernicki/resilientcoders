import React from 'react'
import ButtonPrimary from '../../../../components/Buttons/ButtonPrimary';

const LabStep = (props) => {
  return (
    <div>
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
  );
};

export default LabStep;
