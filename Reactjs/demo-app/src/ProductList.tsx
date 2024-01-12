/*
import React, { useState, useEffect } from 'react';

interface User {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Users: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const storedData = localStorage.getItem('usersData');
        if (storedData) {
          const parsedData: User[] = JSON.parse(storedData);
          setUsers(parsedData);
          setLoading(false);
          return;
        }

        const response = await fetch('https://jsonplaceholder.typicode.com/posts');

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data: User[] = await response.json();
        setUsers(data);
        localStorage.setItem('usersData', JSON.stringify(data));
      } catch (error: any) {
        setError(error.message || 'An error occurred while fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleAdd = () => {
 
    const newUser: User = {
      userId: Math.floor(Math.random() * 1000), 
      id: users.length + 1, 
      title: 'New Title',
      body: 'New Body',
    };

    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    localStorage.setItem('usersData', JSON.stringify(updatedUsers));
  };

  const handleDelete = (userId: number) => {
  
    const updatedUsers = users.filter((user) => user.userId !== userId);
    setUsers(updatedUsers);
    localStorage.setItem('usersData', JSON.stringify(updatedUsers));
  };

  const handleUpdate = (userId: number) => {
    // Add your logic to update a user based on userId
    const updatedUsers = users.map((user) =>
      user.userId === userId ? { ...user, title: 'Updated Title', body: 'Updated Body' } : user
    );

    setUsers(updatedUsers);
    localStorage.setItem('usersData', JSON.stringify(updatedUsers));
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h2>User List</h2>
      <button onClick={handleAdd}>Add User</button>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>User ID</th>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 &&
            users.map((user) => (
              <tr key={user.userId}>
                <td style={{ border: '1px solid black', padding: '8px' }}>{user.userId}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{user.id}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{user.title}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{user.body}</td>
                <td>
                  <button onClick={() => handleUpdate(user.userId)}>Update</button>
                  <button onClick={() => handleDelete(user.userId)}>Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;

*/
import React, { useState, useEffect } from 'react';

interface User {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Users: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [formData, setFormData] = useState<User>({ userId: 0, id: 0, title: '', body: '' });
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const storedData = localStorage.getItem('usersData');
        if (storedData) {
          const parsedData: User[] = JSON.parse(storedData);
          setUsers(parsedData);
          setLoading(false);
          return;
        }

        const response = await fetch('https://jsonplaceholder.typicode.com/posts');

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data: User[] = await response.json();
        setUsers(data);
        localStorage.setItem('usersData', JSON.stringify(data));
      } catch (error: any) {
        setError(error.message || 'An error occurred while fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleUpdateData = () => {
    if (selectedId !== null) {
      const updatedUsers = users.map((user) =>
        user.id === selectedId ? { ...user, title: formData.title, body: formData.body } : user
      );

      setUsers(updatedUsers);
      localStorage.setItem('usersData', JSON.stringify(updatedUsers));
      setSelectedId(null);
      setFormData({ userId: 0, id: 0, title: '', body: '' });
    }
  };

  const handleCancelUpdate = () => {
    setSelectedId(null);
    setFormData({ userId: 0, id: 0, title: '', body: '' });
  };

  const handleUpdateClick = (id: number) => {
    setSelectedId(id);
    const userToUpdate = users.find((user) => user.id === id);

    if (userToUpdate) {
      setFormData({ ...userToUpdate });
    }
  };

  const handleDeleteData = (id: number) => {
    // Alert for delete
    if (window.confirm('Are you sure you want to delete this data?')) {
      const updatedUsers = users.filter((user) => user.id !== id);
      setUsers(updatedUsers);
      localStorage.setItem('usersData', JSON.stringify(updatedUsers));
    }
  };

  const handleAddData = () => {
    setShowForm(true);
  };

  const handleAddDataSubmit = () => {
    const newId = users.length > 0 ? users[users.length - 1].id + 1 : 1;

    const newData: User = {
      userId: Math.floor(Math.random() * 1000),
      id: newId,
      title: formData.title,
      body: formData.body,
    };

    const updatedUsers = [newData, ...users]; // Show the last added data on top
    setUsers(updatedUsers);
    localStorage.setItem('usersData', JSON.stringify(updatedUsers));
    setShowForm(false);
    setFormData({ userId: 0, id: 0, title: '', body: '' });
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h2>User List</h2>
      <button onClick={handleAddData}>Add Data</button>

      {showForm && (
        <div>
          <label>
            Title:
            <input
              type='text'
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            />
          </label>
          <br />
          <label>
            Body:
            <input
              type='text'
              value={formData.body}
              onChange={(e) => setFormData({ ...formData, body: e.target.value })}
            />
          </label>
          <br />
          <button onClick={handleAddDataSubmit}>Add</button>
        </div>
      )}

      <table className='table table-bordered'>
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
          {users.length > 0 &&
            users.map((user) => (
              <tr key={user.id}>
                <td style={{ border: '1px solid black', padding: '8px' }}>{user.userId}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{user.id}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{user.title}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{user.body}</td>
                <td style={{ border: '1px solid black, padding: 8px' }}>
                  <button onClick={() => handleUpdateClick(user.id)}>Update</button>
                  <button onClick={() => handleDeleteData(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
