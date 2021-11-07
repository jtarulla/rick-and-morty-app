import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from 'pages/homePage';
import CharacterPage from 'pages/characterPage';

const AppRoutes = () => {
    return (
        <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="character/:id" element={<CharacterPage />} />
        </Routes>
    );
}

export default AppRoutes;