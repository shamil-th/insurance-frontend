import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import AddApplication from './AddApplication';
import NavCss from './Navbar.module.css';
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../../features/admin/AdminSlice';

const NavBar = () => {
  const [modal, setModal] = useState(false);

  let navigate = useNavigate();
  let dispatch = useDispatch();

  const search = (e) => {
    dispatch(setSearchValue(e.target.value));
  }


  const statusPage = (route) => {
    dispatch(setSearchValue(''))
    let path = `/${route}`;
    navigate(path, { state: { currentStatus: route } });
  }

  return (
    <div className={NavCss.navbar}>
      <div className={NavCss.header}>
        <ul className={NavCss.navlist}>
          <li onClick={() => statusPage('Admin')}>Home</li>
          <li onClick={() => statusPage('Pending')}>Pending</li>
          <li onClick={() => statusPage('Approved')}>Approved</li>
          <li onClick={() => statusPage('Cancelled')}>Cancelled</li>
        </ul>
        <div className={NavCss.search}>
          <div className={NavCss.search_box}>
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder='Search for clients' onChange={(e) => search(e)} />
          </div>
          <button className={NavCss.create} onClick={() => setModal(true)}>Add Application</button>
        </div>
      </div>
      {modal && <div className='overlay'>
        <AddApplication setModal={setModal} />
      </div>}</div>
  )
}

export default NavBar