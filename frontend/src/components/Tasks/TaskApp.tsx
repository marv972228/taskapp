import AddTask from './AddTask';
import TaskList from './TaskList';
import { TasksProvider } from '../../context/TaskContext';
import { AppWrapper, Container, Header } from './StyledComponents';
import CompletedTasksCounter from '../CompletedTasks';
import CircularProgress from '../CircularProgress';

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
