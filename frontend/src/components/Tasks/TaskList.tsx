import React, { useState } from 'react';
import { useTasks, useTasksDispatch } from '../../context/TaskContext';
import InputComponent from '../Input/InputStyled';
import { List, ListItem, ItemText, RemoveButton, EditButton, ButtonContainer, FancyCheckbox, TaskContainer, TaskContent } from './StyledComponents';

type Task = {
  id: number;
  text: string;
  done: boolean;
};

type TaskProps = {
  task: Task;
};

export default function TaskList() {
  const tasks = useTasks();
  return (
    <List>
      {tasks.map((task: Task) => (
        <ListItem key={task.id}>
          <Task task={task} />
        </ListItem>
      ))}
    </List>
  );
}

function Task({ task }: TaskProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);
  const dispatch = useTasksDispatch();

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditText(e.target.value);
  };

  const handleEditSaveKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      saveEdit();
    }
  };

  const handleEditSaveClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    saveEdit();
  };

  const saveEdit = () => {
    dispatch({
      type: 'change',
      task: {
        ...task,
        text: editText
      }
    });
    setIsEditing(false);
  };

  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <InputComponent
          value={editText}
          onChange={handleEditChange}
          onKeyDown={handleEditSaveKeyDown}
        />
        <EditButton onClick={handleEditSaveClick}>
          Save
        </EditButton>
      </>
    );
  } else {
    taskContent = (
      <TaskContent>
        <FancyCheckbox
          type="checkbox"
          checked={task.done}
          onChange={e => {
            dispatch({
              type: 'change',
              task: {
                ...task,
                done: e.target.checked
              }
            });
          }}
        />
        <ItemText style={{ textDecoration: task.done ? 'line-through' : 'none' }}>
          {task.text}
        </ItemText>
      </TaskContent>
    );
  }

  return (
    <TaskContainer>
      {taskContent}
      <ButtonContainer>
        <EditButton onClick={() => setIsEditing(true)}>
          Edit
        </EditButton>
        <RemoveButton
          onClick={() => {
            dispatch({
              type: 'delete',
              id: task.id
            });
          }}
        >
          Delete
        </RemoveButton>
      </ButtonContainer>
    </TaskContainer>
  );
}
