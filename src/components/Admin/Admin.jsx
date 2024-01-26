import React, { useState } from 'react';
import ApplicationTable from './ApplicationTable';
import AdminCss from './Admin.module.css';
import AddApplication from '../common/AddApplication';

const Admin = () => {
  const [modal, setModal] = useState(false)
  console.log(modal)

  return (
    <div className={AdminCss.admin_page}>
    <div className='container'>
      <button onClick={ ()=>setModal(true)}>Add Application</button>
      {modal && <div className='overlay'>
        <AddApplication setModal={setModal} />
      </div>}
      <ApplicationTable />
    </div>
    </div>
  )
}

export default Admin