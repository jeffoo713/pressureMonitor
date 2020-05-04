import React from 'react';
import { Jumbotron, ProgressBar, Button, Row, Col, ListGroup, Badge } from 'react-bootstrap';
import './AddPage.styles.scss';

class AddPage extends React.Component {

  render() {

    return (
      <div className='add-page'>
        <Row style={{ paddingTop: '50px' }}>
          <ProgressBar className='col-8 mx-auto'>
            <ProgressBar striped variant="success" now={20} key={1} />
            <ProgressBar variant="warning" now={20} key={2} />
            <ProgressBar striped variant="danger" now={20} key={3} />
            <ProgressBar variant="info" now={20} key={4} />
            <ProgressBar striped variant="primary" now={20} key={5} />
          </ProgressBar>
        </Row>
        <Row style={{ paddingTop: '50px' }}>
          <Jumbotron className='col-8 mx-auto'>
            <Row>
              <div className="bg-danger col-12" style={{ height: '300px' }}>This area will be getting input</div>
            </Row>
            <Row style={{ paddingTop: '50px' }}>
              <Button variant="primary" className="col-8 mx-auto">ADD</Button>
            </Row>
            <Row>
              <ListGroup className="col-12" style={{ paddingTop: '50px' }}>
                <ListGroup.Item>
                  <Row>
                    <Col>
                    </Col>
                    <Col>
                      TYPE
                  </Col>
                    <Col>
                      SYS
                  </Col>
                    <Col>
                      DIA
                  </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>
                      <Badge variant="danger">RED</Badge>
                    </Col>
                    <Col>
                      Stgae 2 Hypertension
                  </Col>
                    <Col>
                      > 160
                  </Col>
                    <Col>
                      > 100
                  </Col>
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