import './Alumni.scss';
import React from 'react'

class Alumni extends React.Component {
  render() {
    return (
      <div className="write-off">
        <div className="write-off-image write-off-image-left">
          <div>
            <h1>50%</h1>
            <h2>Learning</h2>
          </div>
        </div>
        <div className="write-off-image write-off-image-right">
          <div>
            <h1>50%</h1>
            <h2>Building</h2>
          </div>
        </div>
      </div>
    )
  }
}

export default Alumni;
