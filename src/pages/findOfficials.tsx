import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, ListGroup, Alert } from 'react-bootstrap';
import findOfficials from '../services/findOfficials';

const GetOfficials = () => {
  const { empresa_id } = useParams<{ empresa_id: string }>();
  const [official, setOfficial] = useState<any>(null);

  useEffect(() => {
    const fetchOfficials = async () => {
      try {
        const response = await findOfficials(Number(empresa_id));
        setOfficial(response.data.entry.data);
      } catch (err) {
        console.error('Erro ao buscar funcionários');
      }
    };

    fetchOfficials();
  }, [empresa_id]);

  const keys = official && Object.keys(official);
  const values = official && Object.values(official);

  keys?.splice(7, 3);
  keys?.splice(0, 1);
  values?.splice(7, 3);
  values?.splice(0, 1);

  return (
    <Container className="my-4">
      <Row className="justify-content-center">
        <Col md={8}>
          <h1 className="text-center">Funcionários da Empresa {empresa_id}</h1>
          {official ? (
            <ListGroup className="mt-3">
              {keys.map((key: string, index: number) => (
                <ListGroup.Item key={index}>
                  <strong>
                    {key
                      .replaceAll('_', ' ')
                      .replaceAll('qtd', 'quantidade de')}
                    :
                  </strong>{' '}
                  {String(values[index])}
                </ListGroup.Item>
              ))}
            </ListGroup>
          ) : (
            <Alert variant="warning">Nenhum funcionário encontrado.</Alert>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default GetOfficials;
