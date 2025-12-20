import { HStack, Input } from '@chakra-ui/react';
import { type FormEvent } from 'react';

interface TodoSearchProps {
  onSearchTask: (text: string) => void;
  searchValue: string;
}

export const TodoSearch = ({ onSearchTask, searchValue }: TodoSearchProps) => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <HStack as="form" onSubmit={handleSubmit}>
      <Input
        type="text"
        value={searchValue}
        onChange={e => onSearchTask(e.target.value)}
        placeholder="Поиск по задачам..."
        bg="#FFF"
        shadow="basic-shadow"
        size="lg"
        w="300px"
        fontWeight={500}
      />
    </HStack>
  );
};
