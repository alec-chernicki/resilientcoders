import './Footer.scss'
import React from 'react'
import {Link} from 'react-router';

import twitterIcon from '../../images/twitter.svg';
import facebookIcon from '../../images/facebook.svg';
import UISection from 'UILibrary/layout/UISection';
import UILayout from 'UILibrary/layout/UILayout';

class Footer extends React.PureComponent {
  render () {
    const currentYear = new Date().getFullYear();
    const yearText = `© ${currentYear} Resilient Coders`


    return (
      <footer>
        <UILayout use="tertiary">

          <UISection>
            <div className="footer-container-upper">
              <div className="footer-container-links">
                <h3 className="text-white">Bootcamp</h3>
                <Link to="/bootcamp">About</Link>
                <Link to="/bootcamp/roster">Roster</Link>
              </div>
              <div className="footer-container-links">
                <h3 className="text-white">Lab</h3>
                <Link to="/lab">About</Link>
                <Link href="/quote">Get a quote</Link>
              </div>
              <div className="footer-container-links">
                <h3 className="text-white">Get Involved</h3>
                <Link to="/get-involved/student">Students</Link>
                <Link to="/get-involved/volunteer">Mentors</Link>
                <Link to="/get-involved/company">Companies</Link>
              </div>
              <div className="footer-container-info">
                <p>
                  50 Milk Street, 17th Floor. Boston, MA 02109
                </p>
                <p>
                  Questions? Email:&nbsp;
                  <a
                    className="accent-link-underline"
                    href="mailto:david@resilientcoders.org"
                  >
                    david@resilientcoders.org
                  </a>
                </p>
                <p>Photography, video, and music by&nbsp;
                  <a
                    className="accent-link-underline"
                    href="http://www.asithappens.tv/"
                  >
                    Andy Laub
                  </a>, of As It Happens Films
                </p>
                <p>Website designed and developed by&nbsp;
                  <a
                    className="accent-link-underline"
                    href="http://www.alecortega.com/"
                  >
                    Alec Ortega
                  </a>
                </p>
              </div>
            </div>
            <div className="footer-container-lower">
              <div className="social-container">
                <a href="https://twitter.com/resilientcoders" target="_blank">
                  <img src={twitterIcon} alt="Twitter logo"/>
                </a>
                <a href="https://www.facebook.com/resilientcoders/" target="_blank">
                  <img src={facebookIcon} alt="Facebook logo"/>
                </a>
              </div>
              <p className="text-white">
                {yearText}
              </p>
            </div>
          </UISection>
        </UILayout>
      </footer>
    )
  }
}

export default Footer;
