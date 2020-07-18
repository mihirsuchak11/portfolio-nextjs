import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'next/router';

import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';

const PortfolioDetails = ({ portfolio }) => {
  return (
    <BaseLayout>
      <BasePage>
        <h1>{portfolio.title}</h1>
        <p>Body: {portfolio.body} </p>
        <p>ID: {portfolio.id}</p>
      </BasePage>
    </BaseLayout>
  )
}

PortfolioDetails.getInitialProps = async ({ query }) => {
  let post = {};
  try {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${query.id}`);
    post = res.data;
  } catch(e) {
    console.log(e)
  }
  return { portfolio: post }
}

export default withRouter(PortfolioDetails);