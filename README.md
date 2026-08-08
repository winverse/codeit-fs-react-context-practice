# React Context 실습

`전역 데이터 다루기` 단원에서 배운 Context API를 사용해 알림 설정의 Prop
Drilling을 제거하는 실습입니다.

## 실행 방법

```bash
npm install
npm run dev
```

## 문제

현재 `notificationsEnabled`와 `toggleNotifications`는 `App → Dashboard →
Header·NotificationSettings` 순서로 props를 통해 전달됩니다.

다음 파일의 `TODO`를 순서대로 해결합니다.

1. `src/contexts/NotificationContext.js`에 Context와 `useNotification` Custom
   Hook을 만듭니다.
2. `src/providers/NotificationProvider.jsx`에 알림 상태와 변경 함수를 제공하는
   Provider를 만듭니다.
3. `App`을 Provider로 감싸고 `Dashboard`에서 알림 관련 props를 제거합니다.
4. `Header`와 `NotificationSettings`에서 `useNotification()`으로 필요한 값을
   읽습니다.

## 성공 조건

- `Dashboard`가 알림 관련 props를 받거나 전달하지 않습니다.
- 버튼을 누르면 Header의 상태와 설정 안내가 함께 바뀝니다.
- `npm run lint`, `npm run build`, `npm run format:check`가 모두 통과합니다.
