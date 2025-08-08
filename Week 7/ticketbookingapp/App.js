import React, { useState } from 'react';
import GuestPage from './GuestPage';
import UserPage from './UserPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App" style={{ padding: '20px' }}>
      <h1>🎟️ Ticket Booking App</h1>

    
      <div style={{ marginBottom: '20px' }}>
        {isLoggedIn ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <button onClick={handleLogin}>Login</button>
        )}
      </div>

      {/* Conditional Page Rendering */}
      {isLoggedIn ? <UserPage /> : <GuestPage />}
    </div>
  );
}

export default App;