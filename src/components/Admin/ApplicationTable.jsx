import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllapplications } from '../../features/admin/AdminSlice';
import Row from './Row';

const ApplicationTable = () => {
    const applications = useSelector((state) => state.admin.applications);
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllapplications());
    },[])
    return (
        <>
         <table>
        <thead >
          <tr>
            <th>name</th>
            <th>Mail</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Qualification</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        {applications.map((app) => (
            <Row app={app} key={app._id}/>
        ))}</tbody>
        </table>
        </>
    )
}

export default ApplicationTable