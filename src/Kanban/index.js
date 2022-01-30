import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box } from 'rebass';

import { KanbanSection } from './KanbanSection';
import { useKanbanTasks } from './useKanbanTasks';

/**Kanban TAsk allocation */
const Kanban = () => {
  const [value, setValue] = useState('');

  const {
    forwardMove,
    backwardTask,
    removeTasks,
    onInputChange,
    addTask,
    tasks,
  } = useKanbanTasks({ value, setValue });

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
