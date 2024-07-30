import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import CafesPage from './pages/CafesPage';
import EmployeesPage from './pages/EmployeesPage';
import AddEditCafePage from './pages/AddEditCafePage';
import AddEditEmployeePage from './pages/AddEditEmployeePage';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<CafesPage />} />
          <Route path="/cafes" element={<CafesPage />} />
          <Route path="/employees" element={<EmployeesPage />} />
          <Route path="/add-cafe" element={<AddEditCafePage />} />
          <Route path="/cafe-edit/:id" element={<AddEditCafePage />} />
          <Route path="/add-employee" element={<AddEditEmployeePage />} />
          <Route path="/employee-edit/:id" element={<AddEditEmployeePage />} />
          <Route path="/employees/cafe/:cafeId" element={<EmployeesPage />} />
          </Routes>
      </Router>
    </Provider>
  );
}

export default App;