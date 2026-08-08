import '../../practice.css';
import { useNotification } from './NotificationContext';
import { NotificationProvider } from './NotificationProvider';

function Toolbar() {
  const { notificationsEnabled } = useNotification();

  return (
    <div className="status-row">
      <strong>알림 센터</strong>
      <span className={`status-badge ${notificationsEnabled ? '' : 'off'}`}>
        {notificationsEnabled ? '알림 켜짐' : '알림 꺼짐'}
      </span>
    </div>
  );
}

function Settings() {
  const { notificationsEnabled, toggleNotifications } = useNotification();

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
  return (
    <NotificationProvider>
      <div className="exercise-card">
        <Toolbar />
        <Settings />
      </div>
    </NotificationProvider>
  );
}
