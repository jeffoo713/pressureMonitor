import React from 'react';
import { withRouter } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form'

const Header = ({ history, match }) => {
  return (
      <Navbar className="bg-light justify-content-between">
        <Form inline>
          <Navbar.Brand 
            onClick={()=> history.push('/')} 
            style={{ cursor: 'pointer' }}
          >
            Blood Pressure Monitor
          </Navbar.Brand>
        </Form>
        <Form inline>
          <Nav className="mr-auto">
            <Nav.Link onClick={()=> history.push(`${match.url}add`)}>ADD</Nav.Link>
            <Nav.Link onClick={()=> history.push(`${match.url}history`)}>HISTORY</Nav.Link>
            <Nav.Link onClick={()=> history.push(`${match.url}statistics`)}>STATISTICS</Nav.Link>
            <Nav.Link onClick={()=> history.push(`${match.url}signinandup`)}>SIGN IN</Nav.Link>
          </Nav>
        </Form>
      </Navbar>
  )
}

export default withRouter(Header);