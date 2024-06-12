import React, { useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../App.css';
import homeIcon from '../asset/icons/home.svg';
import homeIconHover from '../asset/icons/home-hover.svg';
import attendanceIcon from '../asset/icons/attendance.svg';
import attendanceIconHover from '../asset/icons/attendance-hover.svg';
import leaveIcon from '../asset/icons/Group 6.svg';
import leaveIconHover from '../asset/icons/Group 7.svg';
import salaryIcon from '../asset/icons/salary.svg';
import salaryIconHover from '../asset/icons/salary-hover.svg';
import logoutIcon from '../asset/icons/logout.svg';
import logoutIconHover from '../asset/icons/logout-hover.svg';

function UserSidebar() {
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

    const toggleDropdown = (e) => {
        e.preventDefault();
        const dropdown = e.target.closest('.dropdown');
        dropdown.classList.toggle('open');
    };

    return (
        <div className="dashboard">
            <div className="sidebar">
                <div className='logo-container'>
                    <img src="../img/logo.png" height="80" className="d-inline-block align-top" alt="Logo" />
                </div>
                <ul>
                    <li>
                        <Link to="/user/userhome">
                            <img src={homeIcon} alt="Home" className="icon" data-hover={homeIconHover} />
                            <span className="menu-text">Beranda</span>
                        </Link>
                    </li>
                    <li className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
                        <Link to="/user/userattendance" className="dropdown-toggle">
                            <img src={attendanceIcon} alt="Attendance" className="icon" data-hover={attendanceIconHover} />
                            <span className="menu-text">Kehadiran</span>
                        </Link>
                        <ul className="dropdown-menu">
                            <li><Link to="/user/userattendancein">Presensi Masuk</Link></li>
                            <li><Link to="/user/userattendanceout">Presensi Keluar</Link></li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/user/userleave">
                            <img src={leaveIcon} alt="Leave" className="icon" data-hover={leaveIconHover} />
                            <span className="menu-text">Izin Cuti</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/user/usersalary">
                            <img src={salaryIcon} alt="Salary" className="icon" data-hover={salaryIconHover} />
                            <span className="menu-text">Gaji</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/user/logout">
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

export default UserSidebar;