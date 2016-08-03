import './Home.scss';
import homeVideo from './home-background.mp4';
import React, { Component } from 'react';
import { Link } from 'react-router';
import BinaryText from '../../components/BinaryText/BinaryText';
import EmailFormShort from '../../components/EmailForms/EmailFormShort';
import MicahVideo from './MicahVideo/MicahVideo';
import HomeCarousel from './PhotoCarousel/PhotoCarousel';
import Steps from './Steps/Steps';

class Home extends Component {
  render() {
    return (
      <div>
        <section className="home">
          <div className="home-overlay"></div>
          <div className="video-container">
            <video
              preload="preload"
              poster="data:image/gif,AAAA"
              autoPlay
              muted="muted"
              loop="loop"
            >
              <source src={homeVideo}type="video/mp4" />
            </video>
          </div>
          <div className="section-container-primary">
            <div className="home-container">
              <div className="heading-one">
                <h1>
                  <BinaryText>
                    HACKING THE
                  </BinaryText>
                </h1>
              </div>
              <div className="heading-two">
                <h1>
                  <BinaryText>
                    OPPORTUNITY GAP
                  </BinaryText>
                </h1>
              </div>
              <span className="divider divider__red"></span>
              <p>Spreading code literacy to young people from traditionally underserved communities.</p>
              <a href="#" className="button">LEARN MORE</a>
            </div>
          </div>
        </section>
        <div>
          <div className="program">
            <div className="section-overview">
              <div className="section-overview-container">
                <div className="program-text">
                  <h1>OUR MISSION</h1>
                  <p>
                    We have a&nbsp;
                    <span className="text-link">multi-tiered program</span>
                    &nbsp;that funnels students from learning HTML after school, through our downtown "Coworking" sessions, and ultimately, hourly employment.
                  </p>
                  <p>
                    Our higher performers participate in&nbsp;
                    <Link to="/lab">Resilient Lab</Link>
                    , a web design and development shop with real clients. Aligning them with a lucrative and meaningful career path.
                  </p>
                </div>
                <HomeCarousel />
              </div>
            </div>
            <MicahVideo />
            <div className="tiered-program-background">
              <div className="call-to-action-container clearfix">
                <div className="section-main section-tertiary section-tertiary__alert call-to-action">
                  <div className="section-container-primary">
                    <p>There's more than one way to join the code literacy movement.</p>
                    <Link to="/get-involved" className="button button__slice">
                      <span>GET INVOLVED</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="tiered-program">
                <h1>AN END TO END SOLUTION</h1>
                <p>In order to effectively educate and employ our students we’ve developed a funnel with overlapping means of engagement.</p><span className="divider divider__red"></span>
                <Steps />
              </div>
              <EmailFormShort />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
