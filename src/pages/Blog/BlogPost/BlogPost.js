import React, { PureComponent } from 'react';
import RouteTransition from 'components/RouteTransition/RouteTransition';
import UILayout from 'UILibrary/layout/UILayout';
import UISection from 'UILibrary/layout/UISection';
import styles from './BlogPost.scss';

import Helmet from "react-helmet";
import {Link} from 'react-router';
import Butter from 'buttercms';
import blogConfig from '../config';
const butter = Butter(blogConfig.buttercms_token);

class BlogPost extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false
        };
    }
    

    componentDidMount() {
        let slug = this.props.params.slug;
        butter.post.retrieve(slug).then((resp) => {
            console.log(resp);
            this.setState({
              loaded: true,
              post: resp.data.data
            })
        });
        console.log(window.location.href);
        console.log(this.props);
        console.log(this.props.params.slug);
    }

    render() {
        if (this.state.loaded) {
            const post = this.state.post;
            let timestampOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            let timestamp = new Date(post.created).toLocaleDateString("en-US", timestampOptions)

            return (
                <RouteTransition>
                    <Helmet>
                        { post.seo_title && <title>{post.seo_title}</title>}
                        { post.meta_description && <meta name="description" content={post.meta_description} /> }
                        { post.featured_image && <meta name="og:image" content={post.featured_image} /> }
                    </Helmet>
                    <UILayout className="p-top-of-page p-bottom-1">
                        <UISection className="index-2">
                            <div className="blog-post">        
                                <a href="/blog"></a>
                                <Link className="text-on-dark" to="/blog">
                                    &larr; Back to blog
                                </Link>
                                <h3>{post.title}</h3>
                                <time>{timestamp}</time>
                                <div dangerouslySetInnerHTML={{__html: post.body}} />
                            </div>
                        </UISection>
                    </UILayout>
                </RouteTransition>
            )
        } else {
            return (
                <RouteTransition>
                    <UILayout className="p-top-of-page p-bottom-1">
                        <div>Loadding ....</div>
                    </UILayout>
                </RouteTransition>
            )
        }
    }
}

export default BlogPost;