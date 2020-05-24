import React from 'react'

import '../style/main.scss';

export default function App({ Component, PageProps }) {
  return (
    <Component {...PageProps} />
  )
}
