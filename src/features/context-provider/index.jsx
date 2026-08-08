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
        <strong>작업 파일 (순서대로)</strong>
        <ol>
          <li>
            <code>src/features/context-provider/NotificationContext.js</code>
          </li>
          <li>
            <code>src/features/context-provider/NotificationProvider.jsx</code>
          </li>
          <li>
            <code>src/features/context-provider/Exercise.jsx</code>
          </li>
        </ol>
      </div>
      <ol className="task-list">
        <li>Custom Hook에 Provider 누락 검사를 추가합니다.</li>
        <li>Provider의 알림 state 변경 함수를 완성합니다.</li>
        <li>중간 컴포넌트의 알림 관련 props를 제거합니다.</li>
      </ol>
      <p className="answer-path">
        <strong>정답 파일</strong>
        <code>src/features/context-provider/answers/</code>
      </p>
      <Exercise />
    </section>
  );
}
