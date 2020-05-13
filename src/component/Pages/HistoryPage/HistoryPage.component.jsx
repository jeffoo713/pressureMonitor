import React from 'react';

import ListItem from '../../List-item/List-item.component';
import Container from '../../Container/Container.component';

import DATA from './data';

import { ListGroup } from 'react-bootstrap';

class HistoryPage extends React.Component {
  constructor() {
    super()

    this.state= { DATA }
  }
  
  render() {
    const { DATA } = this.state
    return (
      <Container>
        <ListGroup>
          {
            DATA.reverse().map((data) => <ListItem key={data.id} {...data} /> )
          }
        </ListGroup>
      </Container>
    )
  }
}

export default HistoryPage;