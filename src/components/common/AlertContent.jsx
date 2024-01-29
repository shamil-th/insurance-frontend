import React, { useEffect } from 'react';
import NavCss from './Navbar.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setAlert } from '../../features/admin/AdminSlice';

const AlertContent = () => {

  const alert = useSelector((state) => state.admin.alert);
  let dispatch = useDispatch();

  const hideAlert = () => {
    dispatch(setAlert(false))
  }

  useEffect(() => {
    setTimeout(hideAlert,3000)
  })

    return (
        <div className={alert ? NavCss.alert_box : NavCss.alert_box_hide}><p>Status Updated Successfully</p></div>
    )
}

export default AlertContent