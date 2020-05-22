import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import Col from 'react-bootstrap/Col';


import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectDataArr } from '../../redux/data/data.selectors';
import { removeDataStart } from '../../redux/data/data.action-creaters';

const ListItem = ({ id, sys, dia, bpm, category, colorCode, displayDate, removeDataStart, currentUser, currentDataArray }) => (
  <ListGroup.Item>
    <div
      style={{
        height: '25px', 
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Col sm={4}>
        <Badge variant={colorCode}>
        <h5>SYS: {sys}&ensp;|&ensp;DIA: {dia}</h5>
        </Badge>
      </Col>
      <Col lg={true}>
        <div style={{ lineHeight: '0', marginTop: '-7px' }}>
        <h5>{category}</h5>
        <span>{displayDate}&ensp;|&ensp;{bpm} bpm</span>
        </div>
      </Col>
      <Col sm={1}>
        <ion-icon 
        name="trash-outline"
        style={{ cursor: 'pointer'}}
        onClick={() => removeDataStart(id, currentUser, currentDataArray)}
        />
      </Col>
    </div>
  </ListGroup.Item>
)

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  currentDataArray: selectDataArr
})

const mapDispatchToProps = dispatch => ({
  removeDataStart: (id, user, dataArray) => dispatch(removeDataStart(id, user, dataArray))
})

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);