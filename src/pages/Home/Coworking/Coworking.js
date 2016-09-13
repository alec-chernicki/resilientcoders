import './Coworking.scss';
import React from 'react';
import {Link} from 'react-router';
import ButtonPrimary from '../../../components/Buttons/ButtonPrimary';

const Coworking = () => {
  return (
    <div className="coworking">
      <div>
        <h2>Coworking</h2>
        <p>

          We support our students at any point in their journey with us with

          Coworking presents our students with an opportunity to
          hang out in a safe space together, meet other young coders, and interact with tech
          professionals as they further explore web development at their pace.
        </p>
        <ButtonPrimary to="/get-involved/student">
          LEARN MORE
        </ButtonPrimary>
      </div>

    </div>
  );
};

export default Coworking;
