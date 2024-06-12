import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import HomeDashboard from './Components/HomeDashboard';
import Employees from './Components/Employees';
import EmployeePersonal from './Components/EmployeePersonal';
import Attendance from './Components/Attendance';
import Leave from './Components/Leave';
import Salary from './Components/Salary';
import Logout from './Components/Logout';
import EmployeeStaff from './Components/EmployeeStaff';
import EmployeePayroll from './Components/EmployeePayroll';
import AddSalary from './Components/AddSalary';

function Admin() {
  return (
    <div className="admin">
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="home" element={<HomeDashboard />} />
          <Route path="employees" element={<Employees />} />
          <Route path="add-employee" element={<EmployeePersonal />} />
          <Route path="employee-staff" element={<EmployeeStaff />} />
          <Route path="employee-payroll" element={<EmployeePayroll />} />
          <Route path="attendance" element={<Attendance />} />
          <Route path="leave" element={<Leave />} />
          <Route path="salary" element={<Salary />} />
          <Route path="add-salary" element={<AddSalary />} />
          <Route path="logout" element={<Logout />} />
        </Route>
      </Routes>
    </div>
  );
}

export default Admin;