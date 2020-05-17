import React from 'react';
import { withRouter } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Header = ({ history, match }) => {
  return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand 
          onClick={()=> history.push('/')} 
          style={{ cursor: 'pointer' }}
        >
          Blood Pressure Monitor
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link onClick={()=> history.push(`${match.url}add`)}>add</Nav.Link>
          <Nav.Link onClick={()=> history.push(`${match.url}history`)}>history</Nav.Link>
          <Nav.Link onClick={()=> history.push(`${match.url}statistics`)}>statistics</Nav.Link>
        </Nav>
      </Navbar>
  )
}

export default withRouter(Header);