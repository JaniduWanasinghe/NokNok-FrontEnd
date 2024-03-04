import React, { useState, useEffect } from 'react';

const Notification = ({ message }) => {
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    if (message) {
      setShowNotification(true);

      // Automatically hide the notification after 5 seconds
      const timeout = setTimeout(() => {
        setShowNotification(false);
      }, 5000);

      return () => clearTimeout(timeout);
    }
  }, [message]);

  return (
    <div
      className={`fixed bottom-5 right-5 p-4 bg-green-500 text-white rounded ${
        showNotification ? 'opacity-100' : 'opacity-0 pointer-events-none'
      } transition-opacity duration-300 ease-in-out`}
    >
      {message}
    </div>
  );
};

export default Notification;
