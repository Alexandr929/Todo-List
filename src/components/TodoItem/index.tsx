import styles from './TodoItem.module.scss';

interface TodoItemProps {
  task: {
    id: number;
    text: string;
    completed: boolean;
  };
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export const TodoItem = ({ task, onToggle, onDelete }: TodoItemProps) => {
  return (
    <div className={styles.taskItem}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
        className={styles.checkbox}
      />
      <span>{task.text}</span>
      <button onClick={() => onDelete(task.id)} className={styles.deleteButton}>
        Удалить
      </button>
    </div>
  );
};
