import React from 'react';
import { useTasks } from '../context/TaskContext';
import styled from 'styled-components';

const CounterContainer = styled.div<CounterContainerProps>`
  margin: 10px 0;
  font-size: 18px;
  width: 100%;
  background: linear-gradient(
    to right,
    #4caf50 ${props => props.percentage}%,
    #4caf50 ${props => props.percentage + 0.5}%,
    #ccc ${props => props.percentage + 0.5}%,
    #ccc 100%
  );
  padding: 10px;
  border-radius: 5px;
  color: #fff;
  text-align: center;
  transition: background 0.5s ease-in-out;
`;

type CounterContainerProps = {
    percentage: number
}

export default function CompletedTasksCounter() {
  const tasks = useTasks();
  const completedTasksCount = tasks.filter(task => task.done).length;
  const totalTasksCount = tasks.length;
  const percentage = totalTasksCount > 0 ? (completedTasksCount / totalTasksCount) * 100 : 0;

  return (
    <CounterContainer percentage={percentage}>
      {completedTasksCount} / {totalTasksCount} tasks completed
    </CounterContainer>
  );
}