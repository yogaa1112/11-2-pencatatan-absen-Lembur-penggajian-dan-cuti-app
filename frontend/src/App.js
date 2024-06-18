import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Header from "./Components/Header";
import "./App.css";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Home from "./Components/Home";
import Admin from "./Admin";
import Login from "./Components/Login";
import ForgotPassword from "./Components/ForgotPassword";
import Employees from "./Components/Employees";
import EmployeePersonal from "./Components/EmployeePersonal";
import EmployeeStaff from "./Components/EmployeeStaff";
import EmployeePayroll from "./Components/EmployeePayroll";
import AddSalary from "./Components/AddSalary";
import Salary from "./Components/Salary"
import Attendance from "./Components/Attendance";
import Leave from "./Components/Leave";
import User from "./User";
import Logout from "./Components/Logout";
import UserAttendance from "./Components/UserAttendance";
import UserSalary from "./Components/UserSalary";
import UserAttendanceIn from "./Components/UserAttendanceIn";
import AttendanceOut from "./Components/AttendanceOut";


import ProtectedRoute from "./Components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
              <About />
              <Contact />
              <Footer />
            </>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route path="/admin/*" element={ <ProtectedRoute /> }>
          <Route path="" element={<Admin />}>
            <Route path="home" element={<Admin />} />
            <Route path="employees" element={<Employees />} />
            <Route path="add-employee" element={<EmployeePersonal />} />
            <Route path="employee-staff" element={<EmployeeStaff />} />
            <Route path="employee-payroll" element={<EmployeePayroll />} />
            <Route path="attendance" element={<Attendance />} />
            <Route path="salary" element={<Salary />} />
            <Route path="add-salary" element={<AddSalary />} />
            <Route path="logout" element={<Logout />} />
          </Route>
        </Route>

        

        <Route path="/user/*" element={<ProtectedRoute />}>
          <Route path="" element={<User/>}>
            <Route path="userhome" element={<User />} />
            <Route path="userattendance" element={<UserAttendance />} />
            <Route path="usersalary" element={<UserSalary />} />
            <Route path="userleave" element={<Leave />} />
            <Route path="userattendancein" element={<UserAttendanceIn />} />
            <Route path="userattendanceout" element={<AttendanceOut />} />
            <Route path="logout" element={<Logout />} />
          </Route>
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
