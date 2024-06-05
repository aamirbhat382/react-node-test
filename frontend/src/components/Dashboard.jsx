import React from 'react';
import { Table, Button, Badge } from 'react-bootstrap';

const Dashboard = () => {
  const data = [
    { id: 1, name: 'John Doe', role: 'Admin', dateCreated: '2024-01-01', status: 'Active' },
    { id: 2, name: 'Jane Smith', role: 'User', dateCreated: '2024-02-15', status: 'Inactive' },
    { id: 3, name: 'Jim Brown', role: 'Moderator', dateCreated: '2024-03-20', status: 'Active' },
    { id: 4, name: 'Jake White', role: 'User', dateCreated: '2024-04-25', status: 'Pending' },
    { id: 5, name: 'Jill Green', role: 'User', dateCreated: '2024-05-30', status: 'Active' },
    { id: 6, name: 'Jack Black', role: 'User', dateCreated: '2024-06-30', status: 'Active'},
    { id: 7, name: 'Jenny Blue', role: 'User', dateCreated: '2024-07-30', status: 'Active'},
    { id: 8, name: 'Jeff Red', role: 'User', dateCreated: '2024-08-30', status: 'Active'},
    { id: 9, name: 'Jesse Pink', role: 'User', dateCreated: '2024-09-30', status: 'Active'},
    { id: 10, name: 'Jade Yellow', role: 'User', dateCreated: '2024-10-30', status: 'Active'},
    { id: 11, name: 'Jasper Brown', role: 'User', dateCreated: '2024-11-30', status: 'Active'},
    { id: 12, name: 'Jasmine Green', role: 'User', dateCreated: '2024-12-30', status: 'Active'},
    { id: 13, name: 'Jared Black', role: 'User', dateCreated: '2025-01-30', status: 'Active'},
    { id: 14, name: 'Jocelyn Blue', role: 'User', dateCreated: '2025-02-30', status: 'Active'},
    { id: 15, name: 'Jasper Red', role: 'User', dateCreated: '2025-03-30', status: 'Active'},
    { id: 16, name: 'Jesse Pink', role: 'User', dateCreated: '2025-04-30', status: 'Active'},
    { id: 17, name: 'Jade Yellow', role: 'User', dateCreated: '2025-05-30', status: 'Active'},
    { id: 18, name: 'Jasper Brown', role: 'User', dateCreated: '2025-06-30', status: 'Active'},
    { id: 19, name: 'Jasmine Green', role: 'User', dateCreated: '2025-07-30', status: 'Active'},
    { id: 20, name: 'Jared Black', role: 'User', dateCreated: '2025-08-30', status: 'Active'}

  ];

  return (
    <div className="container mt-5 ">
      <h1 className="mb-4 text-light">User Management</h1>
      <Table striped bordered hover  responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Date Created</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.role}</td>
              <td>{user.dateCreated}</td>
              <td>
                <Badge bg={
                  user.status === 'Active' ? 'success' :
                  user.status === 'Inactive' ? 'secondary' :
                  user.status === 'Pending' ? 'warning' : 'primary'
                }>
                  {user.status}
                </Badge>
              </td>
              <td>
                <span className="me-2">
                    <i className="bi bi-pencil-square text-warning"></i>
                </span>
                <span>
                    <i className="bi bi-trash text-danger"></i>
                </span>
                <span>
                    <i className="bi bi-eye text-dark"></i>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Dashboard;
