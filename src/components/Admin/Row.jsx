import React from 'react';
import TableCss from './Table.module.css'

const Row = ({ app }) => {
  return (
    <tr>
      <td><img className={TableCss.avatar} src={`http://localhost:4000/${app.avatars}`} alt="avatars" />
        {app.name}</td>
      <td>{app.email}</td>
      <td>{app.age}</td>
      <td>{app.gender}</td>
      <td>{app.status}</td>
      <td><span className="material-symbols-outlined">
        more_vert
      </span></td>
    </tr>
  )
}

export default Row