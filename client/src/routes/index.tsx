import React from 'react';
import { Routes, Route } from 'react-router-dom';

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div style={{ padding: '2rem', textAlign: 'center' }}>
            <h1 style={{ color: 'var(--color-primary)' }}>UPES Sports Management</h1>
            <p style={{ color: 'var(--color-text-muted)', marginTop: '1rem' }}>
              Project initialized successfully. Modular feature architecture is ready for
              development.
            </p>
          </div>
        }
      />
    </Routes>
  );
};
