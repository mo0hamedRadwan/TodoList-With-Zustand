import { useEffect } from 'react';
import useThemeStore from '../zustand/useThemeStore';

export function useDarkMode() {
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [theme]);

  return { theme, toggleTheme };
}
