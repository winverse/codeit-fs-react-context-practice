import Exercise from './Exercise';

export default function ContextProviderPractice() {
  return (
    <section>
      <header className="practice-heading">
        <p className="step">실습 01</p>
        <h3>Context로 데이터 내려주기</h3>
        <p>Prop Drilling 코드를 Context와 Provider 구조로 바꿉니다.</p>
      </header>
      <div className="work-files">
        <strong>작업 파일</strong>
        <ul>
          <li>
            <code>src/features/context-provider/NotificationContext.js</code>
          </li>
          <li>
            <code>src/features/context-provider/NotificationProvider.jsx</code>
          </li>
          <li>
            <code>src/features/context-provider/Exercise.jsx</code>
          </li>
        </ul>
      </div>
      <ol className="task-list">
        <li>Context와 Custom Hook을 만듭니다.</li>
        <li>Provider가 알림 state와 변경 함수를 제공하게 합니다.</li>
        <li>중간 컴포넌트의 알림 관련 props를 제거합니다.</li>
      </ol>
      <Exercise />
    </section>
  );
}
