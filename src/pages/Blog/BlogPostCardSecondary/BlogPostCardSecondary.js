import React, { PureComponent } from 'react';
import UIButton from 'UILibrary/button/UIButton';
import styles from './BlogPostCardSecondary.scss';
import MediaQuery from 'react-responsive';

class BlogPostCardSecondary extends PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        const { index, post } = this.props;
        return (
            <div key={post.title} className="blog-post-card secondary">
                <div className="blog-post-card-content">
                    <h4>{post.categories[0].name}</h4>
                    <h3>{post.title}</h3>
                </div>
            </div>
        )
    }

}

export default BlogPostCardSecondary;