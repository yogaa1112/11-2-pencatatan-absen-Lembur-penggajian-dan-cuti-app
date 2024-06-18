import axios from 'axios';

export const getCurrentUser = async () => {
    const token = localStorage.getItem('token');

    if (!token) {
        console.error('No token found');
        return null;
    }

    try {
        const response = await axios.post(`${process.env.REACT_APP_REMOTE_URL}/login/validate`, { token });
        console.log('User data:', response.data);
        return response.data;
    } catch (err) {
        console.error('Error fetching user:', err.response?.data?.message || 'Failed to fetch user');
        return null;
    }
};
