import { useEffect } from 'react';
import useThemeStore from '../zustand/useThemeStore';

export function useDarkMode() {
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  useEffect(() => {
    document.body.classList.toggle('dark');
  }, [theme]);

  return { theme, toggleTheme };
}
