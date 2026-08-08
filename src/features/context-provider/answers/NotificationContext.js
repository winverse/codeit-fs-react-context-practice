import { createContext, useContext } from 'react';

export const NotificationContext = createContext(null);

export function useNotification() {
  const context = useContext(NotificationContext);

  if (context === null) {
    throw new Error(
      'useNotification은 NotificationProvider 안에서 사용해야 합니다.',
    );
  }

  return context;
}
