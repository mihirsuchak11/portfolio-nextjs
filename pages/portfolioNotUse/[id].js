import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'next/router';

import BaseLayout from '../../components/layouts/BaseLayout';

class PortfolioDetails extends Component {


  static async getInitialProps({ query }) {
    let post = {};
    try {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${query.id}`);
      post = res.data;
    } catch(e) {
      console.log(e)
    }
    return { portfolio: post }
  }

  render() {
    const { portfolio } = this.props;
    console.log(portfolio, "post")
    return (
      <BaseLayout>
        <h1>{portfolio.title}</h1>
        <p>Body: {portfolio.body} </p>
        <p>ID: {portfolio.id}</p>
      </BaseLayout>
    )
  }
}

export default withRouter(PortfolioDetails);