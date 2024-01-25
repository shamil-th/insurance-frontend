import React from 'react'

const Row = ({app}) => {
  return (
    <tr>
        <td>{app.name}</td>
        <td>{app.email}</td>
        <td>{app.dob}</td>
        <td>{app.gender}</td>
        <td>{app.qualification}</td>
        <td>{app.status}</td>
    </tr>
  )
}

export default Row