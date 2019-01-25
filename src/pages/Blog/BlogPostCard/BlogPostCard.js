import React, { PureComponent } from 'react';
import UIButton from 'UILibrary/button/UIButton';
import {Link} from 'react-router';
import styles from './BlogPostCard.scss';
import MediaQuery from 'react-responsive';

class BlogPostCard extends PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        const { post } = this.props;
        const { 
            title, 
            categories, 
            slug,
            featured_image
        } = post;

        return (
            <Link key={title} className="blog-post-card default" to={`/blog/post/${slug}`}>
                <div className={`blog-post-card-content ${featured_image ? 'with-image' : ''}`}>
                    <small>{categories[0].name ? categories[0].name : "Post"}</small>
                    <p>{title}</p>
                    <UIButton to={`/blog/post/${slug}`}>
                        Read Post
                    </UIButton>
                </div>
                { 
                    post.featured_image &&
                    <div className="blog-post-card-image">
                        <img src={featured_image} alt={title} />
                    </div>
                }
            </Link>
        )
    }
}

export default BlogPostCard;