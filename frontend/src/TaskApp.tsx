import TaskList from './components/Tasks/TaskList';
import { TasksProvider } from './context/TaskContext';
import { AppWrapper, Container, Header } from './components/Tasks/StyledComponents';
import CompletedTasksCounter from './components/CompletedTasks';
import CircularProgress from './components/CircularProgress';

export default function TaskApp() {
  return (
    <TasksProvider>
      <AppWrapper>
        <Container>
          <CircularProgress />
          <CompletedTasksCounter />
          <Header>Day off in Kyoto</Header>
          <TaskList />
          
        </Container>
      </AppWrapper>
    </TasksProvider>
  );
}
