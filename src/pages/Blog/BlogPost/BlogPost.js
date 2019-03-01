import React, { PureComponent } from 'react';
import RouteTransition from 'components/RouteTransition/RouteTransition';
import UIImage from 'UILibrary/image/UIImage';
import UILayout from 'UILibrary/layout/UILayout';
import UICard from 'UILibrary/layout/UICard';
import UIFlex from 'UILibrary/grid/UIFlex';
import UIFlexRow from 'UILibrary/grid/UIFlexRow';
import UILoading from 'UILibrary/loading/UILoading';
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
            let timestamp = new Date(post.created).toLocaleDateString("en-US", timestampOptions);
            let featured_image = post.featured_image ? post.featured_image : '#';
            let authorFullName = `${post.author.first_name} ${post.author.last_name}`;
            let authorImage = post.author.profile_image;
            let postCategory = post.categories.length > 0 ? post.categories[0].name : "Post";

            return (
                <RouteTransition>
                    <Helmet>
                        { post.seo_title && <title>{post.seo_title}</title>}
                        { post.meta_description && <meta name="description" content={post.meta_description} /> }
                        { post.featured_image && <meta name="og:image" content={post.featured_image} /> }
                    </Helmet>
                    <UILayout className="p-top-of-page p-bottom-4">
                        <UIImage
                            className={styles['header-image']}
                            type="header"
                            src={featured_image}
                            alt="resilient blog post header"
                        />
                        <UISection className="index-2">
                            <UIFlexRow>
                                <UIFlex basis="75%">
                                    <UICard className="p-all-6 pull-up-6 with-shadow">
                                        <h2>{post.title}</h2>
                                        <div className="divider" />
                                        <UIImage 
                                            src={authorImage}
                                            type="inline"
                                            className={styles['header-image']}
                                        >
                                            <h4>
                                                {authorFullName} &#9473; {timestamp}
                                            </h4>
                                        </UIImage>
                                    </UICard>
                                </UIFlex>
                                <UIFlex basis="25%" />
                            </UIFlexRow>
                            <UIFlexRow>
                                <UIFlex basis="35%" />
                                <UIFlex basis="65%">
                                    <div dangerouslySetInnerHTML={{__html: post.body}} />
                                </UIFlex>
                            </UIFlexRow>
                        </UISection>

                        {/* <UISection className="index-2">
                            <div className="blog-post">        
                                <a href="/blog"></a>
                                <Link className="text-on-dark" to="/blog">
                                    &larr; Back to blog
                                </Link>
                                <h3>{post.title}</h3>
                                <time>{timestamp}</time>
                                <div dangerouslySetInnerHTML={{__html: post.body}} />
                            </div>
                        </UISection> */}
                    </UILayout>
                </RouteTransition>
            )
        } else {
            return (
                <RouteTransition>
                    <UILoading />
                </RouteTransition>
            )
        }
    }
}

export default BlogPost;