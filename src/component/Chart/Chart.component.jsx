import React from 'react';

import { Row, Col, ListGroup, Badge } from 'react-bootstrap';

const Chart = () => {
  const chartBadgeStyle = { width: '60%' }
  return (
  <ListGroup 
    className="col-12"
    
   >
    <ListGroup.Item>
      <Row>
        <Col></Col>
        <Col>TYPE</Col>
        <Col>SYS</Col>
        <Col>DIA</Col>
      </Row>
    </ListGroup.Item>
    <ListGroup.Item>
      <Row>
        <Col>
          <Badge variant="danger" style={chartBadgeStyle}>&nbsp;</Badge>
        </Col>
        <Col>
          Stgae 2 Hypertension
        </Col>
        <Col>&#62; 160</Col>
        <Col>&#62; 100</Col>
      </Row>
    </ListGroup.Item>
    <ListGroup.Item>
      <Row>
        <Col>
          <Badge variant="warning" style={chartBadgeStyle}>&nbsp;</Badge>
        </Col>
        <Col>
          Stgae 1 Hypertension
        </Col>
        <Col>141-160</Col>
        <Col>91-100</Col>
      </Row>
    </ListGroup.Item>
    <ListGroup.Item>
      <Row>
        <Col>
          <Badge variant="success" style={chartBadgeStyle}>&nbsp;</Badge>
        </Col>
        <Col>
          Prehypertension
        </Col>
        <Col>121-140</Col>
        <Col>91-90</Col>
      </Row>
    </ListGroup.Item>
    <ListGroup.Item>
      <Row>
        <Col>
          <Badge variant="primary" style={chartBadgeStyle}>&nbsp;</Badge>
        </Col>
        <Col>
          Normal
        </Col>
        <Col>91-120</Col>
        <Col>61-80</Col>
      </Row>
    </ListGroup.Item>
    <ListGroup.Item>
      <Row>
        <Col>
          <Badge variant="secondary" style={chartBadgeStyle}>&nbsp;</Badge>
        </Col>
        <Col>
          Hypotension
        </Col>
        <Col>&#60; 90</Col>
        <Col>&#60; 60</Col>
      </Row>
    </ListGroup.Item>
  </ListGroup>
)};

export default Chart;