import { transFrom } from '@mongez/localization';
import { useState } from 'react';
import AddTodoPortal from './AddTodoPortal';
import useLanguageStore from '../zustand/useLanguageStore';
import TodoList from './TodoList';
import useTodoListStore from '../zustand/useTodoListStore';

const TodoForm = () => {
  const lang = useLanguageStore((state) => state.lang);
  const todoList = useTodoListStore((state) => state.todoList);
  const [searchTerm, setSearchTerm] = useState('');
  const [status, setStatus] = useState('All');

  const filteredTodoList = todoList.filter((todo) => {
    const term = searchTerm.trim().toLowerCase();

    if (term.length > 0) {
      const filteredByStatus = status === 'All' || todo.completed === (status === 'Completed');
      const filteredByTitle = todo.title.toLowerCase().includes(term);
      const filteredByDesc = todo.description.toLowerCase().includes(term);

      // Filter by title or description, considering case insensitivity and status
      return filteredByStatus && (filteredByTitle || filteredByDesc);
    } else {
      return status === 'All' || todo.completed === (status === 'Completed');
    }
  });

  return (
    <>
      <div className="my-12 sm:my-6">
        <form className="h-16 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10">
          <AddTodoPortal />
          <div className="flex items-center justify-center gap-4">
            <input
              type="text"
              name="search"
              id="search"
              autoComplete="off"
              placeholder={transFrom(lang, 'search')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="p-2 text-xl border border-gray-300 rounded focus:outline-none"
            />
            <select
              name="status"
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="p-2 text-xl border border-gray-300 rounded"
            >
              <option value="All">{transFrom(lang, 'all')}</option>
              <option value="Completed">{transFrom(lang, 'completed')}</option>
              <option value="Incompleted">{transFrom(lang, 'incompleted')}</option>
            </select>
          </div>
        </form>
      </div>
      <TodoList todos={filteredTodoList} />
    </>
  );
};

export default TodoForm;
