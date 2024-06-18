import axios from 'axios'
const token = localStorage.getItem('token')

export const getCurrentUser = async () => {
    try {
        
        if (!token) {
            throw new Error('No token found');
        }

        const response = await axios.post(`${process.env.REACT_APP_REMOTE_URL}/login/validate`, 
        { token });

        return response.data;
    } catch (err) {
        throw new Error(err.response?.data?.message || 'Failed to fetch user');
    }
};