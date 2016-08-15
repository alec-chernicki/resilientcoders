import './Timeline.scss';
import React from 'react'
import {Link} from 'react-router';
import TimelineProgressBar from './TimelineProgressBar/TimelineProgressBar';
import BinaryText from '../../../components/BinaryText/BinaryText';
import careerRight from './career-right.jpg';
import careerLeft from './career-left.jpg';

const Timeline = () => {
  return (
    <div>
      <h2 className="timeline-start">
        DETERMINATION
      </h2>
      <div className="timeline">
        <TimelineProgressBar/>
        <div className="timeline-row">
          <div className="timeline-text">
            <div>
              <h2>
                HTML
              </h2>
              <p>
                We have a program that funnels students from learning HTML after school, through
                our downtown "Coworking" sessions, and ultimately, hourly employment.
              </p>
            </div>
          </div>
          <div>
            <div className="timeline-image one">
              <div className="timeline-image-description-container">
                <div className="timeline-image-description">
                  Week 1
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="timeline-row">
          <div>
            <div className="timeline-image two">
              <div className="timeline-image-description-container">
                <div className="timeline-image-description">
                  Week 3
                </div>
              </div>
            </div>
          </div>
          <div className="timeline-text">
            <div>
              <h2>
                CSS
              </h2>
              <p>
                We have a program that funnels students from learning HTML after school, through
                our downtown "Coworking" sessions, and ultimately, hourly employment.
              </p>
            </div>
          </div>
        </div>
        <div className="timeline-row">
          <div className="timeline-text">
            <div>
              <h2>
                JAVASCRIPT
              </h2>
              <p>
                We have a program that funnels students from learning HTML after school, through
                our downtown "Coworking" sessions, and ultimately, hourly employment.
              </p>
            </div>
          </div>
          <div>
            <div className="timeline-image three">
              <div className="timeline-image-description-container">
                <div className="timeline-image-description">
                  WEEK 5
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="timeline-end">
        <Link to="/get-involved">
          <img className="timeline-end-image-left" src={careerLeft} role="presentation" />
        </Link>
        <div className="timeline-end-text">
          <h1>
            A Career
          </h1>
          <div className="divider divider__red"/>
          <p>
            After our students are finished with their training they can either be hired
            directly into an internship or transfer over to Resilient Lab, our digital
            agency to take on real work for real clients.
          </p>
        </div>
        <Link to="/lab">
          <img className="timeline-end-image-right" src={careerRight} role="presentation" />
        </Link>
      </div>
    </div>
  )
}

export default Timeline
