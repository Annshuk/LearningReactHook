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
      stage: stage > 0 ? stage - 1 : 0,
    },
  ];

  return newTask;
};

const hasSameId = (fid, sid) => fid === sid;

/**
 * Move or backward
 * Single function to handle back or forth
 */
const moveOrBack = (tasks, id, itemId, action) => {
  const newTask = [...tasks];
  const cardLists = newTask[id].cards;

  //picking
  const moveTask = cardLists.find(({ cid }) => hasSameId(cid, itemId));

  //omiting
  const removeItem = cardLists.filter(({ cid }) => !hasSameId(cid, itemId));

  const stage = moveTask.stage;

  // is next of previous task
  const funcArgs = [newTask, id, moveTask, removeItem, stage];

  return action === 3 ? goingForward(...funcArgs) : goingBackward(...funcArgs);
};

export { moveOrBack };
