import React, { PureComponent } from 'react';
import {Link} from 'react-router';
import styles from './BlogPostCardSecondary.scss';

class BlogPostCardSecondary extends PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        const { post } = this.props;
        const { 
            title, 
            categories, 
            slug,
        } = post;
        
        return (
            <Link key={title} className="blog-post-card secondary" to={`/blog/post/${slug}`}>
                <div className="blog-post-card-content">
                    <small>{categories.length ? categories[0].name : "Post"}</small>
                    <p className="ellipsis">{title}</p>
                </div>
            </Link>
        )
    }

}

export default BlogPostCardSecondary;