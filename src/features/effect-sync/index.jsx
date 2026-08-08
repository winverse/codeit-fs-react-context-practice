import Exercise from './Exercise';

export default function EffectSyncPractice() {
  return (
    <section>
      <header className="practice-heading">
        <p className="step">실습 03</p>
        <h3>useEffect로 외부 시스템과 동기화하기</h3>
        <p>React state를 DOM과 localStorage에 동기화하고 정리합니다.</p>
      </header>
      <p className="work-files">
        <strong>작업 파일</strong>
        <code>src/features/effect-sync/Exercise.jsx</code>
      </p>
      <ol className="task-list">
        <li>글자 크기 state가 바뀔 때 DOM의 data 속성을 갱신합니다.</li>
        <li>현재 설정을 localStorage에 저장합니다.</li>
        <li>다른 실습으로 이동할 때 이전 DOM 상태를 복원합니다.</li>
      </ol>
      <Exercise />
    </section>
  );
}
