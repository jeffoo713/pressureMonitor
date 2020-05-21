import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectDataArr } from '../../redux/data/data.selectors';
import { removeDataStart } from '../../redux/data/data.action-creaters';

const ListItem = ({ id, sys, dia, bpm, category, colorCode, inputDate, removeDataStart, currentUser, currentDataArray }) => (
  <ListGroup.Item style={{ marginLeft: '40px', marginRight: '40px'}}>
    <div
      style={{
        height: '25px', 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly' 
      }}
    >
      <Badge variant={colorCode} style={{ height: '130%' }}>
        <h5>SYS: {sys}&ensp;|&ensp;DIA: {dia}</h5>
      </Badge>
      <div style={{ lineHeight: '0', marginTop: '-7px', marginLeft: '20px' }}>
      <h5>{category}</h5>
      <span>{inputDate}&ensp;|&ensp;{bpm} bpm</span>
      </div>
        <ion-icon 
        name="trash-outline"
        style={{ cursor: 'pointer'}}
        onClick={() => removeDataStart(id, currentUser, currentDataArray)}
        />
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