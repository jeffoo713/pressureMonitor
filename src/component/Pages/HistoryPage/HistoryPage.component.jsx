import React from 'react';

import DATA from './data';

import { Jumbotron, ListGroup, Badge } from 'react-bootstrap'

class HistoryPage extends React.Component {
  constructor() {
    super()

    this.state= DATA
  }
  
  render() {
    return (
      <div>
        <Jumbotron
          className='col-8 mx-auto'
          style={{ 
            padding: '40px, 50px',  
            paddingTop: '40px',
            marginTop: '30px',
            minHeight: '80vh' 
          }}
        >
          <ListGroup>
            <ListGroup.Item>
              <div
                style={{
                  height: '25px', 
                  display: 'flex',
                  alignItems: 'center',
                  paddingLeft: '25px' 
                }}
              >
                <Badge variant="success" style={{ height: '130%' }}>
                  <h5>SYS: 123&ensp;|&ensp;DIA: 234</h5>
                </Badge>
                <div style={{ lineHeight: '0', marginTop: '-7px', marginLeft: '20px' }}>
                <h5>Prehypertension</h5>
                <span>May 12, 2020&ensp;|&ensp;67 bpm</span>
                </div>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </Jumbotron>
      </div>
    )
  }
}

export default HistoryPage;