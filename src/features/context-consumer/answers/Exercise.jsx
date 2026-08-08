import { useDisplayMode } from '../DisplayModeContext';
import { DisplayModeProvider } from '../DisplayModeProvider';
import '../../practice.css';

function ModePanel() {
  const { mode, toggleMode } = useDisplayMode();

  return (
    <div className={`exercise-card ${mode === 'dark' ? 'dark-preview' : ''}`}>
      <div className="status-row">
        <h4>{mode === 'light' ? '라이트 모드' : '다크 모드'}</h4>
        <span className="status-badge">{mode}</span>
      </div>
      <p>Context에서 읽은 현재 모드를 카드에 미리 보여 줍니다.</p>
      <button type="button" onClick={toggleMode}>
        {mode === 'light' ? '다크 모드로 변경' : '라이트 모드로 변경'}
      </button>
    </div>
  );
}

export default function Exercise() {
  return (
    <DisplayModeProvider>
      <ModePanel />
    </DisplayModeProvider>
  );
}
