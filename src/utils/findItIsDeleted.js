export const findItIsDeleted = (taskList, id) => {
  return taskList.some((task) => task.id === id && task.isDeleted === true);
};
