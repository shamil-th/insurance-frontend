import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Admin from './Admin/Admin';

const Layout = () => {
    return (
       
            <Routes>
                <Route path='/admin' element={<Admin />} />
            </Routes>
       
    )
}

export default Layout