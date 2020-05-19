import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const InputLabels = () => {
  const categoryTitleStyle = { marginBottom: '-5px' }
  return (
  <div style={{ width: '96%', margin: 'auto' }} >
    <Row>
      <Col>
        <h5 style={categoryTitleStyle} >SYSTOLIC</h5>
        <span>mmHg</span>
      </Col>
      <Col>
        <h5 style={categoryTitleStyle} >DIASTOLIC</h5>
        <span>mmHg</span>
      </Col>
      <Col>
        <h5 style={categoryTitleStyle} >PULSE</h5>
        <span>bpm</span>
      </Col>
    </Row>
  </div>
)}

export default InputLabels;