import { transFrom } from '@mongez/localization';
import { useState } from 'react';
import AddTodoPortal from './AddTodoPortal';
import useLanguageStore from '../zustand/useLanguageStore';
import TodoList from './TodoList';
import { useDebounce } from '../hooks/useDebounce';
import { useFilteredTodos } from '../hooks/useFilteredTodos';

const TodoForm = () => {
  const lang = useLanguageStore((state) => state.lang);
  const [searchTerm, setSearchTerm] = useState('');
  const [status, setStatus] = useState('All');

  const searchDebounce = useDebounce(searchTerm, 5000);
  const filteredTodoList = useFilteredTodos(searchDebounce, status);

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
