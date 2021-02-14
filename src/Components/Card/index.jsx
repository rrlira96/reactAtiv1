import React from 'react';
import { Card } from 'react-bootstrap';

const Caixa = ({ title, srcImg }) => (
  <Card className="mb-4">
    <Card.Header>
      <Card.Title>
        {title}
      </Card.Title>
    </Card.Header>
    <Card.Body>
      <Card.Img variant="bottom" src={srcImg} />
    </Card.Body>
  </Card>
);

export default Caixa;
