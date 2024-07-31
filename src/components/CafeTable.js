import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteCafe } from '../redux/actions/cafeActions';

const CafeTable = ({ cafes }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (cafeId) => {
    if (window.confirm('Are you sure you want to delete this cafe?')) {
      dispatch(deleteCafe(cafeId));
      navigate(0);
    }
  };

  const handleRowClick = (params) => {
    navigate(`/employees/cafe/${params.data.id}`);
  };

  const columns = [
    { headerName: 'Name', field: 'name' },
    { headerName: 'Description', field: 'description' },
    { headerName: 'Employees', field: 'employees' },
    { headerName: 'Location', field: 'location' },
    { headerName: 'Logo', field: 'logo', cellRenderer: 'imageRenderer' },
    {
      headerName: 'Actions',
      field: 'actions',
      cellRenderer: (params) => (
        <>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate(`/cafe-edit/${params.data.id}`)}
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
        rowData={cafes}
        columnDefs={columns}
        onRowClicked={handleRowClick}
        frameworkComponents={{
          imageRenderer: (params) => <img src={params.value} alt="Logo" style={{ width: '50px' }} />,
        }}
      />
    </div>
  );
};

export default CafeTable;