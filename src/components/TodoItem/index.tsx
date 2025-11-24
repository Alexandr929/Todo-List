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
    <div>
      <input type="checkbox" checked={task.completed} onChange={() => onToggle(task.id)} />
      <span>{task.text}</span>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
};
