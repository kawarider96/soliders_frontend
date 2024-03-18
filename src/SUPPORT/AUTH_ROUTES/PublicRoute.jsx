import React from 'react';
import { Navigate } from 'react-router-dom';

export function PublicRoute({ children }) {
    const token = localStorage.getItem('token');

    if (token) {
        // Átirányítás a főoldalra, ha van token
        return <Navigate to="/" />;
    }

    // Megjeleníti a gyermek komponenseket, ha nincs token
    return children;
};
