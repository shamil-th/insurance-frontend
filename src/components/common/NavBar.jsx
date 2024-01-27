import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import AddApplication from './AddApplication';
import Alert from './Alert';

const NavBar = () => {
  const [modal, setModal] = useState(false);

  let navigate = useNavigate();


  const statusPage = (route) => {
    let path = `/${route}`;
    navigate(path, { state: { currentStatus: route } })
  }

  return (
    <div>  <button onClick={() => setModal(true)}>Add Application</button>
    <button onClick={() => statusPage('Pending')}>Pending</button>
    <button onClick={() => statusPage('Approved')}>Approved</button>
    <button onClick={() => statusPage('Cancelled')}>Cancelled</button>
    <button onClick={() => statusPage('Admin')}>Home</button>
    {modal && <div className='overlay'>
      <AddApplication setModal={setModal} />
    </div>}</div>
  )
}

export default NavBar