import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Box } from 'rebass';

import { KanbanSection } from './KanbanSection';

import { createStageTasks } from './helpers';

const intialTask = [
  { name: '1', stage: 0 },
  { name: '2', stage: 0 },
];

const tasksCreation = createStageTasks(intialTask);

/**Kanban TAsk allocation */
const Kanban = () => {
  const [inputValue, setInput] = useState('');
  const [tasks, setTasks] = useState(intialTask);

  const taskRef = useRef(tasksCreation);

  const onInputChange = ({ target }) => {
    setInput(target.value);
  };

  const removeTasks = (name) => () => {
    setTasks((prevTask) => {
      const removeItem = prevTask.filter((item) => item.name != name);

      taskRef.current = createStageTasks(removeItem);

      return removeItem;
    });
  };

  const addTask = () => {
    if (inputValue) {
      setInput('');
      setTasks((prevTasks) => {
        const newTask = [...prevTasks, { name: inputValue, stage: 0 }];

        taskRef.current = createStageTasks(newTask);

        return newTask;
      });
    }
  };

  const forwardMove = (name) => () => {
    const newTask = tasks.map((task) => {
      if (task.name == name) {
        return {
          ...task,
          stage: task.stage < 3 ? task.stage + 1 : 3,
        };
      }
      return task;
    });

    setTasks(newTask);

    taskRef.current = createStageTasks(newTask);
  };

  const backwardTask = (name) => () => {
    const newTask = tasks.map((task) => {
      if (task.name == name) {
        return {
          ...task,
          stage: task.stage > 0 ? task.stage - 1 : 0,
        };
      }
      return task;
    });

    setTasks(newTask);

    taskRef.current = createStageTasks(newTask);
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

      <KanbanSection
        tasks={taskRef.current}
        onBack={backwardTask}
        onForward={forwardMove}
        onRemove={removeTasks}
      />
    </Box>
  );
};

export { Kanban };
