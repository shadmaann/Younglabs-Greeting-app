import React, { useState } from 'react';
import './style.css';

function App() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleGreet = async () => {
    if (!name) {
      setMessage('Name is required.');
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/api/greet?name=${name}`);
      const data = await response.json();
      setMessage(data.message || data.error);
    } catch (error) {
      setMessage('Error fetching the greeting.');
    }
  };

  return (
    <div className="App">
      <h1>Younglabs Greeting App</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleGreet}>Get Greeting</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default App;