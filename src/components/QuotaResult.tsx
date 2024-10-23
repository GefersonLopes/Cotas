import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import '../styles/quotaResult.scss';

interface QuotaResultProps {
  minQuota: number;
  maxQuota: number;
  message: string;
}

const QuotaResult: React.FC<QuotaResultProps> = ({
  minQuota,
  maxQuota,
  message,
}) => {
  return (
    <Card className="quota-result-card text-center">
      <Card.Body className="p-4">
        <Card.Title className="mb-4">
          <h2 className="text-white">Resultado de Cotas</h2>
        </Card.Title>

        <Row className="mb-3">
          <Col>
            <div className="quota-box">
              <p className="text-white small">Cota Mínima</p>
              <h1 className="quota-value">{minQuota} Cota</h1>
            </div>
          </Col>

          <Col>
            <div className="quota-box">
              <p className="text-white small">Cota Máxima</p>
              <h1 className="quota-value">{maxQuota} Cotas</h1>
            </div>
          </Col>
        </Row>

        <p className="text-white small mb-4">{message}</p>
      </Card.Body>
    </Card>
  );
};

export default QuotaResult;
