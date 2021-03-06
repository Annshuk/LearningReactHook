import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { moveOrBack, hasSameId } from './helpers';

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

/**
 * useKanbanTasks
 * custom hook for all method
 */
const useKanbanTasks = ({ value }) => {
  const [tasks, setTasks] = useState(intialTask);

  const onInputChange = ({ target }) => {
    value.current = target.value;
    console.log(target.value);
  };

  /**
   * addTask task
   * add new TAsk
   */
  const addTask = () => {
    if (!value.current) {
      return;
    }

    setTasks((prevTask) => {
      const newTask = [...prevTask];
      const currentTask = newTask[0].cards;

      newTask[0].cards = [
        ...currentTask,
        { ...currentTask, cid: uuidv4(), name: value.current, stage: 0 },
      ];

      value.current = '';

      return newTask;
    });
  };

  /**
   * removed task
   * id is Task id and cid is item id
   */
  const removeTasks = (id, currentId) => {
    setTasks((prevState) => {
      const newTask = [...prevState];

      newTask[id].cards = newTask[id].cards.filter(
        ({ cid }) => !hasSameId(cid, currentId)
      );

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

  return {
    forwardMove,
    backwardTask,
    removeTasks,
    addTask,
    tasks,
    onInputChange,
    value: value.current,
  };
};

export { useKanbanTasks };
