import React, { useState } from 'react';
import { useTasksDispatch } from '../../context/TaskContext';
import InputComponent from '../Input/InputStyled';
import { AddTaskContainer, AddButton } from './StyledComponents';

export default function AddTask() {
  const [text, setText] = useState('');
  const dispatch = useTasksDispatch();

  const handleAddTask = () => {
    if (text.trim() !== '') {
      dispatch({
        type: 'add',
        text: text,
      });
      setText('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <AddTaskContainer>
      <InputComponent
        placeholder="Add task"
        value={text}
        onChange={e => setText(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <AddButton onClick={handleAddTask}>Add</AddButton>
    </AddTaskContainer>
  );
}
