// https://mujeebkhan1831.medium.com/how-to-implement-darkmode-in-react-using-tailwind-css-3c47d009209a
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { IThemeType } from '../types';

const useThemeStore = create<IThemeType, [['zustand/persist', unknown]]>(
  persist(
    (set) => ({
      theme: 'light',
      toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
    }),
    {
      name: 'theme',
      getStorage: () => localStorage,
    }
  )
);

export default useThemeStore;
