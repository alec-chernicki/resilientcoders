import React, { PureComponent } from 'react';
import UIButton from 'UILibrary/button/UIButton';
import styles from './BlogPostCardPrimary.scss';

class BlogPostCardPrimary extends PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        const { index, post } = this.props;
        return (
            <div key={post.title} className="blog-post-card primary">
                <div className="blog-post-card-content">
                    <h4>{post.categories[0].name}</h4>
                    <h1>{post.title}</h1>
                    <UIButton to="/bootcamp/roster">
                        Read Post
                    </UIButton>
                </div>
                <div className="blog-post-card-image">
                    <img src={post.featured_image} alt={post.title} />
                </div>
            </div>
        )
    }

}

export default BlogPostCardPrimary;