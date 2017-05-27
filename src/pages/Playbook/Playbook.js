import './Playbook.scss';
import React from 'react';
import RouteTransition from '../../components/RouteTransition/RouteTransition';
import UIButton from 'UILibrary/button/UIButton'
import SideBySide from '../../components/Containers/SideBySide/SideBySide';
import SideItem from '../../components/Containers/SideBySide/SideItem/SideItem';
import EmailFormLong from '../../components/EmailForms/EmailFormDiversity';
import diversityImage from './get-involved-company.jpg';
import Hero from '../../components/Containers/Hero/Hero';
import contractLabImage from './get-involved-lab.jpg';
import hireStudentsImage from './get-involved-dunia.jpg';
import Helmet from 'react-helmet';

const DIVERSITYPLAYBOOK_FORM_URL = '/api/subscribe/diversityplaybook';

class Playbook extends React.PureComponent {
  render () {
    return (
      <RouteTransition>
        <Helmet title="The Diversity Playbook" />
        <Hero
          image={diversityImage}
          titleLineOne="The Diversity Playbook"
          short={true}
        >
          <div className="divider divider__red" />
          <p>
            A short guide that demonstrates how diversity is better for business, and offers a framework with which to develop a diversity campaign that works for your company.
          </p>
        </Hero>

        <SideBySide color="white">
          <SideItem className="p-y-6">
            <h2>
              Build your framework
            </h2>
            <p>
              The diversity crisis is too important for us to keep guessing at what works and what doesn’t work. You wouldn’t do that with your product. Let’s do this the right way.
              Get the data. Adapt the framework. Have the conversations. Set KPI’s. Build. Measure. Pivot. Repeat.
            </p>
          </SideItem>
          <SideItem className="pull-up-3" flush={true}>
            <EmailFormLong
              formUrl={DIVERSITYPLAYBOOK_FORM_URL}
            />
          </SideItem>
        </SideBySide>


      </RouteTransition>
    )
  }
}

export default Playbook;
