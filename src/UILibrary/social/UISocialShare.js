import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';
import styles from './UISocialShare.css';
import {
    FacebookShareButton, FacebookIcon,
    LinkedinShareButton, LinkedinIcon,
    TwitterShareButton, TwitterIcon,
    RedditShareButton, RedditShareCount, RedditIcon,
    EmailShareButton, EmailIcon,
  } from 'react-share';

const typeProps = {
  'row': 'row',
  'column': 'column',
};

class UISocialShare extends React.Component {
    render() {
        const { className, type, style, shareUrl } = this.props;
        const socialShareClass = classNames({
            [typeProps.row]: type === typeProps.row,
            [typeProps.column]: type === typeProps.column,
        });
        return (
            <div styleName={`social-share-${type}`} className={`${className} ${socialShareClass}` }>
                    {/* props: hashtag, quote */}
                    <FacebookShareButton url={shareUrl}> 
                        <FacebookIcon 
                            size={36} round={true} 
                            iconBgStyle={ { fill: 'transparent' } } logoFillColor="#4f5a60"
                        />
                        <p className="m-y-0">Share</p>
                    </FacebookShareButton>
                    {/* props: title, description */}
                    <LinkedinShareButton url={shareUrl}>
                        <LinkedinIcon 
                            size={36} round={true} 
                            iconBgStyle={ { fill: 'transparent' } } logoFillColor="#4f5a60"
                        />
                        <p className="m-y-0">Share</p>
                    </LinkedinShareButton>
                    {/* props: hashtags [], title, via */}
                    <TwitterShareButton url={shareUrl}>
                        <TwitterIcon 
                            size={36} round={true} 
                            iconBgStyle={ { fill: 'transparent' } } logoFillColor="#4f5a60"
                        />
                        <p className="m-y-0">Tweet</p>
                    </TwitterShareButton>
                    {/* props: title */}
                    <EmailShareButton url={shareUrl}>
                        <EmailIcon
                            size={36} round={true} 
                            iconBgStyle={ { fill: 'transparent' } } logoFillColor="#4f5a60"
                        />
                        <p className="m-y-0">Email</p>
                    </EmailShareButton>
                
            </div>
        );
    }
}

UISocialShare.defaultProps = {
  type: typeProps.default
};

UISocialShare.propTypes = {
  type: PropTypes.string,
};

export default CSSModules(UISocialShare, styles);
