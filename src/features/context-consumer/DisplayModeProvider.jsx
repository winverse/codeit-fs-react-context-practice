import { useState } from 'react';
import { DisplayModeContext } from './DisplayModeContext';

export function DisplayModeProvider({ children }) {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    setMode((previousMode) => (previousMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <DisplayModeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </DisplayModeContext.Provider>
  );
}
