import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';

const Chart = () => {
  const chartBadgeStyle = { width: '60%' }
  return (
  <ListGroup 
    className="col-12"
    
   >
    <ListGroup.Item>
      <Row>
        <Col sm={2}></Col>
        <Col>TYPE</Col>
        <Col sm={2}>SYS</Col>
        <Col sm={2}>DIA</Col>
      </Row>
    </ListGroup.Item>
    <ListGroup.Item>
      <Row>
        <Col sm={2}>
          <Badge variant="danger" style={chartBadgeStyle}>&nbsp;</Badge>
        </Col>
        <Col>Stage2 Hypertension</Col>
        <Col sm={2}>&#62; 160</Col>
        <Col sm={2}>&#62; 100</Col>
      </Row>
    </ListGroup.Item>
    <ListGroup.Item>
      <Row>
        <Col sm={2}>
          <Badge variant="warning" style={chartBadgeStyle}>&nbsp;</Badge>
        </Col>
        <Col>Stage1 Hypertension</Col>
        <Col sm={2}>141-160</Col>
        <Col sm={2}>91-100</Col>
      </Row>
    </ListGroup.Item>
    <ListGroup.Item>
      <Row>
        <Col sm={2}>
          <Badge variant="success" style={chartBadgeStyle}>&nbsp;</Badge>
        </Col>
        <Col>Prehypertension</Col>
        <Col sm={2}>121-140</Col>
        <Col sm={2}>91-90</Col>
      </Row>
    </ListGroup.Item>
    <ListGroup.Item>
      <Row>
        <Col sm={2}>
          <Badge variant="primary" style={chartBadgeStyle}>&nbsp;</Badge>
        </Col>
        <Col>Normal</Col>
        <Col sm={2}>91-120</Col>
        <Col sm={2}>61-80</Col>
      </Row>
    </ListGroup.Item>
    <ListGroup.Item>
      <Row>
        <Col sm={2}>
          <Badge variant="secondary" style={chartBadgeStyle}>&nbsp;</Badge>
        </Col>
        <Col>Hypotension</Col>
        <Col sm={2}>&#60; 90</Col>
        <Col sm={2}>&#60; 60</Col>
      </Row>
    </ListGroup.Item>
  </ListGroup>
)};

export default Chart;