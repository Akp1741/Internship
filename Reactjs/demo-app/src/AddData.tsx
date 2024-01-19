import React, { useState } from 'react';

const AddDataPage: React.FC = () => {
  const [userId, setUserId] = useState('');
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleAddData = async () => {
   
    if (!userId || !id || !title || !body) {
      setErrorMessage('All fields are required');
      setSuccessMessage(''); // Clear success message on validation failure
      return;
    }
  
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId,
          id,
          title,
          body,
        }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to add data');
      }

      console.log('Data added successfully');
      setErrorMessage(''); 
      setSuccessMessage('Data added successfully'); 
      resetForm(); 
  
      window.alert('Data added successfully');
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
      <h2>Add Data</h2>
      
      <form className="horizontal-form">
        <div><table border={1} className='table table-bordered' style={{ display: 'auto', justifyContent: 'center', marginBottom: '8px',padding:'10px' }}>
            
        <div className="form-group">
          <input type="number" placeholder="Enter UserID" value={userId} onChange={(e) => setUserId(e.target.value)} />
        </div>

        <div className="form-group">
          <input type="number" value={id} placeholder="EnterID" onChange={(e) => setId(e.target.value)} />
        </div>

        <div className="form-group">
          <input type="text" value={title} placeholder="Enter Title" onChange={(e) => setTitle(e.target.value)} />
        </div>

        <div className="form-group">
          <textarea value={body} placeholder="Enter Body" onChange={(e) => setBody(e.target.value)} />
        </div>

        {errorMessage && <div className="error-message">{errorMessage}</div>}
        {successMessage && <div className="success-message">{successMessage}</div>}

        <button type="button" onClick={handleAddData}>
          Add Data
        </button>
        </table>
        </div>
      </form>
     
    </div>
  );
};

export default AddDataPage;
