import './StepContent.scss';
import React from 'react';
import ButtonPrimary from '../../../../components/Buttons/ButtonPrimary';

const BootcampStep = () => {
  return (
    <div>
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
  );
};

export default BootcampStep;
