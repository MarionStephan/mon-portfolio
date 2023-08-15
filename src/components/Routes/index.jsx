import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import Header from '../../layout/Navigation';

const IndexRoutes = () => {
    return(
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default IndexRoutes;