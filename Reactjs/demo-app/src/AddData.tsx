import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface User {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const AddData: React.FC = () => {
  const navigate = useNavigate();

  const [storedData, setStoredData] = useState<User[]>([]);
  const [UserID, setUserID] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  useEffect(() => {
    const retrievedData = localStorage.getItem('myData');

    if (retrievedData) {
      setStoredData(JSON.parse(retrievedData));
    }
  }, []);

  const handleAddButton = async (e: React.FormEvent) => {
    e.preventDefault();

    const newUserData: User = {
      userId: parseInt(UserID, 10),
      id: Date.now(),
      title,
      body,
    };

    const updatedData = [...storedData, newUserData];
    localStorage.setItem('myData', JSON.stringify(updatedData));

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUserData),
      });

      if (!response.ok) {
        throw new Error('Failed to add data to API');
      }

      console.log('Data added successfully to API');
      alert('Data added successfully!');
      navigate('/ProductList'); 
    } catch (error) {
      console.error('Error adding data to API:', error);
      alert('Error adding data. Please try again.');
    }
  };

  return (
    <div style={{ margin: 20 }}>
      <h2>Add Product</h2>
      <form onSubmit={handleAddButton}>
        <table>
          <tr>
            <th>UserID</th>
            <th>
              <input type="number" onChange={(e) => setUserID(e.target.value)} required />
            </th>
          </tr>
          <tr>
            <th>Title</th>
            <th>
              <input type="text" onChange={(e) => setTitle(e.target.value)} required />
            </th>
          </tr>
          <tr>
            <th>Body</th>
            <th>
              <input type="text" onChange={(e) => setBody(e.target.value)} required />
            </th>
          </tr>
        </table>
        <button style={{ marginTop: 10 }} type="submit">
          Add Item
        </button>
      </form>
    </div>
  );
};

export default AddData;
