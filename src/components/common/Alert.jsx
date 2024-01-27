import React from 'react';
import AlertCss from './Alert.module.css'

const Alert = ({setAlert ,setModal}) => {
  const hideForm = () => {
    setAlert(false);
    setModal(false);
  }
  return (
    <div className={AlertCss.alert_box}>
        <h2>Policy Added Successfully</h2>
        <button onClick={()=>hideForm()}>Okay</button>
    </div>
  )
}

export default Alert