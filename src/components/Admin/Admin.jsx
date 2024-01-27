import React, { useState } from 'react';
import ApplicationTable from './ApplicationTable';
import AdminCss from './Admin.module.css';
import NavBar from '../common/NavBar';


const Admin = () => {

  const [searchValue, setSearchValue] = useState('');

  return (
    <>
      <div><NavBar /></div>
      <div className={AdminCss.admin_page}>
        <div className='container'>
          <input type="text" placeholder='search' value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
          <ApplicationTable searchValue={searchValue} />
        </div>
      </div>
    </>
  )
}

export default Admin