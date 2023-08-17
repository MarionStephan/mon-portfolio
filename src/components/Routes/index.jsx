import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import Navigation from '../../layout/Navigation';
import Formations from '../../pages/Formations';
import Experiences from '../../pages/Experiences';
import Portfolio from '../../pages/Portfolio';

const IndexRoutes = () => {
    return(
        <BrowserRouter>
        <Navigation/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Formations" element={<Formations />} />
                <Route path="/Experiences" element={<Experiences />} />
                <Route path="/Portfolio" element={<Portfolio />} />
            </Routes>
        </BrowserRouter>
    )
}

export default IndexRoutes;