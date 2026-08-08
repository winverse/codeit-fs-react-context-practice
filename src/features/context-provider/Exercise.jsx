import { useState } from 'react';
import '../practice.css';

function Toolbar({ notificationsEnabled }) {
  return (
    <div className="status-row">
      <strong>알림 센터</strong>
      <span className={`status-badge ${notificationsEnabled ? '' : 'off'}`}>
        {notificationsEnabled ? '알림 켜짐' : '알림 꺼짐'}
      </span>
    </div>
  );
}

function Settings({ notificationsEnabled, toggleNotifications }) {
  return (
    <div>
      <p>알림 상태를 앱 전체에서 공유합니다.</p>
      <button type="button" onClick={toggleNotifications}>
        알림 {notificationsEnabled ? '끄기' : '켜기'}
      </button>
    </div>
  );
}

export default function Exercise() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const toggleNotifications = () => {
    setNotificationsEnabled((previousValue) => !previousValue);
  };

  // TODO:
  // 1. NotificationContext.js에 Context와 Custom Hook을 만드세요.
  // 2. NotificationProvider.jsx에 state와 변경 함수를 옮기세요.
  // 3. 중간 props 전달 없이 Toolbar와 Settings에서 Context 값을 읽으세요.
  return (
    <div className="exercise-card">
      <Toolbar notificationsEnabled={notificationsEnabled} />
      <Settings
        notificationsEnabled={notificationsEnabled}
        toggleNotifications={toggleNotifications}
      />
    </div>
  );
}
