import React, { PureComponent } from 'react';
import UIButton from 'UILibrary/button/UIButton';
import styles from './BlogPostCard.scss';
import MediaQuery from 'react-responsive';

class BlogPostCard extends PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        const { index, post } = this.props;
        return (
            <div key={post.title} className="blog-post-card">
                <div className="blog-post-card-content">
                    <h4>{post.categories[0].name}</h4>
                    <h3>{post.title}</h3>
                </div>
                <div className="blog-post-card-image">
                    <img src={post.featured_image} alt={post.title} />
                </div>
            </div>
        )
    }

}

export default BlogPostCard;