import React from 'react';
import ButtonPrimary from '../../../../components/Buttons/ButtonPrimary';

const CoworkingStep = () => {
  return (
    <div>
      <h2>Coworking</h2>
      <p>
        Coworking presents our students with an opportunity to
        hang out in a safe space together, meet other young coders, and interact with tech
        professionals as they further explore web development at their pace.
      </p>
      <ButtonPrimary to="/get-involved/student">
        LEARN MORE
      </ButtonPrimary>
    </div>
  );
};

export default CoworkingStep;
