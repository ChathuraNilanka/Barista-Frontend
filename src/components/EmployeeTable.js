import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteEmployee } from '../redux/actions/employeeActions';

const EmployeeTable = ({ employees }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDelete = (employeeId) => {
    if (window.confirm('Are you sure you want to delete this employee?')) {
      dispatch(deleteEmployee(employeeId));
      navigate(0);
    }
  };
  
  const columns = [
    { headerName: 'Employee ID', field: 'id' },
    { headerName: 'Name', field: 'name' },
    { headerName: 'Email Address', field: 'emailAddress' },
    { headerName: 'Phone Number', field: 'phoneNumber' },
    { headerName: 'Days Worked', field: 'daysWorked' },
    { headerName: 'Cafe', field: 'cafe' },
    {
      headerName: 'Actions',
      field: 'actions',
      cellRenderer: (params) => (
        <>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate(`/employee-edit/${params.data.id}`)}
          >
            Edit
          </Button>
          <Button 
            variant="contained" 
            color="secondary" 
            onClick={() => handleDelete(params.data.id)}
          >
            Delete
          </Button>
        </>
      ),
    },
  ];

  return (
    <div className="ag-theme-alpine" style={{ height: '800px', width: '100%' }}>
      <AgGridReact
        rowData={employees}
        columnDefs={columns}
      />
    </div>
  );
};

export default EmployeeTable;