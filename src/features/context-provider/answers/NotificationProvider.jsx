import { useState } from 'react';
import { NotificationContext } from './NotificationContext';

export function NotificationProvider({ children }) {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const toggleNotifications = () => {
    setNotificationsEnabled((previousValue) => !previousValue);
  };

  return (
    <NotificationContext.Provider
      value={{ notificationsEnabled, toggleNotifications }}
    >
      {children}
    </NotificationContext.Provider>
  );
}
