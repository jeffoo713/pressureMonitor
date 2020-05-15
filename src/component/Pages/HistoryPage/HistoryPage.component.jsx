import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

import ListItem from '../../List-item/List-item.component';
import Container from '../../Container/Container.component';

import { ListGroup } from 'react-bootstrap';

import { selectDataArr } from '../../../redux/data/data.selectors';
import { removeItem, calculateStats } from '../../../redux/data/data.actions';

const HistoryPage = ({ dataArr, removeItem, calculateStats }) => {
  return (
    <Container >
      <ListGroup>
        {
          dataArr.map((data) => 
          <ListItem 
            key={data.id} {...data} 
            removeData={removeItem} 
            calculateStats={calculateStats} 
            dataArr={dataArr} 
          />)
        }
      </ListGroup>
    </Container>
  )
}

const mapStateToProps = createStructuredSelector({
  dataArr: selectDataArr
})

const mapDispatchToProps = dispatch => ({
  removeItem: id => dispatch(removeItem(id)),
  calculateStats: dataArr => dispatch(calculateStats(dataArr))
})

export default connect(mapStateToProps, mapDispatchToProps)(HistoryPage);