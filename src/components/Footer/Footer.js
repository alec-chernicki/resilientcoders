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
                <Link className="text-on-dark" to="/bootcamp">About</Link>
                <Link className="text-on-dark" to="/bootcamp/roster">Roster</Link>
              </div>
              <div className="footer-container-links">
                <h3 className="text-white">Lab</h3>
                <Link className="text-on-dark" to="/lab">About</Link>
              </div>
              <div className="footer-container-links">
                <h3 className="text-white">Get Involved</h3>
                <Link className="text-on-dark" to="/get-involved/student">Students</Link>
                <Link className="text-on-dark" to="/get-involved/volunteer">Volunteers</Link>
                <Link className="text-on-dark" to="/get-involved/company">Companies</Link>
              </div>
              <div className="footer-container-info">
                <p className="text-on-dark">
                  50 Milk Street, 17th Floor. Boston, MA 02109
                </p>
                <p className="text-on-dark">
                  Questions? Email:&nbsp;
                  <a
                    className="accent-link-underline text-white"
                    href="mailto:david@resilientcoders.org"
                  >
                    david@resilientcoders.org
                  </a>
                </p>
                <p className="text-on-dark">Photography, video, and music by&nbsp;
                  <a
                    className="accent-link-underline text-white"
                    href="http://www.asithappens.tv/"
                  >
                    Andy Laub
                  </a>, of As It Happens Films
                </p>
                <p className="text-on-dark">Website designed and developed by&nbsp;
                  <a
                    className="accent-link-underline text-white"
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



              <div itemScope itemType="http://schema.org/LocalBusiness">
                <p className="text-white">
                  <span itemProp="name">Resilient Coders</span>
                  <div itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
                    <span itemProp="streetAddress">50 Milk St, Floor 17 </span>
                    <span itemProp="addressLocality">Boston</span>,
                    <span itemProp="addressRegion"> MA</span>
                    <span itemProp="postalCode"> 02109</span>
                  </div>
                  Phone: <span itemProp="telephone">(617)830-6807</span>
                </p>
              </div>




            </div>
          </UISection>
        </UILayout>
      </footer>
    )
  }
}

export default Footer;
