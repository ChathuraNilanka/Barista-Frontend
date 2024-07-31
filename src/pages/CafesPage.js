import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCafes } from '../redux/actions/cafeActions';
import { useNavigate } from 'react-router-dom';
import CafeTable from '../components/CafeTable';
import { Button, TextField  } from '@material-ui/core';

const CafesPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cafes = useSelector((state) => state.cafe.cafes);
  const locationFilter = useSelector((state) => state.locationFilter); 

  useEffect(() => {
    dispatch(fetchCafes(''));
  }, [dispatch]);

  const handleLocationFilterChange = (event) => {
    dispatch(fetchCafes(event.target.value));
  };

  const handleAddCafe = () => {
    navigate('/add-cafe');
  };

  return (
    <div>
      <h1>Cafes</h1>
      <TextField 
        type="text"
        placeholder="Filter by location"
        value={locationFilter}
        onChange={handleLocationFilterChange}
      />
      <br/><br/>
      <Button class="btn btn-primary" variant="contained" color="primary" onClick={handleAddCafe}>
        Add New Cafe
      </Button>
      <CafeTable cafes={cafes} />
    </div>
  );
};

export default CafesPage;