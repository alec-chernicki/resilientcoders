import './Navigation.scss';
import React from 'react';

import logoRed from './logo_red.png';
import {Link} from 'react-router';
import Headroom from 'react-headroom';

const Navigation = () => (
  <Headroom>
    <Link to="/" className="nav-logo">
      <img src={logoRed} alt="Resilient Coders logo"/>
    </Link>
    <ul className="nav-links">
      <li>
        <Link to="/bootcamp">Bootcamp</Link>
      </li>
      <li>
        <Link to="/lab">Lab</Link>
      </li>
      <li>
        <Link to="/news">News</Link>
      </li>
      <li>
        <Link to="/team">Team</Link>
      </li>
      <li>
        <Link to="/get-involved">Get Involved</Link>
      </li>
    </ul>
  </Headroom>
)

export default Navigation
