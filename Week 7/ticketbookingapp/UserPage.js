import React from 'react';

const UserPage = () => {
  const handleBooking = () => {
    alert('Ticket booked successfully!');
  };

  return (
    <div>
      <h2>✅ User View</h2>
      <p>Welcome! You can now book tickets.</p>

      <button onClick={handleBooking} style={{ marginTop: '20px' }}>Book Ticket</button>
    </div>
  );
};

export default UserPage;