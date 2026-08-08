# React 전역 데이터 실습

18페이지 `전역 데이터 다루기` 단원의 문제 해결 실습입니다. 한 번 clone한 뒤
화면 왼쪽의 버튼을 강의 순서대로 선택하고 각 폴더의 `TODO`를 해결합니다.

## 실행 방법

```bash
npm install
npm run dev
```

## 단원별 실습

| 순서 | 단원                                 | 수정 경로                                    |
| ---- | ------------------------------------ | -------------------------------------------- |
| 1    | Context로 데이터 내려주기            | `src/features/context-provider/`             |
| 2    | 다크 모드 적용하기                   | `src/features/context-consumer/Exercise.jsx` |
| 3    | useEffect로 외부 시스템과 동기화하기 | `src/features/effect-sync/Exercise.jsx`      |

각 실습의 화면 안내와 코드의 `TODO`를 확인합니다. 완료한 이전 실습은 다음
실습으로 이동한 뒤에도 코드를 그대로 유지합니다.

## 공통 성공 조건

```bash
npm run lint
npm run build
npm run format:check
```
