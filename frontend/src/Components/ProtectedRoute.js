import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import axios from 'axios';
let api = process.env.REACT_APP_REMOTE_URL

const ProtectedRoute = () => {
    const [shouldNavigate, setShouldNavigate] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');

        axios.post(`${api}/login/validate`, { token })
            .then((response) => {
                if (response.data.message !== 'Valid token') {
                    localStorage.removeItem('token');
                    setShouldNavigate(true);
                }
            })
            .catch((error) => {
                setShouldNavigate(true);
            });
    }, []);

    if (shouldNavigate) {
        return <Navigate to="/login" />
    }

    return <Outlet />;
}

export default ProtectedRoute;