import React from 'react';

import Button from 'react-bootstrap/Button';

const CustomButton = ({ children, variant, className, handleClick }) => (
  <Button
    variant={variant}
    className={className}
    style={{ marginTop: '20px', padding: '10px 40px' }}
    onClick={handleClick}
  >
    {children}
  </Button>
);

export default CustomButton;
