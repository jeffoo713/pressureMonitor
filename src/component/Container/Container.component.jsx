import React from 'react';

import { Jumbotron } from 'react-bootstrap';

const Container = ({children}) => (
  <Jumbotron
    className='col-8 mx-auto'
    style={{ 
      display: 'flex',
      flexDirection: 'column',
      alignContent: 'center', 
      padding: '40px, 50px',  
      paddingTop: '40px',
      marginTop: '30px',
      minHeight: '80vh' 
    }}
  >
    {children}
  </Jumbotron>
)

export default Container;