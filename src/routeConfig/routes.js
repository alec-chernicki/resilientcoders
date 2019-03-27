import React from 'react';
import Home from '../pages/Home/Home';

import GetInvolvedPage from '../pages/GetInvolvedPage/GetInvolvedPage';
import GetInvolvedVolunteer from '../pages/GetInvolvedPage/GetInvolvedVolunteer/GetInvolvedVolunteer';
import GetInvolvedCompany from '../pages/GetInvolvedPage/GetInvolvedCompany/GetInvolvedCompany';
import GetInvolvedThankYou from '../pages/GetInvolvedPage/GetInvolvedThankYou/GetInvolvedThankYou';
import GetInvolvedStudent from '../pages/GetInvolvedPage/GetInvolvedStudent/GetInvolvedStudent';

import Hire from '../pages/Hire/Hire';
import Team from '../pages/Team/Team';
import News from '../pages/News/News';
import Bootcamp from '../pages/Bootcamp/Bootcamp';

import Roster from '../pages/Bootcamp/Roster/Roster';
import RosterMember from '../pages/Bootcamp/Roster/RosterMember/RosterMember';
import rosterMembersConfig from '../pages/Bootcamp/Roster/rosterMembersConfig';

import Playbook from '../pages/Playbook/Playbook';

import {Route, Redirect, Switch} from 'react-router';
// import App from '../App';

const rosterMemberRoutes = rosterMembersConfig.map((item, key) => {
  return (
    <Route
      key={key}
      path="/bootcamp/roster/:memberName"
      component={RosterMember}
    />
  )
});
export default class Routes extends React.Component {
  render() {
    const {children, location} = this.props;
    return (
      <Switch location={location}>
        <Route path="/" component={Home} />
        <Route path="/bootcamp" component={Bootcamp} />
        <Route path="/bootcamp/roster" component={Roster} />
        {rosterMemberRoutes}
        <Route path="/hire" component={Hire}/>
        <Route path="/team" component={Team}/>
        <Route path="/news" component={News}/>
        <Route path="/diversityplaybook" component={Playbook}/>
        <Route path="/get-involved" component={GetInvolvedPage}/>
        <Route path="/get-involved/company" component={GetInvolvedCompany}/>
        <Route path="/get-involved/volunteer" component={GetInvolvedVolunteer}/>
        <Route path="/get-involved/student" component={GetInvolvedStudent}/>
        <Route path="/get-involved/thankyou" component={GetInvolvedThankYou}/>

        <Redirect from="mentor" to='volunteer' />
        <Redirect from="*" to="/" />
        {/* <Redirect to="/" /> */}
    </Switch>
    )
  }
}
// export default(
//   <Switch>
//       <Route path="/" component={Home} />
//       <Route path="/bootcamp" component={Bootcamp} />
//       <Route path="/bootcamp/roster" component={Roster} />
//       {rosterMemberRoutes}
//       <Route path="/hire" component={Hire}/>
//       <Route path="/team" component={Team}/>
//       <Route path="/news" component={News}/>
//       <Route path="/diversityplaybook" component={Playbook}/>
//       <Route path="/get-involved" component={GetInvolvedPage}/>
//       <Route path="/get-involved/company" component={GetInvolvedCompany}/>
//       <Route path="/get-involved/volunteer" component={GetInvolvedVolunteer}/>
//       <Route path="/get-involved/student" component={GetInvolvedStudent}/>
//       <Route path="/get-involved/thankyou" component={GetInvolvedThankYou}/>

//       <Redirect from="mentor" to='volunteer' />
//       <Redirect from="*" to="/" />
//       {/* <Redirect to="/" /> */}
//   </Switch>
// );
