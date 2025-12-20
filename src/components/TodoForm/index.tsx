import { Button, HStack, Input } from '@chakra-ui/react';
import { type FormEvent, useState } from 'react';

interface TodoFormProps {
  onAddTask: (text: string) => void;
}

export const TodoForm = ({ onAddTask }: TodoFormProps) => {
  const [inputValue, setInputValue] = useState('');

  console.log(inputValue);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (inputValue.trim()) {
      onAddTask(inputValue.trim());
      setInputValue('');
    }
  };

  return (
    <HStack as="form" onSubmit={handleSubmit} gap={0} w="50%" pt={4}>
      <Input
        type="text"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        placeholder="Введите новую задачу..."
        maxLength={120}
        bg="#DBE2EF"
        size="md"
        shadow="basic-shadow"
        fontWeight={500}
      />

      <Button
        type="submit"
        variant="surface"
        colorPalette={'green'}
        bg="color-red"
        _active={{ transform: 'scale(0.97)', borderColor: '#FFF' }}
        shadow="basic-shadow"
      >
        Добавить
      </Button>
    </HStack>
  );
};
