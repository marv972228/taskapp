import axios from 'axios';
import { Task } from './types';

const apiBaseUrl = 'http://localhost:3001/tasks';

export const fetchTasks = async (): Promise<Task[]> => {
  const response = await axios.get(apiBaseUrl);
  return response.data;
};

export const addTask = async (text: string): Promise<Task> => {
  const response = await axios.post(apiBaseUrl, { text, done: false });
  return response.data;
};

export const updateTask = async (task: Task): Promise<void> => {
  await axios.put(`${apiBaseUrl}/${task.id}`, task);
};

export const deleteTask = async (id: number): Promise<void> => {
  await axios.delete(`${apiBaseUrl}/${id}`);
};
