import React from 'react';
import { withRouter } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import './Header.styles.scss';

const Header = ({ history, match }) => {
  return (
    <div className='header'>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Blood Pressure Monitor</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link onClick={()=> history.push(`${match.url}add`)}>add</Nav.Link>
          <Nav.Link onClick={()=> history.push(`${match.url}history`)}>history</Nav.Link>
          <Nav.Link onClick={()=> history.push(`${match.url}statistics`)}>statistics</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  )
}

export default withRouter(Header);