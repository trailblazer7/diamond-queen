import React from 'react';
import { Container } from './index';

const Footer: React.FC = () => {
  return (
    <footer>
      <Container className="py-8">
        <p>
          &copy; {new Date().getFullYear()} Diamond Queen. All rights reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
