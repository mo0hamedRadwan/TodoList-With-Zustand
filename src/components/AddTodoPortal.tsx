import { transFrom } from '@mongez/localization';
import { useState } from 'react';
import TodoModel from './model/TodoModel';
import useLanguageStore from '../zustand/useLanguageStore';

const AddTodoPortal = () => {
  const lang = useLanguageStore((state) => state.lang);
  const [showModel, setShowModel] = useState(false);
  return (
    <>
      <button
        type="button"
        onClick={() => setShowModel(!showModel)}
        className="px-4 py-2 font-bold text-lg bg-red-500 text-white rounded-full"
      >
        +{transFrom(lang, 'addTodo')}
      </button>
      {showModel && <TodoModel heading="addTodo" setShowModel={setShowModel} />}
    </>
  );
};

export default AddTodoPortal;
