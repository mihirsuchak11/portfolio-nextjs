import React from 'react';
import { Container } from 'reactstrap';

export default function BasePage({ className, children }) {
  return (
    <div className={`base-page ${className}`}>
      <Container>
        {children}
      </Container>
    </div>
  )
}
