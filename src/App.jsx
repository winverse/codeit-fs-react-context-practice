import { useState } from 'react';
import './App.css';
import ContextConsumerPractice from './features/context-consumer';
import ContextProviderPractice from './features/context-provider';
import EffectSyncPractice from './features/effect-sync';

const sessions = [
  {
    id: 'context-provider',
    label: 'Context 데이터 제공',
    component: ContextProviderPractice,
  },
  {
    id: 'context-consumer',
    label: 'Context 데이터 사용',
    component: ContextConsumerPractice,
  },
  {
    id: 'effect-sync',
    label: 'Effect 동기화',
    component: EffectSyncPractice,
  },
];

function App() {
  const [activeSessionId, setActiveSessionId] = useState(sessions[0].id);
  const activeSession = sessions.find(
    (session) => session.id === activeSessionId,
  );
  const ActivePractice = activeSession.component;

  return (
    <div className="app-shell">
      <header className="app-header">
        <p className="eyebrow">18. React로 데이터 다루기</p>
        <h1>전역 데이터 실습</h1>
        <p>
          강의 순서대로 버튼을 선택하고 각 폴더의 <code>TODO</code>를
          해결합니다.
        </p>
      </header>

      <div className="workspace">
        <aside className="session-panel">
          <h2>실습 선택</h2>
          <nav aria-label="전역 데이터 실습">
            {sessions.map((session, index) => (
              <button
                key={session.id}
                className={
                  session.id === activeSessionId
                    ? 'session-button active'
                    : 'session-button'
                }
                type="button"
                aria-pressed={session.id === activeSessionId}
                data-session-id={session.id}
                onClick={() => setActiveSessionId(session.id)}
              >
                <span>{String(index + 1).padStart(2, '0')}</span>
                {session.label}
              </button>
            ))}
          </nav>
        </aside>

        <main className="practice-panel">
          <ActivePractice />
        </main>
      </div>
    </div>
  );
}

export default App;
