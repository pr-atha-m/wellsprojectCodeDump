import React, { useState } from 'react';
import './AlertPopup.css'; // You can create a CSS file for styling

function AlertPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState({ type: null, message: '' });

  // Function to show the alert popup with the provided content
  const showAlertPopup = (type, message) => {
    setPopupContent({ type, message });
    setShowPopup(true);
  };

  // Function to hide the alert popup
  const hideAlertPopup = () => {
    setShowPopup(false);
  };

  // Function to handle the API call (replace this with your actual API call)
  const handleApiCall = () => {
    // Simulate an API call with a delay
    setTimeout(() => {
      const success = true; // Replace with your actual success/error logic
      if (success) {
        showAlertPopup('success', 'Deposit successful. Your new balance is $1000.'); // Update with the actual new balance
      } else {
        showAlertPopup('error', 'Error: Unable to complete the deposit.');
      }
    }, 2000); // Simulated delay of 2 seconds
  };

  return (
    <div>
      <button onClick={handleApiCall}>Deposit Money</button>
      {showPopup && (
        <div className="popup-container">
          <div className="popup">
            <span className="close-button" onClick={hideAlertPopup}>
              &times;
            </span>
            {popupContent.type === 'success' ? (
              <p className="success">{popupContent.message}</p>
            ) : (
              <p className="error">{popupContent.message}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default AlertPopup;

/* AlertPopup.css */
.popup-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.popup {
  background: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  text-align: center;
  max-width: 300px;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}

.success {
  color: #4caf50; /* Green color for success */
}

.error {
  color: #f44336; /* Red color for error */
}
