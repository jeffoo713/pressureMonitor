import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

import ListItem from '../../List-item/List-item.component';
import Container from '../../Container/Container.component';
import NoData from '../../No-data/No-data.component';

import ListGroup from 'react-bootstrap/ListGroup';

import { selectDataArr } from '../../../redux/data/data.selectors';

const HistoryPage = ({ dataArr }) => {
  return (
    <Container >
      <ListGroup >
        { 
          dataArr.length === 0
          ? <NoData />
          : dataArr.map((data) => 
            <ListItem 
              key={data.id} 
              {...data} 
            />)
        }
      </ListGroup>
    </Container>
  )
}

const mapStateToProps = createStructuredSelector({
  dataArr: selectDataArr
})

export default connect(mapStateToProps)(HistoryPage);