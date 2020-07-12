import React, { Component } from 'react'
import axios from 'axios';
// import Link from 'next/link';
import { Link } from '../routes'
import BaseLayout from '../components/layouts/BaseLayout'

export default class Portfolio extends Component {

    static async getInitialProps() {
        let posts = [];
        try {
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
            posts = res.data;
        } catch(e) {
            console.error(e);
        }

        return { posts: posts.slice(0, 10) };
    }

    renderPost(posts) {
        return posts.map(post =>
            <li key={post.id} style={{ 'fontSize': '20px' }}>
                <Link route={`/portfolio/${post.id}`} >
                    <a>
                        {post.title}
                    </a>
                </Link>
            </li>);
    }

    render() {
        const { posts } = this.props;

        return (
            <BaseLayout>
                <ul>
                    {this.renderPost(posts)}
                </ul>
            </BaseLayout>
        )
    }
}
