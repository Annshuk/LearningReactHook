import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import { Box } from 'rebass';

import { KanbanSection } from './KanbanSection';
import { moveOrBack } from './helpers';

const intialTask = [
  {
    id: 1,
    title: 'Backlog',
    cards: [
      { name: 'tasks 1', stage: 0, cid: uuidv4() },
      { name: 'tasks 2', stage: 0, cid: uuidv4() },
    ],
  },
  {
    id: 2,
    title: 'Todo',
    cards: [],
  },
  {
    id: 3,
    title: 'InProgress',
    cards: [],
  },
  {
    id: 4,
    title: 'Done',
    cards: [],
  },
];

/**Kanban TAsk allocation */
const Kanban = () => {
  const [value, setValue] = useState('');
  const [tasks, setTasks] = useState(intialTask);

  const onInputChange = ({ target }) => {
    setValue(target.value);
  };

  /**
   * addTask task
   * add new TAsk
   */
  const addTask = () => {
    if (value) {
      setValue('');

      setTasks((prevTask) => {
        const newTask = [...prevTask];
        const currentTask = prevTask[0].cards;

        prevTask[0].cards = [
          ...currentTask,
          { ...currentTask, cid: uuidv4(), name: value, stage: 0 },
        ];

        return newTask;
      });
    }
  };

  /**
   * removed task
   * id is Task id and cid is item id
   */
  const removeTasks = (id, cid) => {
    setTasks((prevState) => {
      const newTask = [...prevState];
      newTask[id].cards = newTask[id].cards.filter((item) => item.cid !== cid);

      return newTask;
    });
  };
  /**
   * forwardMove task
   * move forward
   */
  const forwardMove = (id, cid) => {
    setTasks((prevTask) => moveOrBack(prevTask, id, cid, 3));
  };

  /**
   * backwardTask
   * move backward
   */

  const backwardTask = (id, cid) => {
    setTasks((prevTask) => moveOrBack(prevTask, id, cid, 0));
  };

  return (
    <Box>
      <nav>
        <Link to="/">Home</Link>
      </nav>

      <section>
        <input
          value={value}
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

      <KanbanSection
        tasks={tasks}
        onBack={backwardTask}
        onForward={forwardMove}
        onRemove={removeTasks}
      />
    </Box>
  );
};

export { Kanban };
