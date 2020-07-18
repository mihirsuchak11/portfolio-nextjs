import React from 'react';
import axios from 'axios';
import Link from 'next/link';
import BaseLayout from '@/components/layouts/BaseLayout'
import BasePage from '@/components/BasePage';


export default function Portfolio({ posts }) {

  const renderPost = (posts) => {
    return posts.map(post =>
      <li key={post.id} style={{ 'fontSize': '20px' }}>
        <Link as={`/portfolio/${post.id}`} href="/portfolio/[id]">
          <a>
            {post.title}
          </a>
        </Link>
      </li>);
  }

  return (
    <BaseLayout>
      <BasePage>
        <ul>
          {renderPost(posts)}
        </ul>
      </BasePage>
    </BaseLayout>
  )
}

Portfolio.getInitialProps = async () => {
  let posts = [];
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    posts = res.data;
  } catch(e) {
    console.error(e);
  }

  return { posts: posts.slice(0, 10) };
}