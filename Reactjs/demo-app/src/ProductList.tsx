
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface User {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Users: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isViewVisible, setIsViewVisible] = useState(false);
  const [isTableVisible, setIsTableVisible] = useState(true); // New state
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/');
        const jsonData: User[] = await response.json();

        localStorage.setItem('myData', JSON.stringify(jsonData));
        const retrievedData = localStorage.getItem('myData');

        if (retrievedData) {
          setUsers(JSON.parse(retrievedData));
        }

        console.log(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleAddButton = () => {
    navigate('/AddData');
  };

  const handleUpdate = (id: number) => {
    navigate('/UpdateForms', { state: { data: id } });
  };

  const handleRead = (user: User) => {
    setSelectedUser(user);
    setIsViewVisible(true);
    setIsTableVisible(false); // Hide the table
  };

  const handleReadCancel = () => {
    setSelectedUser(null);
    setIsViewVisible(false);
    setIsTableVisible(true); // Show the table
    navigate('/ProductList');
  };

  const handleDelete = async (id: number) => {
    const shouldDelete = window.confirm('Are you sure you want to delete this record?');
    
    if (!shouldDelete) {
      return;
    }
  
    try {
      // Make an API call to delete the data
      await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'DELETE',
      });
  
      // Remove the deleted item from local storage
      const updatedUsers = users.filter((user) => user.id !== id);
      setUsers(updatedUsers);
      localStorage.setItem('myData', JSON.stringify(updatedUsers));
  
      alert('Data deleted successfully!');
    } catch (error) {
      console.error('Error deleting data:', error);
      alert('Error deleting data. Please try again.');
    }
  
  };

  return (
    <div>
      <h2>User List</h2>
      <div>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '8px' }}>
          <div>
            <button onClick={handleAddButton}>Add Data</button>
          </div>
        </div>
      </div>
      {isViewVisible && selectedUser && (
        <div>
          <h3>User Details</h3>
          <p>User ID: {selectedUser.userId}</p>
          <p>ID: {selectedUser.id}</p>
          <p>Title: {selectedUser.title}</p>
          <p>Body: {selectedUser.body}</p>
          <button onClick={handleReadCancel}>Cancel</button>
        </div>
      )}

      {isTableVisible && ( 
        <table>
          <thead>
            <tr style={{ border: '2px solid black', padding: '8px' }}>
              <th style={{ border: '2px solid black', padding: '8px' }}>userID</th>
              <th style={{ border: '2px solid black', padding: '8px' }}>ID</th>
              <th style={{ border: '2px solid black', padding: '8px' }}>Title</th>
              <th style={{ border: '2px solid black', padding: '8px' }}>Body</th>
              <th style={{ border: '2px solid black', padding: '8px' }}>Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((item) => (
              <tr key={item.id}>
                <td style={{ border: '1px solid black', padding: '8px' }}>{item.userId}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{item.id}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{item.title}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{item.body}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>
                  <button onClick={() => handleRead(item)}>Read</button>
                  <button onClick={() => handleUpdate(item.id)}>Update</button>
                  <button onClick={() => handleDelete(item.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Users;

