import React from 'react';
import { Jumbotron, ProgressBar, Button, Row, Col, ListGroup, Badge, Form } from 'react-bootstrap';
import './AddPage.styles.scss';

class AddPage extends React.Component {
constructor() {
  super()

  this.state= {
    id: '',
    sys: '',
    dia: '',
    bpm: '',
    time: ''
  }
}

handleSubmit= event => {
  event.preventDefault();
  const { id, sys, dia, bpm, time } = this.state;
  console.log(this.state);
  //function to add the data
}


handleChange = event => {
  const { name, value } = event.target;
  this.setState({ [name]: value});
}

  render() {
    const categoryTitleStyle = {marginBottom: '-5px'}
    const chartBadgeStyle = {width: '60%'}
    return (
      <div className='add-page'>
        <Row style={{ paddingTop: '40px' }}>
          <ProgressBar className='col-8 mx-auto'>
            <ProgressBar striped variant="secondary" now={20} key={1} />
            <ProgressBar variant="primary" now={20} key={2} />
            <ProgressBar striped variant="success" now={20} key={3} />
            <ProgressBar variant="warning" now={20} key={4} />
            <ProgressBar striped variant="danger" now={20} key={5} />
          </ProgressBar>
        </Row>
        <Row style={{ paddingTop: '30px' }}>
          <Jumbotron 
            className='col-8 mx-auto'
            style={{ padding: '70px', paddingTop: '60px' }}
          >
            <Row>
              <div 
              className="bg-danger col-12" 
              style={{ 
                height: '250px',
                paddingTop: '30px',
                borderRadius: '7px'
              }}
              >
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
                <Form.Group 
                  style={{ 
                    display: 'flex',
                    justifyContent: 'space-evenly', 
                    paddingTop: '20px'
                  }}
                > 
                  <Col>
                    <Form.Control 
                      size="lg" 
                      placeholder="SYS"
                      type="number" 
                      name='sys' 
                      value={this.state.sys}
                      onChange={this.handleChange}
                      required
                    />
                  </Col>
                  <Col>
                    <Form.Control 
                      size="lg" 
                      placeholder="DIA"
                      type="number" 
                      name='dia' 
                      value={this.state.dia}
                      onChange={this.handleChange}
                      required
                    />
                  </Col>
                  <Col>
                    <Form.Control 
                      size="lg" 
                      placeholder="BPM" 
                      type="number" 
                      name='bpm' 
                      value={this.state.bpm}
                      onChange={this.handleChange}
                      required
                    />
                  </Col>
                </Form.Group>
                <div> calender and clock will be here</div>
              </div>
            </Row>
            <Row style={{ paddingTop: '50px' }}>
              <Button 
                variant="primary" 
                className="col-8 mx-auto"
                onClick={this.handleSubmit}
              >
                ADD
              </Button>
            </Row>
            <Row>
              <ListGroup className="col-12" style={{ paddingTop: '50px' }}>
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
            </Row>
          </Jumbotron>
        </Row>
      </div>
    )
  }
}

export default AddPage;