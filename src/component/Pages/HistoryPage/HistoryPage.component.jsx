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
  
  removeData = (id) => {
    const prevData = this.state.DATA;
    console.log(prevData)
    const newData = prevData.filter(data=> data.id !== id);
    console.log(newData)
    this.setState({ DATA: newData }, ()=> console.log(this.state))
  }

  render() {
    const { DATA } = this.state
    return (
      <Container >
        <ListGroup>
          {
            DATA.map((data) => <ListItem key={data.id} {...data} removeData={this.removeData} /> )
          }
        </ListGroup>
      </Container>
    )
  }
}

export default HistoryPage;