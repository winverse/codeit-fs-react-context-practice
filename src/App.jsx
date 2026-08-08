import { useState } from 'react';
import './App.css';
import { Dashboard } from './components/Dashboard';

function App() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const toggleNotifications = () => {
    setNotificationsEnabled((previousValue) => !previousValue);
  };

  // TODO 3: NotificationProvider가 앱에 전역 데이터를 제공하도록 수정합니다.
  // 수정한 뒤에는 Dashboard에 알림 관련 props를 전달하지 않습니다.
  return (
    <Dashboard
      notificationsEnabled={notificationsEnabled}
      toggleNotifications={toggleNotifications}
    />
  );
}

export default App;
