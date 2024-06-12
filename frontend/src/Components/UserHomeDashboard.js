import React from 'react';
import "../App.css";

const UserHomeDashboard = () => {
  return (
    <div className="homedashboard">
      <main className="main-content">
        <header className="header-user-homedashboard">
          <div className="user-info">
            <h1>Hallo, San</h1>
            <p>Jabatan Pekerjaan</p>
            <p>PT. Workflow</p>
          </div>
          <div className="user-avatar">
            <img src="path/to/avatar.png" alt="User Avatar" />
          </div>
        </header>
      </main>
    </div>
  );
}

export default UserHomeDashboard;
