/**
 * goingForward
 * @param {Array} //item
 * @param {Number} //id,
 * @param {Array} //moveTask,
 * @param {Array} //removeItem
 * @return newTask Board for forward
 */
const goingForward = (newTask, id, moveTask, removeItem, stage) => {
  newTask[id].cards = [...removeItem];

  newTask[id + 1].cards = [
    ...newTask[id + 1].cards,
    {
      ...moveTask,
      stage: stage < 3 ? stage + 1 : 3,
    },
  ];

  return newTask;
};

/**
 *
 * goingBackward
 * @param {Array} //item
 * @param {Number} //id,
 * @param {Array} //moveTask,
 * @param {Array} //removeItem
 * @return newTask Board for back
 */
const goingBackward = (newTask, id, moveTask, removeItem, stage) => {
  newTask[id].cards = [...removeItem];

  newTask[id - 1].cards = [
    ...newTask[id - 1].cards,
    {
      ...moveTask,
      stage: stage > 3 ? stage - 1 : 0,
    },
  ];

  return newTask;
};

/**
 * Move or backward
 * Single function to handle back or forth
 */
const moveOrBack = (tasks, id, itemId, action) => {
  const newTask = [...tasks];

  const moveTask = newTask[id].cards.find((item) => item.cid === itemId);
  const removeItem = newTask[id].cards.filter((item) => item.cid !== itemId);

  const stage = moveTask.stage;

  // are we going foward
  const isForward = action === 3;

  // is next of previous task
  const direction = isForward
    ? goingForward(newTask, id, moveTask, removeItem, stage)
    : goingBackward(newTask, id, moveTask, removeItem, stage);

  return newTask;
};

export { moveOrBack };
