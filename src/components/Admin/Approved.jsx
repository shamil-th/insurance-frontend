import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllapplications } from '../../features/admin/AdminSlice';
import Table from './Table';
import NavBar from '../common/NavBar';

const Approved = () => {

    const applications = useSelector((state) => state.admin.applications)

    let dispatch = useDispatch();

    useEffect(() => {

        const data = { status: 'Approved', searchValue: "" }
        dispatch(getAllapplications(data));

    }, [dispatch])

    return (
        <>
            <div><NavBar /></div>
            <div className='container'>
                <Table applications={applications} UpdStatus={'Approved'} />
            </div>
        </>

    )
}

export default Approved