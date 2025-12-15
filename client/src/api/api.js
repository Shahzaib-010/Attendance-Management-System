// src/api/api.js 

import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api', // Use your server port
    headers: {
        'Content-Type': 'application/json',
    },
});

// Interceptor to attach JWT token to every request
api.interceptors.request.use(config => {
    const token = localStorage.getItem('token'); // Assuming you store the token in localStorage
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

export default api;