import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Admin from './Admin/Admin';

const Layout = () => {
    return (
        <div>
            <Routes>
                <Route path='/admin' element={<Admin />} />
            </Routes>
        </div>
    )
}

export default Layout