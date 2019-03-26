import React from 'react';
import styles from './Lab.css';
import CSSModules from 'react-css-modules';
import UIButton from 'UILibrary/button/UIButton';
import RouteTransition from '../../components/RouteTransition/RouteTransition';
import LabHeroImage from './lab-hero.png';
import Helmet from 'react-helmet';

import UILayout from 'UILibrary/layout/UILayout';
import UIImage from 'UILibrary/image/UIImage';
import UISection from 'UILibrary/layout/UISection';
import UICard from 'UILibrary/layout/UICard';
import UIFlexRow from 'UILibrary/grid/UIFlexRow';
import UIFlex from 'UILibrary/grid/UIFlex';
import UILayer from 'UILibrary/layer/UILayer';
import UIHero from 'UILibrary/layout/UIHero';

import workConfig from './workConfig';
import panelLeftImage from './panel-left.png';
import panelRightImage from './panel-right.png';

class Lab extends React.PureComponent {
  renderWork() {
    return workConfig.map((item, key) => {
      return (
        <UIFlexRow key={key} className="m-bottom-6 with-shadow">
          <UIFlex>
            <UIImage type="cover" src={item.image} />
          </UIFlex>
          <UIFlex>
            <UICard className="p-all-6">
              <h2>
                {item.title}
              </h2>
              <h3>
                {item.note}
              </h3>
              <p>
                {item.description}
              </p>
            </UICard>
          </UIFlex>
        </UIFlexRow>
      );
    });
  }
  render() {
    return (
      <RouteTransition>
        <Helmet title="Resilient Lab" />
        <UIHero
          type="default"
          className="hero"
          image={LabHeroImage}
          short={true}
          titleOne="Resilient Lab"
          text="A digital agency that employs our recent graduates to build websites and applications for clients."
        />
        <UILayout>
          <UISection>
            <UIFlexRow className="p-bottom-6">
              <UIFlex basis="60%" className="pull-up-offset-3 index-10 hero-card-second">
                <UICard className="p-all-6 full-height pull-up-3 with-shadow">
                  <h2>Relentlessly Rebuilding</h2>
                  <div className="divider"/>
                  <p>
                    We're a digital design and development agency with a social mission unlike any
                    you've seen. Our coders have been identified and trained through our
                    <a href="/bootcamp" className="accent-link-underline-trigger">
                      <span className="accent-link-underline">
                        &nbsp;Bootcamp
                      </span>
                    </a>
                    , and recruited into the Lab for their aptitude and their grit. Our clients get
                    an exceptional product, while also helping to launch our coders' careers.
                  </p>
                </UICard>
              </UIFlex>
              <UIFlex basis="40%" className="hero-card-first">
                <UICard use="secondary" className="p-all-6 with-shadow full-height">
                  <h3 className="m-top-0">What we do:</h3>
                  <p>UI Design and Development</p>
                  <p>JavaScript Applications</p>
                  <p>Wordpress custom theming</p>
                  <UIButton href="mailto:stephanie@resilientcoders.org">
                    Email to learn more
                  </UIButton>
                </UICard>
              </UIFlex>
            </UIFlexRow>
          </UISection>
        </UILayout>


        <UILayout>
          <UISection className="p-bottom-1">
            {this.renderWork()}
          </UISection>
        </UILayout>

        <UILayout flush={true} use="secondary" className="p-top-6 p-sm-top-0">
          <UIFlexRow>
            <UIFlex className="p-y-20 m-right-6 m-sm-right-0 m-sm-bottom-1">
              <UILayer image={panelLeftImage} dots={false} />
              <div className="position-relative index-1 text-center">
                <h1>50%</h1>
                <h2 className="text-on-dark">Learning</h2>
                <div className="divider" />
              </div>
            </UIFlex>
            <UIFlex className="p-y-20">
              <UILayer image={panelRightImage} dots={false}/>
              <div className="position-relative index-1 text-center">
                <h1>50%</h1>
                <h2 className="text-on-dark">Building</h2>
                <div className="divider" />
              </div>
            </UIFlex>
          </UIFlexRow>
        </UILayout>

        <UILayout className="p-bottom-3">
          <UISection className="with-shadow pull-up-6">
            <UICard className="p-all-6">
              <h2>
                What kind of work can you do?
              </h2>
              <p className="m-bottom-6">
                Just about anything. While it's true that our Technical Fellows are new to the field,
                they are not admitted into the Lab without first having built an application in JavaScript,
                from scratch. Every single member of the Lab has a professional level of proficiency in JavaScript.
                The Lab has built applications in React and Angular, as well as a data visualization app in D3.
                Additionally, all of their work is vetted and guided by seasoned professionals.
              </p>

            </UICard>
          </UISection>
        </UILayout>
      </RouteTransition>
    )
  }
}

export default CSSModules(Lab, styles);
