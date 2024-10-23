import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/container.scss';

interface IProps {
  children: React.ReactNode;
  title: string;
}
const FormContainer = ({ children, title }: IProps) => {
  return (
    <Container className="my-4">
      <Row className="justify-content-center">
        <Col md={8}>
          <div className="form-container">
            <h2 className="text-center">{title}</h2>
            {children}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default FormContainer;
