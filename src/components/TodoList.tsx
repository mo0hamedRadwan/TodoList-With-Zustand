import { transFrom } from '@mongez/localization';
import TodoItem from './TodoItem';
import useLanguageStore from '../zustand/useLanguageStore';
import { ITodoType } from '../types';

type propsType = {
  todos: ITodoType[];
};

const TodoList = ({ todos }: propsType) => {
  const lang = useLanguageStore((state) => state.lang);

  return (
    <div
      className={`my-4 min-h-40 flex-grow flex ${
        todos.length === 0 && 'items-center'
      }  justify-center`}
    >
      {todos.length === 0 ? (
        <h3 className="text-2xl">{transFrom(lang, 'notTodos')}</h3>
      ) : (
        <div className="p-2">
          <ul className="flex justify-center flex-wrap gap-4">
            {todos.map((todo) => (
              <TodoItem todo={todo} key={todo.id} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TodoList;
