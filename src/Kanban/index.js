import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Box } from 'rebass';

import { KanbanSection } from './KanbanSection';

const stagesNames = ['Backlog', 'To Do', 'Ongoing', 'Done'];

/**
 * make stageTask for Cards
 */
const createStageTasks = (tasks) =>
  stagesNames.map((element, eindex) => {
    const stageTasks = [];

    tasks.forEach((item) => {
      if (item.stage === eindex) {
        stageTasks.push(item);
      }
    });

    return stageTasks;
  });

const Kanban = () => {
  const [tasks, setTasks] = useState([
    { name: '1', stage: 0 },
    { name: '2', stage: 0 },
  ]);

  const tasksRef = useRef(createStageTasks(tasks));

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

      <KanbanSection tasks={tasksRef.current} stagesNames={stagesNames} />
    </Box>
  );
};

export { Kanban };
