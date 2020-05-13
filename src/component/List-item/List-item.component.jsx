import React from 'react';

import { ListGroup, Badge } from 'react-bootstrap';

const ListItem = ({sys, dia, bpm, category, colorCode, inputDate}) => (
  <ListGroup.Item>
    <div
      style={{
        height: '25px', 
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '25px' 
      }}
    >
      <Badge variant={colorCode} style={{ height: '130%' }}>
        <h5>SYS: {sys}&ensp;|&ensp;DIA: {dia}</h5>
      </Badge>
      <div style={{ lineHeight: '0', marginTop: '-7px', marginLeft: '20px' }}>
      <h5>{category}</h5>
      <span>{inputDate}&ensp;|&ensp;{bpm} bpm</span>
      </div>
    </div>
  </ListGroup.Item>
)

export default ListItem;