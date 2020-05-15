import React from 'react';
import { connect } from 'react-redux';

import ListItem from '../../List-item/List-item.component';
import Container from '../../Container/Container.component';

import { ListGroup } from 'react-bootstrap';

import { removeItem } from '../../../redux/data/data.actions';

const HistoryPage = ({ data, removeItem }) => {

  return (
    <Container >
      <ListGroup>
        {
          data.map((data) => <ListItem key={data.id} {...data} removeData={removeItem} /> )
        }
      </ListGroup>
    </Container>
  )
}

const mapStateToProps = state => ({
  data: state.data.data
})

const mapDispatchToProps = dispatch => ({
  removeItem: id => dispatch(removeItem(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(HistoryPage);