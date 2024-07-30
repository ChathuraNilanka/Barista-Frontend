import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchEmployeeById, addEmployee, updateEmployee } from '../redux/actions/employeeActions';
import { fetchCafes } from '../redux/actions/cafeActions';
import EmployeeForm from '../components/EmployeeForm';

const AddEditEmployeePage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const employee = useSelector((state) => state.employee.employees.find((employee) => employee.id === id));
  const cafes = useSelector((state) => state.cafe.cafes);

  useEffect(() => {
    if (id) {
      dispatch(fetchEmployeeById(id));
    }
    dispatch(fetchCafes(''));
  }, [dispatch, id]);

  const handleSubmit = (formValues) => {
    if (id) {
      dispatch(updateEmployee(id, formValues));
    } else {
      dispatch(addEmployee(formValues));
    }
    navigate('/employees');
  };
  console.log(cafes);

  return (
    <div>
      <h1>{id ? 'Edit Employee' : 'Add New Employee'}</h1>
      <EmployeeForm initialData={employee} onSubmit={handleSubmit} cafes={cafes} />
    </div>
  );
};

export default AddEditEmployeePage;