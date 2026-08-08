import { useEffect, useState } from 'react';
import '../../practice.css';

const scaleLabels = {
  small: '작게',
  medium: '보통',
  large: '크게',
};

export default function Exercise() {
  const [scale, setScale] = useState('medium');

  useEffect(() => {
    const root = document.documentElement;
    const previousScale = root.dataset.scale;

    root.dataset.scale = scale;
    localStorage.setItem('fontScale', scale);

    return () => {
      if (previousScale === undefined) {
        delete root.dataset.scale;
      } else {
        root.dataset.scale = previousScale;
      }
    };
  }, [scale]);

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
