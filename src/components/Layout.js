import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Admin from './Admin/Admin';
import Pending from './Admin/Pending';
import Approved from './Admin/Approved';
import Cancelled from './Admin/Cancelled';
import Home from './customer/Home';

const Layout = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/pending' element={<Pending />} />
            <Route path='/approved' element={<Approved />} />
            <Route path='/cancelled' element={<Cancelled />} />
        </Routes>
    )
}

export default Layout