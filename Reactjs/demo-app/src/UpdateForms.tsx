import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface User {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const UpdateForm: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state?.data || '123';

  const [storedData, setStoredData] = useState<User[]>([]);
  const [UserID, setUserID] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [body, setBody] = useState<string>('');

  useEffect(() => {
    const retrievedData = localStorage.getItem('myData');

    if (retrievedData) {
      setStoredData(JSON.parse(retrievedData));
    }
  }, []);

  const Userdata = storedData.filter((task) => task.id === data);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Update the corresponding data in storedData
    const updatedData = storedData.map((item) => {
      if (item.id === data) {
        return {
          ...item,
          userId: parseInt(UserID, 10),
          title,
          body,
        };
      }
      return item;
    });

    // Save the updated storedData back to localStorage
    localStorage.setItem('myData', JSON.stringify(updatedData));

    // You can also update the state if necessary
    console.log(updatedData);
    setStoredData(updatedData);

    navigate('/ProductList');
  };

  return (
    <div style={{ margin: 20 }}>
      <h2>Update Data</h2>
      {Userdata.map((item) => (
        <form onSubmit={handleSubmit} style={{ margin: 20 }} key={item.id}>
          <label>
            UserID:
            <input
              type="number"
              name="userId"
              value={item.userId}
              onChange={(e) => setUserID(e.target.value)}
            />
          </label>
          <br />
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <br />
          <label>
            Body:
            <input
              type="text"
              name="body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </label>
          <br />
          <button type="submit">Update</button>
        </form>
      ))}
    </div>
  );
};

export default UpdateForm;
