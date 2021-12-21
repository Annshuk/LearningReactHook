import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Card, Flex, Box } from 'rebass';

const stagesNames = ['Backlog', 'To Do', 'Ongoing', 'Done'];

const Kanban = () => {
  const [tasks, setTasks] = useState([
    { name: '1', stage: 0 },
    { name: '2', stage: 0 },
  ]);

  const inputRef = useRef();

  const onInputChange = ({ target }) => {
    inputRef.current = target.value;
  };

  const addTask = () => {
    console.log(tasks);
  };

  return (
    <Box>
      <nav>
        <Link to="/">Home</Link>
      </nav>

      <Card mt="10px">
        <section>
          <input
            value={inputRef.current}
            onChange={onInputChange}
            id="create-task-input"
            type="text"
            placeholder="New task name"
            data-testid="create-task-input"
          />
          <button
            onClick={addTask}
            type="submit"
            data-testid="create-task-button"
          >
            Create task
          </button>
        </section>
      </Card>
      <Card mt="10px" width="250px">
        <h2>Backlog</h2>
      </Card>
      <Card mt="10px" width="250px">
        <h2>To Do</h2>
      </Card>
      <Card mt="10px" width="250px">
        <h2>Done</h2>
      </Card>
    </Box>
  );
};

export { Kanban };
