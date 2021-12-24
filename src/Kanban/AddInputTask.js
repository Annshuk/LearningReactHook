import React, { useState } from 'react';

const AddInputTask = ({ onChange, onAddTask }) => {
  const [inputValue, setInput] = useState();

  return (
    <section>
      <input
        value={inputValue}
        onChange={onChange(setInput)}
        id="create-task-input"
        type="text"
        placeholder="New task name"
        data-testid="create-task-input"
      />
      <button
        onClick={onAddTask(setInput, inputValue)}
        type="submit"
        data-testid="create-task-button"
      >
        Create task
      </button>
    </section>
  );
};

export { AddInputTask };
