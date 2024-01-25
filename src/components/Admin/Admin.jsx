import React, { useState } from 'react';
import ApplicationTable from './ApplicationTable';
import AdminCss from './Admin.module.css';
import AddApplication from './AddApplication';

const Admin = () => {
    // const [modal,setModal] = useState(false)
  return (
    <div><div>
        <button>Add Application</button>
        <div>
            <AddApplication/>
         </div>
         <ApplicationTable/>
         </div>
         </div>
  )
}

export default Admin