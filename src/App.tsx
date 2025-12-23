import { HStack, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';

import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import { TodoSearch } from './components/TodoSearch';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const App = () => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const saved = localStorage.getItem('tasks');

    return saved ? (JSON.parse(saved) as Task[]) : [];
  });
  const [search, setSearch] = useState<string>('');

  const [debouncedSearch] = useDebounce(search, 1500);

  const filteredTasks = tasks.filter(task => {
    return task.text.toLowerCase().includes(debouncedSearch);
  });

  const addTask = (text: string) => {
    const newTask: Task = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    setTasks(prev => [...prev, newTask]);
  };

  const toggleTask = (id: number) => {
    setTasks(prev => {
      return prev.map(task => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      });
    });
  };

  const deleteTask = (id: number) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <VStack>
      <HStack gap={50} align="end" justify="end" w="100%" maxW="1200px" mx="auto">
        <TodoForm onAddTask={addTask} />
        <TodoSearch onSearchTask={setSearch} searchValue={search} />
      </HStack>
      <TodoList tasks={filteredTasks} onToggleTask={toggleTask} onDeleteTask={deleteTask} />
    </VStack>
  );
};

export default App;
