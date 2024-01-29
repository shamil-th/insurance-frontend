import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllapplications } from '../../features/admin/AdminSlice';
import Table from './Table';

const ApplicationTable = () => {

  const applications = useSelector((state) => state.admin.applications);
  const searchValue = useSelector((state) => state.admin.searchValue);

  let dispatch = useDispatch();

  useEffect(() => {

    const data = {status:"", searchValue:searchValue}
    dispatch(getAllapplications(data));

  }, [dispatch,searchValue])

  return (
      
    <Table applications= {applications}/>
  )
}

export default ApplicationTable