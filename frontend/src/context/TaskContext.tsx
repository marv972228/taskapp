import { createContext, useContext, useReducer, ReactNode, Dispatch, useEffect, useCallback } from 'react';
import { Task, Action } from './types';
import { tasksReducer } from './reducer';
import { apiMiddleware } from './apiMiddleware';

type TasksProviderProps = {
  children: ReactNode;
};

const TasksContext = createContext<Task[] | undefined>(undefined);
const TasksDispatchContext = createContext<Dispatch<Action> | undefined>(undefined);

const initialTasks: Task[] = [];

export function TasksProvider({ children }: TasksProviderProps) {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  // useCallback: Wrapped the apiDispatch function with useCallback to ensure it is memoized and does not change on every render.
  // Dependency Array: Provided [dispatch] as the dependency array to useCallback to ensure it only recalculates if dispatch changes.
  const customDispatch = useCallback(apiMiddleware(dispatch), [dispatch]);

  useEffect(() => {
    customDispatch({ type: 'fetch' });
  }, [customDispatch]);

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={customDispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}

export function useTasks(): Task[] {
  const context = useContext(TasksContext);
  if (context === undefined) {
    throw new Error('useTasks must be used within a TasksProvider');
  }
  return context;
}

export function useTasksDispatch(): Dispatch<Action> {
  const context = useContext(TasksDispatchContext);
  if (context === undefined) {
    throw new Error('useTasksDispatch must be used within a TasksProvider');
  }
  return context;
}
