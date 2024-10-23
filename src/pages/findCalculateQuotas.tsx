import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, ListGroup, Alert } from 'react-bootstrap';
import findCalculateQuotas from '../services/findCalculateQuotas';

const GetCalculateQuotas = () => {
  const { empresa_id } = useParams<{ empresa_id: string }>();
  const [quotas, setQuotas] = useState<any>(null);

  useEffect(() => {
    const fetchOfficials = async () => {
      try {
        const response = await findCalculateQuotas(Number(empresa_id));
        setQuotas(response.data.entry);
      } catch (err) {
        console.error('Empresa não encontrada ou algum erro ocorreu');
      }
    };

    fetchOfficials();
  }, [empresa_id]);

  const keys = quotas && Object.keys(quotas);
  const values = quotas && Object.values(quotas);

  keys?.splice(0, 2);
  values?.splice(0, 2);

  return (
    <Container className="my-4">
      <Row className="justify-content-center">
        <Col md={8}>
          <h1 className="text-center">Cotas da Empresa {empresa_id}</h1>
          {quotas ? (
            <ListGroup className="mt-3">
              {keys.map((key: string, index: number) => (
                <ListGroup.Item key={index}>
                  <strong>{key.replaceAll('_', ' ')}:</strong>{' '}
                  {String(values[index])}
                </ListGroup.Item>
              ))}
            </ListGroup>
          ) : (
            <Alert variant="warning">Nenhum cálculo encontrado.</Alert>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default GetCalculateQuotas;
