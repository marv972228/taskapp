import { Action } from './types';
import { Dispatch } from 'react';
import { fetchTasks, addTask, updateTask, deleteTask } from './api';

export const apiMiddleware = (dispatch: Dispatch<Action>) => async (action: Action) => {
  switch (action.type) {
    case 'fetch': {
      try {
        const tasks = await fetchTasks();
        dispatch({ type: 'loaded', tasks });
      } catch (error) {
        console.error('Failed to fetch tasks', error);
      }
      break;
    }
    case 'add': {
      try {
        const task = await addTask(action.text);
        dispatch({ type: 'added', task });
      } catch (error) {
        console.error('Failed to add task', error);
      }
      break;
    }
    case 'change': {
      try {
        await updateTask(action.task);
        dispatch({ type: 'changed', task: action.task });
      } catch (error) {
        console.error('Failed to update task', error);
      }
      break;
    }
    case 'delete': {
      try {
        await deleteTask(action.id);
        dispatch({ type: 'deleted', id: action.id });
      } catch (error) {
        console.error('Failed to delete task', error);
      }
      break;
    }
    default:
      dispatch(action);
      break;
  }
};
