import React from 'react';

import Button from 'react-bootstrap/Button';

const CustomButton = ({children, handleClick}) => (
  <Button
    variant="primary"
    className="col-8 mx-auto"
    style={{ marginTop: '10px' }}
    onClick={handleClick}
  >
    {children}
  </Button>
)

export default CustomButton;