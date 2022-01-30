import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import { Box } from 'rebass';

import { KanbanSection } from './KanbanSection';

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

const moveOrBack = (tasks, id, itemId, action) => {
  const newTask = [...tasks];

  const moveTask = newTask[id].cards.find((item) => item.cid === itemId);
  const removeItem = newTask[id].cards.filter((item) => item.cid !== itemId);

  const stage = moveTask.stage;

  newTask[id].cards = [...removeItem];

  const isForward = action === 3;
  const direction = isForward ? id + 1 : id - 1;

  newTask[direction].cards = [
    ...newTask[direction].cards,
    {
      ...moveTask,
      stage: isForward
        ? stage < 3
          ? stage + 1
          : 3
        : stage > 0
        ? stage - 1
        : 0,
    },
  ];

  return newTask;
};

/**Kanban TAsk allocation */
const Kanban = () => {
  const [value, setValue] = useState('');
  const [tasks, setTasks] = useState(intialTask);

  const onInputChange = ({ target }) => {
    setValue(target.value);
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
   * addTask task
   * add new TAsk
   */
  const addTask = () => {
    if (value) {
      setValue('');

      setTasks((prevTask) => {
        const newTask = [...prevTask];
        prevTask[0].cards.push({ cid: uuidv4(), name: value, stage: 0 });

        return newTask;
      });
    }
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
