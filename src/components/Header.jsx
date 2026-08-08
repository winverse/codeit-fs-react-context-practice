export function Header({ notificationsEnabled }) {
  // TODO 4: useNotification()으로 알림 상태를 읽습니다.
  return (
    <header className="header">
      <h1>Codeit 알림 센터</h1>
      <span className={`status ${notificationsEnabled ? '' : 'off'}`}>
        알림 {notificationsEnabled ? '켜짐' : '꺼짐'}
      </span>
    </header>
  );
}
