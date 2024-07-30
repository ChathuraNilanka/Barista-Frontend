import React from 'react';
import { TextField } from '@material-ui/core';

const ReusableTextBox = ({ label, value, onChange, error, helperText, ...props }) => (
  <TextField
    label={label}
    value={value}
    onChange={onChange}
    error={error}
    helperText={helperText}
    {...props}
  />
);

export default ReusableTextBox;