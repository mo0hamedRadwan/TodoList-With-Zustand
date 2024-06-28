import { ILanguageType } from './../types/index';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// const language = localStorage.getItem('TodoList-lang');

const useLanguageStore = create<ILanguageType, [['zustand/persist', unknown]]>(
  persist(
    (set) => ({
      lang: 'en',
      setLang: (lang: string) => (lang === 'en' || lang === 'ar') && set(() => ({ lang })),
    }),
    {
      name: 'TodoList-lang',
      getStorage: () => localStorage,
    }
  )
);

export default useLanguageStore;
