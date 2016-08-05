import React from 'react';
import Home from '../pages/Home/Home';
import GetInvolvedPage from '../pages/GetInvolvedPage/GetInvolvedPage';
import Lab from '../pages/Lab/Lab';
import Team from '../pages/Team/Team';
import News from '../pages/News/News';
import Bootcamp from '../pages/Bootcamp/Bootcamp';
import { Route, IndexRoute } from 'react-router';
import App from '../App';

export default (
  <Route path="/" component={App}>
    <Route path="bootcamp" component={Bootcamp} key="bootcamp" />
    <Route path="lab" component={Lab} />
    <Route path="team" component={Team} />
    <Route path="news" component={News} />
    <Route path="get-involved" component={GetInvolvedPage} />
    <IndexRoute component={Home} key="home"/>
  </Route>
);
