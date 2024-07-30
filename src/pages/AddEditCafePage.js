import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchCafeById, addCafe, updateCafe } from '../redux/actions/cafeActions';
import CafeForm from '../components/CafeForm';

const AddEditCafePage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cafe = useSelector((state) => state.cafe.cafes.find((cafe) => cafe.id === id));

  useEffect(() => {
    if (id) {
      dispatch(fetchCafeById(id));
    }
  }, [dispatch, id]);

  const handleSubmit = (formValues) => {
    if (id) {
      dispatch(updateCafe(id, formValues));
    } else {
      dispatch(addCafe(formValues));
    }
    navigate('/cafes');
  };

  return (
    <div>
      <h1>{id ? 'Edit Cafe' : 'Add New Cafe'}</h1>
      <CafeForm initialData={cafe} onSubmit={handleSubmit} />
    </div>
  );
};

export default AddEditCafePage;