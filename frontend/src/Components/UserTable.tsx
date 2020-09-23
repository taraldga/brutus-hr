import React from 'react';
import User from '../Models/User';

const TableRow: React.FC<{user: User}> = ({user}) => {
  return (
    <tr>
      <td>{user.first_name}</td>
      <td>{user.last_name}</td>
      <td>{user.age}</td>
      <td>{user.street}</td>
      <td>{user.city}</td>
      <td>{user.state}</td>
      <td>{user.latitude}</td>
      <td>{user.longitude}</td>
      <td>{user.ccnumber}</td>
    </tr>
  )
}


const UserTable: React.FC<{users: User[]}> = ({users}) => {
  return(
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Age</th>
          <th>Street</th>
          <th>City</th>
          <th>State</th>
          <th>Latitude</th>
          <th>Longitude</th>
          <th>CCNumber</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => {
          return <TableRow user={user} />
        })}
      </tbody>
    </table>
  )
}


export default UserTable;