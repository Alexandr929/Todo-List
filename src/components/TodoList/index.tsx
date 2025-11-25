import { TodoItem } from '../TodoItem';
import styles from './TodoList.module.scss';

interface TodoListProps {
  tasks: {
    id: number;
    text: string;
    completed: boolean;
  }[];
  onToggleTask: (id: number) => void;
  onDeleteTask: (id: number) => void;
}

export const TodoList = ({ tasks, onToggleTask, onDeleteTask }: TodoListProps) => {
  return (
    <div className={styles.tasksArray}>
      <span className={styles.myTasks}>Мои задачи: {tasks.length}</span>
      {tasks.length === 0 ? (
        <span className={styles.lackTasks}>Задач пока нет, добавьте первую!</span>
      ) : (
        tasks.map(task => (
          <TodoItem key={task.id} task={task} onToggle={onToggleTask} onDelete={onDeleteTask} />
        ))
      )}
    </div>
  );
};
