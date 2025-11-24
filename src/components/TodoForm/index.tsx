import { useState, type FormEvent } from 'react';

interface TodoFormProps {
  onAddTask: (text: string) => void;
}

export const TodoForm = ({ onAddTask }: TodoFormProps) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (inputValue.trim()) {
      onAddTask(inputValue.trim());
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          placeholder="Введите новую задачу..."
        />

        <button type="submit">Добавить</button>
      </div>
    </form>
  );
};
