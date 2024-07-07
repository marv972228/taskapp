import { Task, Action } from './types';

export function tasksReducer(tasks: Task[], action: Action): Task[] {
  switch (action.type) {
    case 'loaded': {
      return action.tasks;
    }
    case 'added': {
      return [...tasks, action.task];
    }
    case 'changed': {
      return tasks.map(t => 
        t.id === action.task.id ? action.task : t
      );
    }
    case 'deleted': {
      return tasks.filter(t => t.id !== action.id);
    }
    default: {
      throw new Error('Unknown action: ');
    }
  }
}
