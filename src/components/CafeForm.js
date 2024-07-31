import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import ReusableTextBox from './ReusableTextBox';
import { useNavigate, useParams  } from 'react-router-dom';
import { addCafe, fetchCafeById, updateCafe } from '../redux/actions/cafeActions';

const CafeForm = ({ initialData = {}, onSubmit }) => {
  const [formValues, setFormValues] = useState({
    name: '',
    description: '',
    logo: null,
    location: '',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const cafe = useSelector((state) => state.cafe.cafe);

  useEffect(() => {
    if (id) {
        dispatch(fetchCafeById(id));
    }
}, [id, dispatch]);

useEffect(() => {
  if (cafe) {
      setFormValues({
          name: cafe.name,
          location: cafe.location,
          description: cafe.description,
          logo: cafe.logo
      });
  }
}, [cafe]);

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormValues({
      ...formValues,
      [name]: value
  });
};

const handleFileChange = (e) => {
  setFormValues({
      ...formValues,
      logo: e.target.files[0]
  });
};

const handleSubmit = (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append('name', formValues.name);
  formData.append('location', formValues.location);
  formData.append('description', formValues.description);
  if (formValues.logo) {
      formData.append('logo', formValues.logo);
  }

  if (id) {
      dispatch(updateCafe({id, formData}));
  } else {
    console.log(formData, 'qweadsd 2')
      dispatch(addCafe(formData));
  }

  navigate('/cafes');
};

const handleCancel = (e) => {
  navigate('/cafes');
}

  return (
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
        label="Description"
        name="description"
        value={formValues.description}
        onChange={handleChange}
        required
        inputProps={{ maxLength: 256 }}
      />
      <br/>
      <TextField
        type="file"
        onChange={handleFileChange}
        inputProps={{ accept: 'image/*', maxSize: 2000000 }}
        helperText="Max size 2MB"
      />
      <br/>
      <ReusableTextBox
        label="Location"
        name="location"
        value={formValues.location}
        onChange={handleChange}
        required
      />
      <br/>
      <Button class="btn btn-primary" type="submit" variant="contained" color="primary">
        Submit
      </Button>
      <Button class="btn btn-secondary" variant="contained" onClick={handleCancel}>
        Cancel
      </Button>
    </form>
  );
};

export default CafeForm;