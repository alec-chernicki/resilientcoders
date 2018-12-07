import styles from './Blog.scss';
import CSSModules from 'react-css-modules';
import React, { PureComponent } from 'react';
import RouteTransition from 'components/RouteTransition/RouteTransition';

import Butter from 'buttercms';
const butter = Butter('d01153ac8a1425d273256b6fdac5afa0639aa861');

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
                <h1>Blog, check console</h1>

                {/* <p>{this.state.data[0].author}</p> */}
                <h1>{content.length}</h1>
                {
                    content.map(post =>
                    <div key={post.title}>
                        <h1>{post.title}</h1>
                        <label>{post.author.last_name}, {post.author.first_name}</label>
                        <p>{post.summary}</p>
                        <div dangerouslySetInnerHTML={{__html: post.body}} />
                    </div>
                )}
            </section>
        )
    }
}

export default CSSModules(Blog, styles);