import React, { useState } from 'react';
import TableCss from './Table.module.css'
import { useDispatch } from 'react-redux';
import { getAllapplications, statusUpdate } from '../../features/admin/AdminSlice';

const Row = ({ app, UpdStatus }) => {

  const [status, setStatus] = useState(app.status);
  const [moreBtn, setMoreBtn] = useState(false);
  const id = app._id;

  let dispatch = useDispatch();

  const statusUpdation = async (value) => {

    setStatus('');
    const data = { id, value };

    setStatus(value);

    await dispatch(statusUpdate(data));
    if (UpdStatus) {
      const update = { status: UpdStatus, searchValue: "" }
      dispatch(getAllapplications(update))
    }
    else {
      const update = { status: "", searchValue: "" };
      dispatch(getAllapplications(update));
    }
  }

  return (
    <tr className={TableCss.table_row}>
      <td className={TableCss.username}><img className={TableCss.avatar} src={`http://localhost:4000/${app.avatars}`} alt="avatars" />
        {app.name}</td>
      <td>{app.email}</td>
      <td>{app.age}</td>
      <td>{app.gender}</td>
      <td>{status}</td>
      <td onClick={() => setMoreBtn(!moreBtn)} className={TableCss.more_buttonn}><span className="material-symbols-outlined">
        more_vert
      </span>
        {moreBtn && <div className={TableCss.status_opt}>
          <p onClick={() => statusUpdation('Pending')}>Pending</p>
          <p onClick={() => statusUpdation('Approved')}>Approve</p>
          <p onClick={() => statusUpdation('Cancelled')}>Cancel</p>
        </div>}
      </td>
    </tr>
  )
}

export default Row