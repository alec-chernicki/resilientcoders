import styles from './Blog.scss';
import CSSModules from 'react-css-modules';
import React, { PureComponent } from 'react';
import RouteTransition from 'components/RouteTransition/RouteTransition';
import UIButton from 'UILibrary/button/UIButton';
import UILayout from 'UILibrary/layout/UILayout';
import BlogPost from './BlogPost/BlogPost';
import BlogPostCardPrimary from './BlogPostCardPrimary/BlogPostCardPrimary';
import BlogPostCardSecondary from './BlogPostCardSecondary/BlogPostCardSecondary';
import BlogPostCard from './BlogPostCard/BlogPostCard';

import Butter from 'buttercms';
const butter = Butter('3b949f80849c37c52f9a9bb1a7c5d5d393e7895b');

class Blog extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            content: [],
            isLoading: false,
            error: null
        };
    }
    componentDidMount() {
        let data = butter.post.list({ })
            .then(response => {
                if (response.status == 200) {
                    console.log(response.data);
                    return response.data.data;
                } else {
                    throw new Error('Something went wrong ...');
                }
            })
            .then(data => this.setState({ content: data, isLoading: false }))
            .then(() => console.log(this.state.content))
            .catch(error => this.setState({ error, isLoading: false }));

    }
    render() {

        let { content, isLoading, error } = this.state;

        if (error) {
            return <p>{error.message}</p>;
        }

        if (isLoading) {
            return <h1>Loading the page right now chief...</h1>;
        }

        return (
            <section>
                <UILayout className="p-top-of-page p-bottom-6">
                {
                    content.map( (post, index) => {
                        switch (index) {
                            case 0 :
                                return <BlogPostCardPrimary post={post} key={index}/>;
                            case 1 :
                            case 2 :
                            case 3 :
                                return <BlogPostCardSecondary post={post} key={index}/>
                            default:
                                return <BlogPostCard post={post} key={index}/>
                        }
                    }
                )}
                </UILayout>
            </section>
        )
    }
}

export default CSSModules(Blog, styles);