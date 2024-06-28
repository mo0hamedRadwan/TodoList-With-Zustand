import { transFrom } from '@mongez/localization';
import { useState } from 'react';
import TodoModel from './model/TodoModel';
import useLanguageStore from '../zustand/useLanguageStore';
import AlertModel from './model/AlertModel';
import { ITodoType } from '../types';
import useTodoListStore from '../zustand/useTodoListStore';

// const todo = {
//   id: 1,
//   title: 'Title',
//   description: 'Description',
//   completed: false,
// };

type propsType = {
  todo: ITodoType;
};

const TodoItem = ({ todo }: propsType) => {
  const lang = useLanguageStore((state) => state.lang);
  const toggleTodo = useTodoListStore((state) => state.toggleTodo);
  const [updateTodo, setUpdateTodo] = useState(false);
  const [deleteTodo, setDeleteTodo] = useState(false);

  const handleToggleTodo = () => {
    toggleTodo(todo.id);
  };

  return (
    <div
      className={`w-[280px] h-[150px] dark:bg-slate-700 p-2 flex flex-col justify-between rounded-lg border-b-2 cursor-pointer ${
        todo.completed ? 'border-green-500' : 'border-red-500'
      }   shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]`}
      style={{ direction: 'ltr' }}
      onClick={handleToggleTodo}
    >
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            className="w-4 h-4 accent-red-500 pointer-events-none"
            checked={todo.completed}
            onChange={handleToggleTodo}
          />
          <h3 className="text-lg font-semibold">{todo.title}</h3>
        </div>
        <p className="text-sm">{todo.description}</p>
      </div>
      <div className="flex justify-end gap-2">
        <button
          onClick={() => setUpdateTodo(true)}
          className="px-4 py-1 rounded-full bg-gray-800 text-white"
        >
          {transFrom(lang, 'edit')}
        </button>
        <button
          onClick={() => setDeleteTodo(true)}
          className="px-2 py-1 rounded-full bg-red-500 text-white"
        >
          {transFrom(lang, 'delete')}
        </button>
      </div>
      {updateTodo && (
        <TodoModel
          heading="editTodo"
          id={todo.id}
          title={todo.title}
          desc={todo.description}
          setShowModel={setUpdateTodo}
        />
      )}
      {deleteTodo && <AlertModel id={todo.id} setShowModel={setDeleteTodo} />}
    </div>
  );
};

export default TodoItem;
