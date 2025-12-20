import { Text, VStack } from '@chakra-ui/react';

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
  if (tasks.length === 0)
    return (
      <Text mt={20} textStyle="4xl">
        Задач не найдено!
      </Text>
    );
  return (
    <VStack>
      <Text mt="20px" fontSize="30px" fontWeight="bold" color="#112D4E">
        Мои задачи: {tasks.length}
      </Text>
      <VStack border="1px solid #FFF" borderRadius="md" p={10} m={7} bg="#F9F7F7">
        {tasks.length === 0 ? (
          <Text>Задач пока нет, добавьте первую!</Text>
        ) : (
          tasks.map(task => (
            <TodoItem key={task.id} task={task} onToggle={onToggleTask} onDelete={onDeleteTask} />
          ))
        )}
      </VStack>
    </VStack>
  );
};
