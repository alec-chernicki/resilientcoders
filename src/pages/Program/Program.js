import './Program.scss';
import React, { PropTypes } from 'react'

const Program = (props) => {
  return (
    <div>
      <h1 className="page-title">WHAT WE DO</h1>
      <div className="program">
        <div className="page-hero" />
        <div className="section-main section-overview">
          <div className="section-container-secondary">
            <div className="container-photo container-photo-one">
              <p className="picture-text picture-text-in picture-text-one">
                We have a&nbsp;
                <span className="text-link">multi-tiered program&nbsp;</span>
                that funnels students from learning HTML after school, through our downtown "Coworking" sessions, and ultimately, hourly employment.
              </p>
              <div className="picture-frame js-picture-frame-one" />
            </div>
            <div className="container-photo container-photo-two">
              <div className="picture-frame js-picture-frame-two" />
              <p className="picture-text picture-text-in picture-text-two">
                Our higher performers participate in&nbsp;
                <a href="#">Resilient Lab</a>
                , a web design and development shop with real clients. Aligning them with a lucrative and meaningful career path.
              </p>
            </div>
          </div>
        </div>
        <div className="section-secondary section-micah">
          <div className="section-container-primary">
            <div data-video="micah-video" className="js-video-play video-play" />
            <div className="row">
              <div className="col-sm-6">
                <h1>MICAH'S STORY</h1>
                <span className="divider divider__red"></span>
                <p>Micah is an aspiring engineer. He's our Dev Lead at Resilient Lab, an initiative of Resilient Coders. Earlier this year, he and our Design Lead, Fredy Melo, were accepted into Startup Institute, an intensive 8-week bootcamp. They've since graduated and have begun working for other companies. Hear why web development is so important to Micah.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="section-main section-tertiary">
          <div className="section-container-primary">
            <p>There's more than one way to join the code literacy movement.</p>
            <a href="#" className="button button__slice">
              <span>GET INVOLVED</span>
            </a>
          </div>
        </div>
        <div className="section-main tiered-program">
          <div className="section-container-primary">
            <h1>THE TIERED PROGRAM</h1>
            <p>In order to effectively educate and employ our students we’ve developed a funnel with overlapping means of engagement.</p><span className="divider divider__red"></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Program
