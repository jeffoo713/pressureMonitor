import React from 'react';

import DATA from './data';

import {ListGroup} from 'react-bootstrap'

class HistoryPage extends React.Component {
  constructor() {
    super()

    this.state= DATA
  }
  
  render() {
    return (
      <div>
        <ListGroup>
          <ListGroup.Item variant="primary">
            Primary
          </ListGroup.Item>
        </ListGroup>
      </div>
    )
  }
}

export default HistoryPage;