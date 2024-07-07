import React from 'react';
import { useTasks } from '../context/TaskContext';
import styled from 'styled-components';

const CircleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100px;
  height: 100px;
`;

const CircleBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #ccc;
`;

const CircleProgress = styled.div<{ percentage: number }>`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: conic-gradient(
    #4caf50 ${props => props.percentage * 3.6}deg,
    #ccc ${props => props.percentage * 3.6}deg
  );
  clip-path: circle(50% at 50% 50%);
  transition: background 3s ease-in-out;
`;

const CircleText = styled.div`
  position: absolute;
  font-size: 18px;
  color: #fff;
`;

export default function CircularProgress() {
  const tasks = useTasks();
  const completedTasksCount = tasks.filter(task => task.done).length;
  const totalTasksCount = tasks.length;
  const percentage = totalTasksCount > 0 ? (completedTasksCount / totalTasksCount) * 100 : 0;

  return (
    <CircleContainer>
      <CircleBackground />
      <CircleProgress percentage={percentage} />
      <CircleText>
        {completedTasksCount} / {totalTasksCount}
      </CircleText>
    </CircleContainer>
  );
}
