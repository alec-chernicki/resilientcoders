import React, { PureComponent } from 'react';
import UIButton from 'UILibrary/button/UIButton';
import {Link} from 'react-router';
import styles from './BlogPostCardPrimary.scss';
import MediaQuery from 'react-responsive';

class BlogPostCardPrimary extends PureComponent {
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
            <Link key={title} className="blog-post-card primary" to={`/blog/post/${slug}`}>
                <div className="blog-post-card-content">
                    <h4>{categories.length ? categories[0].name : "Post"}</h4>
                    <h2>{title}</h2>
                    <UIButton>
                        Read Post
                    </UIButton>
                </div>
                { 
                    featured_image &&
                    <div className="blog-post-card-image">
                        <img src={featured_image} alt={title} />
                    </div>
                }
            </Link>
        )
    }

}

export default BlogPostCardPrimary;