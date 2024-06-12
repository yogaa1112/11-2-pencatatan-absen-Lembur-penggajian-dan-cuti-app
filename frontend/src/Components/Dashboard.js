import React, { useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../App.css';
import homeIcon from '../asset/icons/home.svg';
import homeIconHover from '../asset/icons/home-hover.svg';
import employeesIcon from '../asset/icons/employees.svg';
import employeesIconHover from '../asset/icons/employees-hover.svg';
import attendanceIcon from '../asset/icons/attendance.svg';
import attendanceIconHover from '../asset/icons/attendance-hover.svg';
import salaryIcon from '../asset/icons/salary.svg';
import salaryIconHover from '../asset/icons/salary-hover.svg';
import logoutIcon from '../asset/icons/logout.svg';
import logoutIconHover from '../asset/icons/logout-hover.svg';

function Dashboard() {
    useEffect(() => {
        const icons = document.querySelectorAll('.sidebar ul li a img.icon');

        icons.forEach(icon => {
            const hoverSrc = icon.getAttribute('data-hover');

            icon.addEventListener('mouseover', () => {
                icon.setAttribute('data-original', icon.getAttribute('src'));
                icon.setAttribute('src', hoverSrc);
            });

            icon.addEventListener('mouseout', () => {
                icon.setAttribute('src', icon.getAttribute('data-original'));
            });
        });

        return () => {
            icons.forEach(icon => {
                icon.removeEventListener('mouseover', () => { });
                icon.removeEventListener('mouseout', () => { });
            });
        };
    }, []);

    return (
        <div className="dashboard">
            <div className="sidebar">
                <div className='logo-container'>
                    <img src="../img/logo.png" height="80" className="d-inline-block align-top" alt="Logo" />
                </div>
                <ul>
                    <li>
                        <Link to="home">
                            <img src={homeIcon} alt="Home" className="icon" data-hover={homeIconHover} />
                            <span className="menu-text">Beranda</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="employees">
                            <img src={employeesIcon} alt="Employees" className="icon" data-hover={employeesIconHover} />
                            <span className="menu-text">Karyawan</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="attendance">
                            <img src={attendanceIcon} alt="Attendance" className="icon" data-hover={attendanceIconHover} />
                            <span className="menu-text">Absensi</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="salary">
                            <img src={salaryIcon} alt="Salary" className="icon" data-hover={salaryIconHover} />
                            <span className="menu-text">Gaji</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="logout">
                            <img src={logoutIcon} alt="Logout" className="icon" data-hover={logoutIconHover} />
                            <span className="menu-text">Keluar</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="content">
                <Outlet />
            </div>
        </div>
    );
}

export default Dashboard;