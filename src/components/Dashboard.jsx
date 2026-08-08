import { Header } from './Header';
import { NotificationSettings } from './NotificationSettings';

export function Dashboard({ notificationsEnabled, toggleNotifications }) {
  // TODO 3: Context 적용 후에는 알림 관련 props를 받거나 전달하지 않습니다.
  return (
    <main className="app">
      <Header notificationsEnabled={notificationsEnabled} />
      <NotificationSettings
        notificationsEnabled={notificationsEnabled}
        toggleNotifications={toggleNotifications}
      />
    </main>
  );
}
