import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEmployees } from '../redux/actions/employeeActions';
import { useNavigate, useParams  } from 'react-router-dom';
import EmployeeTable from '../components/EmployeeTable';
import { Button } from '@material-ui/core';

const EmployeesPage = () => {
  const { cafeId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const employees = useSelector((state) => state.employee.employees);

  useEffect(() => {
    if (cafeId ) {
      dispatch(fetchEmployees(cafeId));
    } else {
      dispatch(fetchEmployees(''));
    }
  }, [dispatch]);

  const handleAddEmployee = () => {
    navigate('/add-employee');
  };

  return (
    <div>
      <h1>Employees</h1>
      <Button variant="contained" color="primary" onClick={handleAddEmployee}>
        Add New Employee
      </Button>
      <EmployeeTable employees={employees} />
    </div>
  );
};

export default EmployeesPage;