import './Timeline.scss';
import React from 'react'
import {Link} from 'react-router';
import TimelineProgressBar from './TimelineProgressBar/TimelineProgressBar';
import BinaryText from '../../../components/BinaryText/BinaryText';
import careerLeft from './career-right.jpg';
import careerRight from './career-left.jpg';

import Parallax from '../../../components/Effects/Parallax';

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
                Hackathons
              </h2>
              <p>
                We run two hackathons before each Bootcamp, from which we recruit our students.
                They’re each about six hours long, and are meant as a way for staff, alumni, and
                prospective students to get to know each other.
              </p>
            </div>
          </div>
          <div>
            <div className="timeline-image one">
              <div className="timeline-image-description-container">
                <div className="timeline-image-description">
                  Recruitment
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="timeline-row">
          <div>
            <Parallax from={60} to={-60}>
              <div className="timeline-image two">
                <div className="timeline-image-description-container">
                  <div className="timeline-image-description">
                    Week 1
                  </div>
                </div>
              </div>
            </Parallax>
          </div>
          <div className="timeline-text">
            <div>
              <h2>
                Core Skills
              </h2>
              <p>
                Once in Bootcamp, our coders meet daily, for seven weeks, to learn HTML, CSS,
                JavaScript, jQuery, and git, from professionals. Before graduating, they will have
                demonstrated proficiency in semantically structured markup, inheritance and
                specificity, accessibility, progressive enhancement, responsive design, and
                effective use of functions, methods, and variables. They will have built, and
                pushed to GitHub, work that showcases these aptitudes.
              </p>
            </div>
          </div>
        </div>
        <div className="timeline-row">
          <div className="timeline-text">
            <div>
              <h2>
                Soft Skills
              </h2>
              <p>
                Our coders also work on the skills that make the “whole engineer,” during Bootcamp.
                They learn communication techniques, speaking tips, as well as best practices
                around accountability and time management.
              </p>
            </div>
          </div>
          <div>
            <div className="timeline-image three">
              <div className="timeline-image-description-container">
                <div className="timeline-image-description">
                  Week 3
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="timeline-row">
          <div>
            <div className="timeline-image four">
              <div className="timeline-image-description-container">
                <div className="timeline-image-description">
                  WEEK 5
                </div>
              </div>
            </div>
          </div>
          <div className="timeline-text">
            <div>
              <h2>
                Client work
              </h2>
              <p>
                At least once per Bootcamp, we have a “client kickoff meeting,” during which a
                client is invited to present design work for a website they need built. Our coders
                work in teams to build it before the client returns for a presentation and
                hand-off. Students are paid for their time on this, and throughout the Bootcamp.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="timeline-end">
        <img className="timeline-end-image-left" src={careerLeft} role="presentation" />
        <div className="timeline-end-text">
          <h1>
            A Career
          </h1>
          <div className="divider divider__red"/>
          <p>
            We hire some of our own Bootcamp students into an apprenticeship with
            <Link to="/lab">
              &nbsp;Resilient Lab
            </Link>
            , and others go right into an internship leveraging their
            new skills.
          </p>
        </div>
        <img className="timeline-end-image-right" src={careerRight} role="presentation" />
      </div>
    </div>
  )
}

export default Timeline
