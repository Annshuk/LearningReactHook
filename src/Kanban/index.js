import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Box } from 'rebass';

import { KanbanSection } from './KanbanSection';

import { createStageTasks } from './helpers';

const Kanban = () => {
  const [inputValue, setInput] = useState('');
  const [tasks, setTasks] = useState(
    createStageTasks([
      { name: '1', stage: 0 },
      { name: '2', stage: 0 },
    ])
  );

  const onInputChange = ({ target }) => {
    setInput(target.value);
  };

  const addTask = () => {
    if (inputValue) {
      setInput('');
      setTasks(createStageTasks([...tasks[0], { name: inputValue, stage: 0 }]));
    }
  };

  return (
    <Box>
      <nav>
        <Link to="/">Home</Link>
      </nav>

      <section>
        <input
          value={inputValue}
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

      <KanbanSection tasks={tasks} />
    </Box>
  );
};

export { Kanban };
