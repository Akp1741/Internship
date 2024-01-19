import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface User {
  userId: string;
  id: string;
  title: string;
  body: string;
}

const UpdateForms: React.FC = () => {
  const navigate = useNavigate();

  const [userId, setUserId] = useState<string>('');
  const [id, setId] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [body, setBody] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [successMessage, setSuccessMessage] = useState<string>('');
  

  const handleUpdateData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId,
          title,
          body,
        } as User),
      });
  
      if (!response.ok) {
        throw new Error('Failed to add data');
      }
  
      console.log('Data updated successfully');
      setErrorMessage('');
      setSuccessMessage('Data updated successfully');
      resetForm();
      window.alert('Data updated successfully');
      navigate('/ProductList');
    } catch (error) {
      console.error('Error adding data:', error);
      setErrorMessage('Error adding data. Please try again.');
      setSuccessMessage('');
    }
  };
    const resetForm = () => {
    setUserId('');
    setId('');
    setTitle('');
    setBody('');
  };

  return (
    <div style={{ marginTop: 50, marginLeft: 100 }}>
      <h2>Update Data</h2>
      
      <form className="vertical-form">
        <div>
          <table border={1} className='table table-bordered' style={{ display: 'auto', justifyContent: 'center', marginBottom: '8px',padding:'10px' }}>
    
            <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} /><br/>
            <textarea value={body} placeholder="Body" onChange={(e) => setBody(e.target.value)} /><br/>
            <button type="button" onClick={handleUpdateData}>
              Update Data
            </button>
          </table>
        </div>
      </form>
    </div>
  );
};

export default UpdateForms;
