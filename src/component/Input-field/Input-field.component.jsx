import React from 'react';

import Form from 'react-bootstrap/Form'

const InputField = ({ placeholder, type, name, value, handleChange }) => (
  <Form.Control
    size="lg"
    placeholder={placeholder}
    type={type}
    name={name}
    value={value}
    onChange={handleChange}
    required
  />
)

export default InputField;