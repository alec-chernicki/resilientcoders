import './Footer.scss'
import React from 'react'
import axios from 'axios'
import Tweet from '../../components/Tweet/Tweet';

class Footer extends React.Component {
  render () {
    return (
      <footer>
        <div>
          <p>50 Milk Street, 17th Floor. Boston, MA 02109</p>
          <p>
            Questions? Email:&nbsp;
            <a href="mailto:david@resilientcoders.org">
              david@resilientcoders.org
            </a>
          </p>
          <p>Photography, video, and music by&nbsp;
            <a href="http://www.asithappens.tv/">
              Andy Laub
            </a>, of As It Happens Films</p>
          <p>Website designed and developed by&nbsp;
            <a href="http://www.alecortega.com/">
              Alec Ortega
            </a>
          </p>
          <p>© 2016 Resilient Coders.</p>
        </div>
        <div>
          <h3>Most recent tweet:</h3>
          <p>
            <Tweet />
          </p>
        </div>
      </footer>
    )
  }
}

export default Footer;
