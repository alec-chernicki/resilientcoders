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
                    <h5>{categories.length ? categories[0].name : "Post"}</h5>
                    <p className="ellipsis">{title}</p>
                </div>
            </Link>
        )
    }

}

export default BlogPostCardSecondary;