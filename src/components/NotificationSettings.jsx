export function NotificationSettings({
  notificationsEnabled,
  toggleNotifications,
}) {
  // TODO 4: useNotification()으로 알림 상태와 변경 함수를 읽습니다.
  return (
    <section className="settings">
      <h2>알림 설정</h2>
      <p>
        현재 모든 알림이 {notificationsEnabled ? '활성화' : '비활성화'}되어
        있습니다.
      </p>
      <button type="button" onClick={toggleNotifications}>
        알림 {notificationsEnabled ? '끄기' : '켜기'}
      </button>
    </section>
  );
}
