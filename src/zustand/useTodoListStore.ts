import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ITodoType } from '../types';

interface ITodoListState {
  todoList: ITodoType[];
  addTodo: (title: string, description: string) => void;
  removeTodo: (id: number) => void;
  editTodo: (id: number, title: string, description: string) => void;
  toggleTodo: (id: number) => void;
  clearTodos: () => void;
}

const useTodoListStore = create<ITodoListState, [['zustand/persist', unknown]]>(
  persist(
    (set) => ({
      todoList: [],
      addTodo: (title: string, description: string) => {
        const todo = {
          id: Math.floor(Math.random() * 1000),
          title,
          description,
          completed: false,
        };
        set((state) => ({ ...state, todoList: [...state.todoList, todo] }));
      },
      removeTodo: (id: number) => {
        set((state) => ({
          ...state,
          todoList: state.todoList.filter((todo) => todo.id !== id),
        }));
      },
      editTodo: (id: number, title: string, description: string) => {
        set((state) => ({
          ...state,
          todoList: state.todoList.map((todo) =>
            todo.id === id ? { ...todo, title, description } : todo
          ),
        }));
      },
      toggleTodo: (id: number) => {
        set((state) => ({
          ...state,
          todoList: state.todoList.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          ),
        }));
      },
      clearTodos: () => {
        set((state) => ({ ...state, todoList: [] }));
      },
    }),
    {
      name: 'TodoList-Zustand',
      getStorage: () => localStorage,
    }
  )
);

export default useTodoListStore;
