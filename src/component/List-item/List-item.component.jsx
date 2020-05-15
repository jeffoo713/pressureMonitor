import React from 'react';

import { ListGroup, Badge } from 'react-bootstrap';

const ListItem = ({ id, sys, dia, bpm, category, colorCode, inputDate, removeData, calculateStats, dataArr }) => (
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
        onClick={() => {
          removeData(id)
          calculateStats(dataArr)
        }}
        />
    </div>
  </ListGroup.Item>
)

export default ListItem;