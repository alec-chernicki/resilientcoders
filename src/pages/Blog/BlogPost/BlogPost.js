import React, { PureComponent } from 'react';
import RouteTransition from 'components/RouteTransition/RouteTransition';
import CSSModules from 'react-css-modules';
import UIButton from 'UILibrary/button/UIButton';
import UIImage from 'UILibrary/image/UIImage';
import UILayout from 'UILibrary/layout/UILayout';
import UICard from 'UILibrary/layout/UICard';
import UIFlex from 'UILibrary/grid/UIFlex';
import UIFlexRow from 'UILibrary/grid/UIFlexRow';
import UILoading from 'UILibrary/loading/UILoading';
import UISocialShare from 'UILibrary/social/UISocialShare';
import UISection from 'UILibrary/layout/UISection';
import styles from './BlogPost.css';
import readingTime from 'reading-time';

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
            console.log("RESPONSVE FROM API \n", resp);
            let { data, meta } = resp.data;
            this.setState({
              loaded: true,
              post: data,
              nextPost: meta.next_post,
              prevPost: meta.previous_post
            });
        });
    }

    render() {
        if (this.state.loaded) {
            const { post, nextPost, prevPost } = this.state;
            const postBody = post.body;
            const postTitle = post.title;
            const postCreatedDate = post.created;
            const authorImage = post.author.profile_image;
            const authorBio = post.author.bio;
            const timestampOptions = { year: 'numeric', month: 'long', day: 'numeric' };
            const postImage = post.featured_image ? post.featured_image : '#';
            const postSeoTitle = post.seo_title;
            const postMeta = post.meta_description;
            const timestamp = new Date(postCreatedDate).toLocaleDateString("en-US", timestampOptions);
            
            const authorFullName = `${post.author.first_name} ${post.author.last_name}`;
            const postCategory = post.categories.length > 0 ? post.categories[0].name : "Post";
            
            
            const nextPostTitle = nextPost ? nextPost.title : null;
            const nextPostImage = nextPost ? nextPost.featured_image : null;
            const nextPostSlug = nextPost ? nextPost.slug : null;
            
            const prevPostTitle = prevPost ? prevPost.title : null;
            const prevPostImage = prevPost ? prevPost.featured_image : null;
            const prevPostSlug = prevPost ? prevPost.slug : null;

            return (
                <RouteTransition>
                    <Helmet>
                        { postSeoTitle && <title>{postSeoTitle}</title>}
                        { postMeta && <meta name="description" content={postMeta} /> }
                        { postImage && <meta name="og:image" content={postImage} /> }
                    </Helmet>
                    <UILayout className="p-top-of-page p-bottom-4">
                        <UIImage
                            className={styles['header-image']}
                            type="header"
                            src={postImage}
                            alt="resilient blog post header"
                        />
                        <UISection className="index-2">
                            <UIFlexRow>
                                <UIFlex basis="75%">
                                    <UICard className="p-all-6 pull-up-6 with-shadow">
                                        <h4>
                                            {postCategory} &#9473; {readingTime(postBody).text}
                                        </h4>
                                        <h2>{postTitle}</h2>
                                        <div className="divider" />
                                        <UIImage 
                                            src={authorImage}
                                            height="40px"
                                            width="40px"
                                            type="inline"
                                            className={styles['header-image']}
                                        >
                                            <h4>
                                                {authorFullName} &#8226; {timestamp}
                                            </h4>
                                        </UIImage>
                                    </UICard>
                                </UIFlex>
                                <UIFlex basis="25%" />
                            </UIFlexRow>
                            
                            <UIFlexRow>
                                <UIFlex basis="35%" />
                                <UIFlex basis="65%">
                                    <div dangerouslySetInnerHTML={{__html: postBody}} styleName="blog-post"/>
                                </UIFlex>
                            </UIFlexRow>
                        </UISection>
                        <UISection>
                            <UIFlexRow>
                                <UIFlex basis="35%" />
                                <UIFlex basis="65%" className="p-bottom-2">
                                    <UISocialShare type="row" shareUrl={window.location.href} className="p-y-8" />
                                    <UIImage 
                                        src={authorImage}
                                        height="100px"
                                        width="100px"
                                        type="inline"
                                        className={styles['header-image']}
                                    >
                                        <section className="p-x-2">
                                            <h6>Written By</h6>
                                            <h4>{authorFullName}</h4>
                                            <p>
                                                {authorBio}
                                            </p>
                                        </section>
                                    </UIImage>
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
                                <div dangerouslySetInnerHTML={{__html: postBody}} />
                            </div>
                        </UISection> */}
                    </UILayout>
                    <UILayout use="primary" className="p-top-6 p-bottom-8">
                        <UISection>
                        <hr />
                            <UIFlexRow className="m-y-4">
                                <UIFlex basis="50%">
                                { 
                                    nextPost &&
                                    <div className="p-all-2">
                                        <img src={nextPostImage} className="m-bottom-2"/>
                                        <h4>Next To Read</h4>
                                        <h2>{nextPostTitle}</h2>
                                        <UIButton type="link"to={`/blog/post/${nextPostSlug}`}>
                                            Read The Next Post
                                        </UIButton>
                                    </div>
                                }
                                </UIFlex>
                                <UIFlex basis="50%">
                                    { 
                                        prevPost &&
                                        <div className="p-all-2">
                                            <img src={prevPostImage} className="m-bottom-2"/>
                                            <h4>Previously Written</h4>
                                            <h2>{prevPostTitle}</h2>
                                            <UIButton type="link" to={`/blog/post/${prevPostSlug}`}>
                                                Read The Previous Post
                                            </UIButton>
                                        </div>
                                    }
                                </UIFlex>
                            </UIFlexRow>
                        </UISection>
                    </UILayout>
                    <UILayout use="tertiary">
                        <UISection>
                            <UIFlexRow justify="center" className="p-y-4">
                                <UIButton type="link" to="/blog" className="text-on-dark">
                                    Back to blog
                                </UIButton>
                            </UIFlexRow>
                        </UISection>
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

export default CSSModules(BlogPost, styles);