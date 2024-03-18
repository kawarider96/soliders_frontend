import React from 'react';
import { Navigate } from 'react-router-dom';

export function ProtectedRoute({ children }) {
    const token = localStorage.getItem('token');

    if (!token) {
        // Átirányítás a bejelentkezési oldalra, ha nincs token
        return <Navigate to="/login" />;
    }
    
    // Megjeleníti a gyermek komponenseket, ha van token
    return children;
};