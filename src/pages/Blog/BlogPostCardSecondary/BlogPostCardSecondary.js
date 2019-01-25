import React, { PureComponent } from 'react';
import {Link} from 'react-router';
import UIButton from 'UILibrary/button/UIButton';
import styles from './BlogPostCardSecondary.scss';
import MediaQuery from 'react-responsive';

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
                    <small>{categories[0].name ? categories[0].name : "Post"}</small>
                    <Link className="text-on-dark" to={`/blog/post/${slug}`}>
                        <p>{title}</p>
                    </Link>
                </div>
            </Link>
        )
    }

}

export default BlogPostCardSecondary;