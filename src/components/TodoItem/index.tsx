import { Button, Checkbox, HStack } from '@chakra-ui/react';

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
    <HStack
      border="1px solid grey"
      borderRadius="md"
      bg={task.completed ? 'green.300' : '#DBE2EF'}
      gap={3}
      p={2}
      w="100%"
      justify="space-between"
      shadow="basic-shadow"
    >
      <Checkbox.Root
        checked={task.completed}
        onCheckedChange={() => onToggle(task.id)}
        variant={'solid'}
        colorPalette={'blue'}
        size={'lg'}
      >
        <Checkbox.HiddenInput />
        <Checkbox.Control border="1px solid green" borderRadius={15} cursor="pointer" />
        <Checkbox.Label fontWeight={600}>{task.text}</Checkbox.Label>
      </Checkbox.Root>
      <Button
        onClick={() => onDelete(task.id)}
        cursor="pointer"
        size="xs"
        variant="outline"
        colorPalette={'red'}
        _active={{ transform: 'scale (0.97)', borderColor: '#FFF' }}
      >
        Удалить
      </Button>
    </HStack>
  );
};
