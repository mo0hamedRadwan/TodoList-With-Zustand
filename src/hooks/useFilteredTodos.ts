import useTodoListStore from "../zustand/useTodoListStore";

export function useFilteredTodos(searchTerm: string, status: string){
  const todoList = useTodoListStore((state) => state.todoList);

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

  return filteredTodoList;
}