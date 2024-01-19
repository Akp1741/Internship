  import React, { useState, useEffect } from 'react';
  import {useNavigate } from 'react-router-dom';
  import UpdateForm from './UpdateForms';

  interface User {
    userId: number;
    id: number;
    title: string;
    body: string;
  }

  const Users: React.FC = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const [isViewVisible, setIsViewVisible] = useState(false);

    useEffect(() => {
      const fetchUsers = async () => {
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/posts');

          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }

          const data: User[] = await response.json();
          setUsers(data);
        } catch (error: any) {
          setError(error.message || 'An error occurred while fetching data');
        } finally {
          setLoading(false);
        }
      };

      fetchUsers();
    }, []);

    const handleAddButtonClick = () => {
      navigate('/addData');
    };
  const handleUpdateClick = async (user: User) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${user.id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }

      const userData: User = await response.json();
      setSelectedUser(userData);
      navigate('/UpdateForms'); 
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

    const handleReadClick = (user: User) => {
      setSelectedUser(user);
      setIsViewVisible(true);
    };

    const handleUpdateSubmit = (id: number, title: string, body: string) => {
      setUsers((prevUsers) =>
        prevUsers.map((u) => (u.id === id ? { ...u, title, body } : u))
      );
      setSelectedUser(null);
      setIsViewVisible(false);
      navigate('/ProductList');
    };

    const handleUpdateCancel = () => {
      setSelectedUser(null);
      setIsViewVisible(false);
    };

    const handleDeleteClick = (user: User) => {
      const shouldDelete = window.confirm('Are you sure you want to delete this record?');
      if (shouldDelete) {
        handleDeleteConfirm(user);
      }
    };

    const handleDeleteConfirm = async (user: User) => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${user.id}`, {
          method: 'DELETE',
        });

        if (!response.ok) {
          throw new Error('Failed to delete data');
        }

        setUsers((prevUsers) => prevUsers.filter((u) => u.id !== user.id));
        setIsViewVisible(false);
      } catch (error) {
        console.error('Error deleting data:', error);
      }
    };

    return (
      <div>
        <h2>User List</h2>
        <div>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '8px' }}>
            <div>
              <button onClick={handleAddButtonClick}>Add Data</button>
            </div>
          </div>
        </div>

        {!selectedUser && isViewVisible && (
          <div>
            <h2>Click on View Button to Show the data</h2>
          </div>
        )}

  {selectedUser && !isViewVisible && (
          <UpdateForm
            updateSubmit={handleUpdateSubmit}
            updateCancel={handleUpdateCancel}
            user={selectedUser}
          />
        )}

        <button onClick={() => setIsViewVisible(!isViewVisible)}>
          {isViewVisible ? ' Show View' : 'Hide View'}
        </button>

        {isViewVisible && selectedUser && (
          <div>
            <h3>User Details</h3>
            <p>User ID: {selectedUser.userId}</p>
            <p>ID: {selectedUser.id}</p>
            <p>Title: {selectedUser.title}</p>
            <p>Body: {selectedUser.body}</p>
            <button onClick={handleUpdateCancel}>Cancel </button>
          </div>
        )}

        <table className='table table-bordered' style={{ display: isViewVisible ? 'none' : 'block' }}>
          <thead>
            <tr style={{ border: '2px solid black', padding: '8px' }}>
              <th style={{ border: '2px solid black', padding: '8px' }}>User ID</th>
              <th style={{ border: '2px solid black', padding: '8px' }}>ID</th>
              <th style={{ border: '2px solid black', padding: '8px' }}>Title</th>
              <th style={{ border: '2px solid black', padding: '8px' }}>Body</th>
              <th style={{ border: '2px solid black', padding: '8px' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading && <tr>Loading...</tr>}
            {error && <tr>{error}</tr>}
            {users.map((user) => (
              <tr key={user.id}>
                <td style={{ border: '1px solid black', padding: '8px' }}>{user.userId}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{user.id}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{user.title}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{user.body}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>
                  <button onClick={() => handleReadClick(user)}>Read</button>
                  <button onClick={() => handleUpdateClick(user)}>Update</button>
                  <button onClick={() => handleDeleteClick(user)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  export default Users;

