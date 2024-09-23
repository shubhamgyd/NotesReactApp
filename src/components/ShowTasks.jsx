import { useTask } from "../context/taskContext";
export const ShowTasks = ({ id, title, text, isPinned }) => {
  const { taskList, dispatch } = useTask();

  const handleDeleteClick = (id) => {
    let newTaskList = taskList.filter((task) => {
      return task.id !== id;
    });
    dispatch({
      type: "DELETE",
      payload: newTaskList,
    });
  };

  const handlePinnedClick = (id) => {
    dispatch({
      type: "TOGGLE_PIN",
      payload: id,
    });
  };

  const handleArchivedClick = (id) => {
    dispatch({
      type: "TOGGLE_ARCHIVE",
      payload: id,
    });
  };

  const findItIsArchived = (taskList, id) => {
    return taskList.some((task) => task.id === id && task.isArchived === true);
  };

  const isArchived = findItIsArchived(taskList, id);
  // console.log(isArchived);

  return (
    <div
      key={id}
      className="pinnedTask w-48 min-h-[10rem] border border-red-500 flex flex-col justify-between rounded-md"
    >
      <div className="notes ">
        <div className="title flex justify-between p-1 font-semibold">
          {title}
          {!isArchived ? (
            <button onClick={() => handlePinnedClick(id)}>
              <span
                className={
                  isPinned ? "material-icons" : "material-symbols-outlined"
                }
              >
                push_pin
              </span>
            </button>
          ) : (
            ""
          )}
        </div>
        <div className="w-full min-h-[2rem] h-full break-words  p-1">
          {text}
        </div>
      </div>
      <div className="">
        <div className="icons flex justify-end gap-2 p-1">
          <button onClick={() => handleArchivedClick(id)}>
            <span
              className={
                isArchived ? "material-icons" : "material-symbols-outlined"
              }
            >
              archive
            </span>
          </button>
          <button onClick={() => handleDeleteClick(id)}>
            <span className="material-symbols-outlined">delete</span>
          </button>
        </div>
      </div>
    </div>
  );
};
