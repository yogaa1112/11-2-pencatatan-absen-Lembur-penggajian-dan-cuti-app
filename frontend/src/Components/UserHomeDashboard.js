import React from 'react';
import useCurrentUser from './Services/useCurrentUser';
import "../App.css";

const UserHomeDashboard = () => {

  const { user } = useCurrentUser();
  
  if (!user || !user.employee) {
    return <div>Loading...</div>;
  }

  return (
    <div className="homedashboard">
      <main className="main-content">
        <header className="header-user-homedashboard">
          <div className="user-info">
            <h1>Hallo, {user.employee.full_name} </h1>
            <p>Jabatan {user.employee.position} </p>
            <p>PT. Workflow</p>
          </div>
          {/* <div className="user-avatar">
            <img src="path/to/avatar.png" alt="User Avatar" />
          </div> */}
        </header>
      </main>
    </div>
  );
}

export default UserHomeDashboard;
