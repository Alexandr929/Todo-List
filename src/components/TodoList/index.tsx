import { TodoItem } from '../TodoItem';

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
    <div>
      Мои задачи: {tasks.length}
      {tasks.length === 0 ? (
        <span>Задач пока нет, добавьте первую!</span>
      ) : (
        tasks.map(task => (
          <TodoItem key={task.id} task={task} onToggle={onToggleTask} onDelete={onDeleteTask} />
        ))
      )}
    </div>
  );
};
