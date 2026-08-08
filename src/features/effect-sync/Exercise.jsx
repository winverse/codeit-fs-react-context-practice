import { useState } from 'react';
import '../practice.css';

const scaleLabels = {
  small: '작게',
  medium: '보통',
  large: '크게',
};

export default function Exercise() {
  const [scale, setScale] = useState('medium');

  // TODO: useEffect를 사용해 다음 작업을 수행하세요.
  // 1. scale이 바뀔 때 document.documentElement.dataset.scale을 갱신합니다.
  // 2. localStorage의 "fontScale"에 현재 scale을 저장합니다.
  // 3. cleanup에서 실습 전의 data-scale 값을 복원합니다.

  return (
    <div className="exercise-card">
      <h4>글자 크기 설정</h4>
      <p>
        현재 설정: <strong>{scaleLabels[scale]}</strong>
      </p>
      <div className="scale-options">
        {Object.entries(scaleLabels).map(([value, label]) => (
          <button key={value} type="button" onClick={() => setScale(value)}>
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
