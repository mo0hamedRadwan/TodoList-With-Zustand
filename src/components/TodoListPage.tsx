// import { useState } from 'react';
import TodoForm from './TodoForm';
import TodoHeader from './TodoHeader';
import TodoFooter from './TodoFooter';
import useLanguageStore from '../zustand/useLanguageStore';
import { Toaster } from 'react-hot-toast';

const TodoListPage = () => {
  const lang = useLanguageStore((state) => state.lang);
  // console.log(lang)
  return (
    <div
      className="min-h-screen flex flex-col justify-between select-none"
      style={{ direction: lang === 'en' ? 'ltr' : 'rtl' }}
    >
      <TodoHeader />
      <TodoForm />
      <TodoFooter />
      <Toaster />
    </div>
  );
};

export default TodoListPage;
