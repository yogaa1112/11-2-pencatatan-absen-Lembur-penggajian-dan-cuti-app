import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserSidebar from './Components/UserSidebar';
import UserHomeDashboard from './Components/UserHomeDashboard';
import Logout from './Components/Logout';
import UserAttendance from './Components/UserAttendance';
import UserAttendanceIn from './Components/UserAttendanceIn';
import UserSalary from './Components/UserSalary';
import UserLeave from './Components/UserLeave';
import AttendanceOut from './Components/AttendanceOut';
import LeaveApplication from './Components/LeaveApplication';

function User() {
  return (
    // boye
    <div className="user">
      <Routes>
        <Route path="/" element={<UserSidebar />}>
          <Route path="userhome" element={<UserHomeDashboard />} />
          <Route path="userattendance" element={<UserAttendance />} />
          <Route path="userattendancein" element={<UserAttendanceIn/>} />
          <Route path="userattendanceout" element={<AttendanceOut />} />
          <Route path="userleave" element={<UserLeave />} />
          <Route path="leaveapplication" element={<LeaveApplication />} />
          <Route path="usersalary" element={<UserSalary />} />
          <Route path="logout" element={<Logout />} />
        </Route>
      </Routes>
    </div>
  );
}

export default User;