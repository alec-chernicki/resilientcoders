import React from 'react';
import Home from '../pages/Home/Home';

import GetInvolvedPage from '../pages/GetInvolvedPage/GetInvolvedPage';
import GetInvolvedMentor from '../pages/GetInvolvedPage/GetInvolvedMentor/GetInvolvedMentor';
import GetInvolvedCompany from '../pages/GetInvolvedPage/GetInvolvedCompany/GetInvolvedCompany';
import GetInvolvedStudent from '../pages/GetInvolvedPage/GetInvolvedStudent/GetInvolvedStudent';

import Lab from '../pages/Lab/Lab';
import Team from '../pages/Team/Team';
import News from '../pages/News/News';
import Bootcamp from '../pages/Bootcamp/Bootcamp';
import Roster from '../pages/Bootcamp/Roster/Roster';

import {Route, IndexRoute} from 'react-router';
import App from '../App';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={Home} key="home"/>
    <Route path="bootcamp">
      <IndexRoute component={Bootcamp} key="bootcamp"/>
      <Route path="roster" component={Roster}/>
    </Route>
    <Route path="lab" component={Lab}/>
    <Route path="team" component={Team}/>
    <Route path="news" component={News}/>
    <Route path="get-involved">
      <IndexRoute component={GetInvolvedPage} />
      <Route path="company" component={GetInvolvedCompany}/>
      <Route path="mentor" component={GetInvolvedMentor}/>
      <Route path="student" component={GetInvolvedStudent}/>
    </Route>
  </Route>
);
