import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllapplications } from '../../features/admin/AdminSlice';
import Table from './Table';
import { useLocation } from 'react-router-dom';
import NavBar from '../common/NavBar';

const Cancelled = () => {
    const applications = useSelector((state) => state.admin.applications);
    const searchValue = useSelector((state) => state.admin.searchValue);

    let dispatch = useDispatch();
    let location = useLocation();

    const status = location.state.currentStatus;

    useEffect(() => {
        const data = { status: status, searchValue: searchValue }
        dispatch(getAllapplications(data));
    }, [dispatch,searchValue])

    return (
        <>
            <div><NavBar /></div>
            <div className='container'>
                <Table applications={applications} UpdStatus={'Cancelled'} />
            </div>
        </>

    )
}

export default Cancelled