import React from 'react';
import ApplicationTable from './ApplicationTable';
import AdminCss from './Admin.module.css';
import NavBar from '../common/NavBar';


const Admin = () => {


  return (
    <>
      <div><NavBar /></div>
      <div className={AdminCss.admin_page}>
        <div className='container'>
          <ApplicationTable/>
        </div>
      </div>
    </>
  )
}

export default Admin