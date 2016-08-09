import './Lab.scss';
import React, { PropTypes } from 'react';
import BinaryText from '../../components/BinaryText/BinaryText';
import Work from './Work/Work';
import HalfPanels from './HalfPanels/HalfPanels';
import Alumni from './Alumni/Alumni';
import scrollTime from '../../routeConfig/routeTransition';



class Lab extends React.Component {
  componentDidMount () {
    setTimeout(() => {
      document.body.scrollTop = 0;
    }, scrollTime.scrollTime)
  }
  render () {
    return (
      <div>
        <div className="lab">
          <div className="section-container-primary">
            <h1 className="heading-one">
              <BinaryText>
                A new kind of
              </BinaryText>
            </h1>
            <h1 className="heading-two">
              <BinaryText>
                digital agency
              </BinaryText>
            </h1>
            <a href="http://resilientcoders.org/quote/" target="blank" className="button">Get a quote</a>
          </div>
        </div>
        <div className="lab-about">
          <div className="section-container-secondary lab-about-container">
            <div className="lab-abilities">
              <p className="lab-abilities-title">
                What we do:
              </p>
              <p>Front End Development</p>
              <p>UI Design and & Prototyping</p>
              <p>UX Research</p>
            </div>
            <div className="lab-description">
              <h1>Your next project is a write-off</h1>
              <div className="divider divider__red" />
              <p>
                We're a digital design and development agency with a social mission unlike any you've seen. Our coders have been identified and trained through our
                <a href="#" className="accent-link-underline-trigger">
                  <span className="accent-link-underline"> Bootcamp</span>
                </a>
                , and recruited into the Lab for their aptitude and their grit. Our clients get an exceptional product, while also helping to launch our coders' careers. Something about how a company has half of their project as a write off to relate back to the heading of the page.
              </p>
            </div>
          </div>
        </div>
        <HalfPanels />
        <Work />
        <Alumni />
        <div className="centered-container-outer">
          <div className="call-to-action-container clearfix">
            <div className="section-main section-tertiary section-tertiary__alert call-to-action lab-cta">
              <div className="section-container-primary">
                <p>
                  Need an estimate? Use our quote generator to see how much your project will cost.
                </p>
                <a className="button button__slice" target="blank" href="http://resilientcoders.org/quote">
                  <span>GET A QUOTE</span>
                </a>
              </div>
            </div>

            <div className="centered-container-inner lab-faq">
              <h1>How It All Works</h1>
              <span className="divider divider__red" />
              <div className="faq">
                <h2>
                  What sort of stuff can you do?
                </h2>
                <p>
                  Our young people are most comfortable with relatively simple websites, and custom Wordpress theming. But our partnership with East Coast Product allows us to do pretty much anything. We've teamed up to build software using React, for example. Our friends at ECP delegated out to our students the work that was appropriate to their skills; a set that grew over the course of the project. Whether or not we're working with ECP on a particular project, every line of code that goes out is vetted by a professional. We hold our youth to professional standards.
                </p>
                <h2>
                  How does the money work?
                </h2>
                <p>
                  Basically, half of the money that we make on a Resilient Lab project goes to pay for the wages of those who worked on it. The other half is invested in their education. The idea is that a young person will be hired to build something that lies just outside the realm of his expertise. He will be paired up with a more senior-level person who then delegates skill-appropriate work to the young person, and mentors him throughout the job. They may spend an hour learning, for every hour spent working. Our quote covers the instructor's time, and the youth coder's time, with the understanding that half of their time was spent learning.
                </p>
                <h2>
                  So, can I write it off my taxes as a donation?
                </h2>
                <p>
                  Some of it, yes. Your invoice will itemize out the straight cost of building your project, versus the investment you're making in our coders' education. Within the hourly rate that you're quoted, usually half of that is a donation, and will be spent on training the coders to be ready to work on your project. The other half is your payment for a service. This will vary depending on the specific needs of a project. We'll be transparent about those proportions when we start.
                </p>
              </div>
            </div>
            <div className="section-main section-tertiary section-tertiary__subtle">
              <div className="section-container-primary">
                <p>
                  Ready to get started?
                </p>
                <a className="button" target="blank" href="http://resilientcoders.org/quote">
                  <span>Start your project</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Lab
