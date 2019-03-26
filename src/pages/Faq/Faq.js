import React from 'react';
import styles from './Faq.css';
import CSSModules from 'react-css-modules';
import RouteTransition from '../../components/RouteTransition/RouteTransition';
import Helmet from 'react-helmet';

import UILayout from 'UILibrary/layout/UILayout';
import UISection from 'UILibrary/layout/UISection';

class Faq extends React.PureComponent {
  componentDidMount() {

  }
  
  render() {
    const qa = [
        {
            question: "What age group is this program for?",
            answer: "Ages 18 to 30 can participate in the bootcamp. Older come to community"
        },
        {
            question: "How much does the bootcamp cost?",
            answer: "The program is free. "
        },
        {
            question: "What is people of color?",
            answer: "The population we serve"
        },
        {
            question: "I have a college degree in another field, can I do the program?",
            answer: "Wow"
        },
        {
            question: "I already have a computer science degree, can I do the program?",
            answer: "Wow"
        },
        {
            question: "Is this program for career changers?",
            answer: "Wow"
        },
        {
            question: "Is this only for residents of Boston?",
            answer: "Wow"
        },
        {
            question: "Do I have to bring my own laptop?",
            answer: "Wow"
        },
        {
            question: "Do you help me get a job?",
            answer: "Wow"
        },
        {
            question: "How are you getting people jobs?",
            answer: "Wow"
        },
        {
            question: "Where are people getting jobs?",
            answer: "Wow"
        },
        {
            question: "How long does it take for somebody to get a job?",
            answer: "On average"
        },
        {
            question: "Can I work while also doing this program?",
            answer: "On average"
        },
        {
            question: "How intense is the program?",
            answer: "On average"
        },
        {
            question: "I am still in school, can I do the program in the summer and then go back to school?",
            answer: "On average"
        },
        {
            question: "My son is graduating high school this year, can he do the program?",
            answer: "On average"
        },
    ]
    return (
      <RouteTransition>
        <Helmet title="FAQ" />
        <UILayout className="p-top-of-page p-bottom-6">
          <UISection>
              <h2>Frequently Asked Questions</h2>
              {
                  qa.map( (qa, i) => {
                      return (
                          <div>
                              <strong>{qa.question}</strong>
                              <p>{qa.answer}</p>
                          </div>
                      );
                  })
                }
          </UISection>
        </UILayout>
      </RouteTransition>
    )
  }
}

export default CSSModules(Faq, styles);
