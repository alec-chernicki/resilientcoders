import './Coworking.scss';
import React from 'react';
import {Link} from 'react-router';
import ButtonPrimary from '../../../components/Buttons/ButtonPrimary';
import coworkingImage from './corworking.png';

const Coworking = () => {
  return (
    <div className="coworking">
      <img className="coworking-image" src={coworkingImage} />
      <div className="coworking-text">
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

    </div>
  );
};

export default Coworking;
