import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import Formations from '../../pages/Formations';
import Navigation from '../../layout/Navigation';

const IndexRoutes = () => {
    return(
        <BrowserRouter>
        <Navigation/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Formations" element={<Formations />} />
            </Routes>
        </BrowserRouter>
    )
}

export default IndexRoutes;