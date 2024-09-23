export const findItIsArchived = (taskList, id) => {
  return taskList.some((task) => task.id === id && task.isArchived === true);
};
