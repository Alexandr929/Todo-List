import { useState, type FormEvent } from 'react';
import styles from './TodoForm.module.scss';

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
      <div className={styles.inputButton}>
        <input
          type="text"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          placeholder="Введите новую задачу..."
          className={styles.formInput}
        />

        <button type="submit" className={styles.buttonAdd}>
          Добавить
        </button>
      </div>
    </form>
  );
};
