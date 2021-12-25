export const stagesNames = ['Backlog', 'To Do', 'Ongoing', 'Done'];

/**
 * make stageTask for Cards
 */
export const createStageTasks = (tasks = []) =>
  stagesNames.map((_, eindex) => {
    const stageTasks = [];

    tasks.forEach((item) => {
      if (item.stage === eindex) {
        stageTasks.push(item);
      }
    });

    return stageTasks;
  });
