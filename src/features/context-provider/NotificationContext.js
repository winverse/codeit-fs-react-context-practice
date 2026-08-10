import { createContext, useContext } from 'react';

// 이 Context로 다음 값을 공유합니다.
// - notificationsEnabled: 알림이 켜져 있는지를 나타내는 boolean state
// - toggleNotifications: 알림 state를 반대로 바꾸는 함수
export const NotificationContext = createContext(null);

export function useNotification() {
  return useContext(NotificationContext);
}
