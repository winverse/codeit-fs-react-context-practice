import { createContext, useContext } from 'react';

export const DisplayModeContext = createContext(null);

export function useDisplayMode() {
  const context = useContext(DisplayModeContext);

  if (context === null) {
    throw new Error(
      'useDisplayMode는 DisplayModeProvider 안에서 사용해야 합니다.',
    );
  }

  return context;
}
