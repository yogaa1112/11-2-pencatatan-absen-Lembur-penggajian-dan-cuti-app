import React, { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import axios from 'axios';
let api = process.env.REACT_APP_REMOTE_URL

const ProtectedRoute = () => {

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            return <Navigate to="/login" />
            return;
        }

        axios.post(`${api}/login/validate`, { token })
            .then((response) => {
                return <Outlet /> ;
            })
            .catch((error) => {
                return <Navigate to="/login" />
            });
    }, []);
}

export default ProtectedRoute;