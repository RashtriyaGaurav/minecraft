import React, { useState } from 'react';
import './App.css';

function App() {
  const [serverName, setServerName] = useState('');
  const [message, setMessage] = useState('');

  const createServer = async () => {
    const response = await fetch('/api/create-server', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ serverName }),
    });
    const data = await response.json();
    setMessage(data.message);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Minecraft Server Hosting</h1>
        <input
          type="text"
          placeholder="Enter server name"
          value={serverName}
          onChange={(e) => setServerName(e.target.value)}
        />
        <button onClick={createServer}>Create Server</button>
        {message && <p>{message}</p>}
      </header>
    </div>
  );
}

export default App;
