import React from 'react';

import { Row, Col } from 'react-bootstrap';

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