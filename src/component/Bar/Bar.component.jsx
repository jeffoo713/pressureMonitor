import React from 'react';

import { ProgressBar } from 'react-bootstrap';


const Bar = () => (
  <ProgressBar 
    className='col-8 mx-auto'
    style={{ marginTop: '40px' }}
  >
    <ProgressBar striped variant="secondary" now={20} key={1} />
    <ProgressBar variant="primary" now={20} key={2} />
    <ProgressBar striped variant="success" now={20} key={3} />
    <ProgressBar variant="warning" now={20} key={4} />
    <ProgressBar striped variant="danger" now={20} key={5} />
  </ProgressBar>
)

export default Bar;
