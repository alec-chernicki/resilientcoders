import React from 'react';
import styles from './Faq.css';
import CSSModules from 'react-css-modules';
import RouteTransition from '../../components/RouteTransition/RouteTransition';
import Helmet from 'react-helmet';

import UILayout from 'UILibrary/layout/UILayout';
import UISection from 'UILibrary/layout/UISection';
import faqConfig from './faqConfig';

class Faq extends React.PureComponent {
  componentDidMount() {

  }
  renderFaqs() {
    return faqConfig.map( (faq, i) => {
        return (
            <details>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
            </details>
        );
    })
  }
  
  render() {
    return (
      <RouteTransition>
        <Helmet title="FAQ" />
        <h2>CREATE SUB HEADER NAV MENU COMPONENT</h2>
        Inspiration:
        https://dribbble.com/shots/5727844-Daily-UI-92-FAQ/attachments
        https://dribbble.com/shots/6186067-FAQ-Daily-UI
        https://dribbble.com/shots/5790901-Benefits/attachments
        https://cdn.dribbble.com/users/6580/screenshots/707693/faq_s.png
        <UILayout use="secondary" className="p-top-of-page">
            <UISection className="p-top-6">
                <h2>We're here to help!</h2>
                <input type="" placeholder="Find an answer"/>
            </UISection>
        </UILayout>
        <UILayout className="p-top-6 p-bottom-6">
          <UISection>
              <h2>Frequently Asked Questions</h2>
              {this.renderFaqs()}
          </UISection>
        </UILayout>
      </RouteTransition>
    )
  }
}

export default CSSModules(Faq, styles);
