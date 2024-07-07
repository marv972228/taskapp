export type Task = {
    id: number;
    text: string;
    done: boolean;
  };
  
  export type Action = 
    | { type: 'loaded', tasks: Task[] }
    | { type: 'add', text: string }
    | { type: 'added', task: Task }
    | { type: 'change', task: Task }
    | { type: 'changed', task: Task }
    | { type: 'delete', id: number }
    | { type: 'deleted', id: number }
    | { type: 'fetch'}