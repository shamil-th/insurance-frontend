import React from 'react';
import Row from './Row';
import TableCss from './Table.module.css';


const Table = ({applications, UpdStatus}) => {
    
  return (
    <table>
        <thead className={TableCss.header}>
          <tr>
            <th>Name</th>
            <th>Mail</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {applications.map((app) => (
            <Row app={app} UpdStatus={UpdStatus} key={app._id} />
          ))}</tbody>
      </table>
  )
}

export default Table