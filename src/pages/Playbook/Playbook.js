import './Playbook.scss';
import React from 'react';
import RouteTransition from '../../components/RouteTransition/RouteTransition';
import UIButton from 'UILibrary/button/UIButton'
import EmailFormLong from '../../components/EmailForms/EmailFormLong';
import companyImage from './get-involved-company.jpg';
import Helmet from 'react-helmet';

import UIFlexRow from 'UILibrary/grid/UIFlexRow';
import UIFlex from 'UILibrary/grid/UIFlex';
import UISection from 'UILibrary/layout/UISection';
import UILayout from 'UILibrary/layout/UILayout';
import UILayer from 'UILibrary/layer/UILayer';
import UISkewedLayer from 'UILibrary/layer/UISkewedLayer';

const DIVERSITY_PLAYBOOK_FORM_URL = '/api/subscribe/diversityplaybook';
const PLAYBOOK_URL = 'https://cdn2.hubspot.net/hubfs/2253693/Docs/DiversityPlaybook.pdf';

class Playbook extends React.PureComponent {
  handleSubmit() {
    window.open(PLAYBOOK_URL, '_blank');
  }
  render () {
    return (
      <RouteTransition>
        <Helmet title="The Diversity Playbook" />

        <UILayout className="p-top-of-page p-bottom-10">
          <UILayer image={companyImage} />
          <UISkewedLayer className="index-1" />
          <UISection className="index-2">
            <UIFlexRow>
              <UIFlex className="p-x-6 p-top-3 m-bottom-6">
                <h1>The Diversity Playbook</h1>
                <div className="divider" />
                <p className="text-on-dark">
                  A short guide that demonstrates how diversity is better for
                  business, and offers a framework with which to develop a
                  diversity campaign that works for your company.
                </p>
                <p className="text-on-dark">
                  The diversity crisis is too important for us to keep guessing
                  at what works and what doesn’t work. You wouldn’t do that
                  with your product. Let’s do this the right way.
                  Get the data. Adapt the framework. Have the conversations.
                  Set KPI’s. Build. Measure. Pivot. Repeat.
                </p>
              </UIFlex>
              <UIFlex>
                <EmailFormLong
                  title="Get the Playbook"
                  formUrl={DIVERSITY_PLAYBOOK_FORM_URL}
                  onSubmit={this.handleSubmit}
                />
              </UIFlex>
            </UIFlexRow>
          </UISection>
        </UILayout>

        <UILayout>
          <UISection className="text-center p-all-6">
            <h2>
              Interested in other opportunities?
            </h2>
            <p>
              There are multiple ways to promote diversity in your company.
            </p>
            <UIButton to="/get-involved/company">
              Get Involved
            </UIButton>
          </UISection>
        </UILayout>



      </RouteTransition>
    )
  }
}

export default Playbook;
