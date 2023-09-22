import React from 'react';

const UserDetails = ({ user }) => {
  return (
    <div className="user-details">
      <div className="user-detail">
        <i className="fas fa-envelope"></i>
        <span>{user.email}</span>
      </div>
      <div className="user-detail">
        <i className="fas fa-user"></i>
        <span>{user.name}</span>
      </div>
      <div className="user-detail">
        <i className="fas fa-phone"></i>
        <span>{user.phoneNumber}</span>
      </div>
      <div className="user-detail">
        <i className="fas fa-id-card"></i>
        <span>{user.adharNumber}</span>
      </div>
    </div>
  );
};

export default UserDetails;


/* Styling for the User Details component */
.user-details {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  margin: 0 auto;
}

.user-detail {
  display: flex;
  align-items: center;
  margin: 10px 0;
}

.user-detail i {
  font-size: 24px;
  margin-right: 10px;
  color: #007BFF; /* Change the color to your preference */
}

.user-detail span {
  font-size: 18px;
  font-weight: bold;
  color: #333;
}

/* Style the heading (if used in the same component) */
h1 {
  text-align: center;
  color: #007BFF;
  margin-bottom: 20px;
}

/* Optional: Add hover effect on icons */
.user-detail i:hover {
  color: #FF5722; /* Change the hover color to your preference */
}
