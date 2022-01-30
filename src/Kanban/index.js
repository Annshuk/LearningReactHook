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
   * removed task
   * id is Task id and cid is item id
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

  const forwardMove = (id, cid) => {
    setTasks((prevTask) => {
      const newTask = [...prevTask];
      const moveTask = newTask[id].cards.find((item) => item.cid === cid);
      const removeItem = newTask[id].cards.filter((item) => item.cid !== cid);

      const stage = moveTask.stage;

      newTask[id].cards = [...removeItem];

      newTask[id + 1].cards = [
        ...newTask[id + 1].cards,
        { ...moveTask, stage: stage < 3 ? stage + 1 : 3 },
      ];

      return newTask;
    });
  };

  const backwardTask = (id, cid) => {
    setTasks((prevTask) => {
      const newTask = [...prevTask];

      const moveTask = newTask[id].cards.find((item) => item.cid === cid);
      const removeItem = newTask[id].cards.filter((item) => item.cid !== cid);

      const stage = moveTask.stage;

      newTask[id].cards = [...removeItem];

      newTask[id - 1].cards = [
        ...newTask[id - 1].cards,
        { ...moveTask, stage: stage > 0 ? stage - 1 : 0 },
      ];

      return newTask;
    });
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
