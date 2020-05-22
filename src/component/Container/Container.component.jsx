import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';

const Container = ({children}) => (
  <Jumbotron
    className='col-8 mx-auto'
    style={{ 
      display: 'flex',
      flexDirection: 'column',
      alignContent: 'center',
      marginTop: '30px',
      minHeight: '80vh',
      padding: '2%'
    }}
  >
    {children}
  </Jumbotron>
)

export default Container;