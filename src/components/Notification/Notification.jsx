// src/components/Notification/Notification.js
import React from 'react';
import { useNotifications } from '../../context/NotificationContext';

const Notification = () => {
  const { notifications, removeNotification } = useNotifications();

  return (
    <div className="fixed top-0 right-0 m-4 space-y-2">
      {notifications.map((notification, index) => (
        <div key={index} className="bg-blue-500 text-white p-4 rounded shadow-lg">
          {notification}
          <button onClick={() => removeNotification(index)} className="ml-4 px-2 py-1 rounded-md bg-blue-950">X</button>
        </div>
      ))}
    </div>
  );
};

export default Notification;
