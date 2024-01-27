import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllapplications } from '../../features/admin/AdminSlice';
import Table from './Table';
import { useLocation } from 'react-router-dom';
import NavBar from '../common/NavBar';

const Pending = () => {

    const applications = useSelector((state) => state.admin.applications);

    let dispatch = useDispatch();
    let location = useLocation();
    
    const status = location.state.currentStatus ;

    useEffect(() => {
        const data = {status:status,searchValue:""}
        dispatch(getAllapplications(data));
    }, [dispatch])

    return (
        <>
        <div><NavBar/></div>
        <div className='container'>
           <Table applications={applications} UpdStatus={'Pending'}/>
        </div>
        </>
    )
}

export default Pending