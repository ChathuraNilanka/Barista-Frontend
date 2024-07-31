import React, { useState, useEffect } from 'react';
import {
  TextField,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio
} from '@material-ui/core';
import ReusableTextBox from './ReusableTextBox';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addEmployee, fetchEmployeeById, updateEmployee } from '../redux/actions/employeeActions';


const EmployeeForm = ({ initialData = {}, onSubmit, cafes = [] }) => {
  const [formValues, setFormValues] = useState({
    name: '',
    emailAddress: '',
    phoneNumber: '',
    gender: '',
    cafeId: null,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const employee = useSelector((state) => state.employee.employee);

  useEffect(() => {
      if (id) {
          dispatch(fetchEmployeeById(id));
      }
  }, [id, dispatch]);

  useEffect(() => {
      if (employee) {
          setFormValues({
              name: employee.name,
              gender: employee.gender,
              phoneNumber: employee.phoneNumber,
              emailAddress: employee.emailAddress,
              cafeId: employee.cafeId
          });
      }
  }, [employee]);

  const handleChange = (e) => {
      const { name, value } = e.target;
      setFormValues({
          ...formValues,
          [name]: value
      });
  };

  const handleSubmit = (e) => {
      e.preventDefault();

      const formData = new FormData();
      formData.append('name', formValues.name);
      formData.append('gender', formValues.gender);
      formData.append('phoneNumber', formValues.phoneNumber);
      formData.append('emailAddress', formValues.emailAddress);
      formData.append('cafeId', formValues.cafeId);

      if (id) {
          dispatch(updateEmployee({id, formData}));
      } else {
          dispatch(addEmployee(formData));
      }

      navigate('/employees');
  };

  const handleCancel = (e) => {
    navigate('/employees');
  }

  return (
    <div>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
      <ReusableTextBox
        label="Name"
        name="name"
        value={formValues.name}
        onChange={handleChange}
        required
        inputProps={{ minLength: 6, maxLength: 10 }}
      />
      <br/>
      <ReusableTextBox
        label="Email Address"
        name="emailAddress"
        value={formValues.emailAddress}
        onChange={handleChange}
        required
        inputProps={{ type: 'email' }}
      />
      <br/>
      <ReusableTextBox
        label="Phone Number"
        name="phoneNumber"
        value={formValues.phoneNumber}
        onChange={handleChange}
        required
        inputProps={{ pattern: '^[89]\\d{7}$' }}
      />
      <br/>
      <RadioGroup
        aria-label="gender"
        name="gender"
        value={formValues.gender}
        onChange={handleChange}
      >
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="female" control={<Radio />} label="Female" />
      </RadioGroup>
      <TextField
        select
        label="Assigned Cafe"
        name="cafeId"
        value={formValues.cafeId}
        onChange={handleChange}
        SelectProps={{ native: true }}
      >
        <option value=""></option>
        {cafes.map((cafe) => (
          <option key={cafe.id} value={cafe.id}>
            {cafe.name}
          </option>
        ))}
      </TextField>
      <br/>
      <Button class="btn btn-primary" type="submit" variant="contained" color="primary">
        Submit
      </Button>
      <Button class="btn btn-secondary" variant="contained" onClick={handleCancel}>
        Cancel
      </Button>
    </form>
    </div>
  );
};

export default EmployeeForm;