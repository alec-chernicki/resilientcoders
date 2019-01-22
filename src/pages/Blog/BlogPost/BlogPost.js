import React, { PureComponent } from 'react';
import UIButton from 'UILibrary/button/UIButton';
import UILayout from 'UILibrary/layout/UILayout';
import styles from './BlogPost.scss';
import BlogPostCardPrimary from '../BlogPostCardPrimary/BlogPostCardPrimary';


let primaryBlogPost = (post) => {
    return (
        <BlogPostCardPrimary post = {post} />
    )
}

let secondaryBlogPost = (post) => {
    return (
        <div key={post.title} className="blog-post-card">
            <h4>{post.categories[0].name}</h4>
            <h3>{post.title}</h3>
        </div>
    )
}

let defaultBlogPost = (post) => {
    return (
        <div key={post.title} className="blog-post-card">
            <p>Default</p>
            <h4>{post.categories[0].name}</h4>
            <h1>{post.title}</h1>
        </div>
    )
}

class BlogPost extends PureComponent {
    constructor(props) {
        super(props);
    }
    renderClassNames = () => {
        const { index, post } = this.props;
        switch (index) {
            case 0 :
                return 'primary';
            case 1 :
            case 2 :
            case 3 :
                return 'secondary';
            default : 
                return 'default'
        }
    }
    renderBlogPost = () => {
        const { index, post } = this.props;
        switch (index) {
            case 0 :
                return primaryBlogPost(post);
            case 1 :
            case 2 :
            case 3 :
                return secondaryBlogPost(post);
            default:
                return defaultBlogPost(post);
        }
    }
    render() {
        return (
            <div className={`blog-post ${this.renderClassNames()}`}>
                { this.renderBlogPost() }
            </div>
        )
    }
}

export default BlogPost;