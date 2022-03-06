import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Box } from 'rebass';

import { KanbanSection } from './KanbanSection';
import { useKanbanTasks } from './useKanbanTasks';

/**Kanban TAsk allocation */
const Kanban = () => {
  const valueRef = useRef('');

  const {
    forwardMove,
    backwardTask,
    removeTasks,
    addTask,
    tasks,
    onInputChange,
    value,
  } = useKanbanTasks({ value: valueRef });

  return (
    <Box>
      <nav>
        <Link to="/">Home</Link>
      </nav>

      <section>
        <input
          id="create-task-input"
          type="text"
          placeholder="New task name"
          data-testid="create-task-input"
          onChange={onInputChange}
        
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
