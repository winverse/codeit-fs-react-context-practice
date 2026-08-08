import Exercise from './Exercise';

export default function ContextConsumerPractice() {
  return (
    <section>
      <header className="practice-heading">
        <p className="step">실습 02</p>
        <h3>다크 모드 적용하기</h3>
        <p>제공된 Custom Hook으로 Context 값을 읽어 화면을 완성합니다.</p>
      </header>
      <p className="work-files">
        <strong>작업 파일</strong>
        <code>src/features/context-consumer/Exercise.jsx</code>
      </p>
      <ol className="task-list">
        <li>
          <code>useDisplayMode()</code>로 현재 모드와 변경 함수를 읽습니다.
        </li>
        <li>현재 모드에 따라 카드의 스타일과 안내 문구를 바꿉니다.</li>
        <li>버튼에 모드 변경 함수를 연결합니다.</li>
      </ol>
      <p className="answer-path">
        <strong>정답 파일</strong>
        <code>src/features/context-consumer/answers/Exercise.jsx</code>
      </p>
      <Exercise />
    </section>
  );
}
