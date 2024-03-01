
import React from 'react';

const Notification = ({ title, body }) => {
  return (
    <div className="notification">
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
};

export default Notification;