import { DisplayModeProvider } from './DisplayModeProvider';
import '../practice.css';

function ModePanel() {
  // TODO: useDisplayMode()로 mode와 toggleMode를 읽어 아래 자리 표시자를
  // 현재 모드 안내와 모드 변경 버튼으로 교체하세요.
  return (
    <div className="exercise-card">
      <div className="placeholder">
        Context 값을 읽어 라이트/다크 모드 UI를 완성하세요.
      </div>
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
