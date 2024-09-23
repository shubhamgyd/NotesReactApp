import { useTask } from "../context/taskContext";
import { findItIsArchived } from "../utils/findItIsArchived";
import { findItIsDeleted } from "../utils/findItIsDeleted";
export const ShowTasks = ({ id, title, text, isPinned, isImportant }) => {
  const { taskList, dispatch } = useTask();

  const handleDeleteForeverClick = (id) => {
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

  const handleDeleteClick = (id) => {
    dispatch({
      type: "RECOVERY_DELETE",
      payload: id,
    });
  };

  const handleImportantClick = (id) => {
    dispatch({
      type: "TOGGLE_IMPORTANT",
      payload: id,
    });
  };

  const isArchived = findItIsArchived(taskList, id);
  // console.log(isArchived);
  const isDeleted = findItIsDeleted(taskList, id);

  return (
    <div
      key={id}
      className="pinnedTask w-48 min-h-[10rem] border border-red-500 flex flex-col justify-between rounded-md"
    >
      <div className="notes ">
        <div className="title flex justify-between p-1 font-semibold">
          {title}
          {!isArchived && !isImportant ? (
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
        {!isDeleted ? (
          <div className="icons flex justify-between gap-2 p-1">
            <div>
              <button onClick={() => handleImportantClick(id)}>
                <span class="material-symbols-outlined">stars</span>
              </button>
            </div>
            <div>
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
                <span className="material-symbols-outlined">
                  {!isDeleted ? "delete" : "source_notes"}
                </span>
              </button>
            </div>
          </div>
        ) : (
          <div className="icons flex justify-between gap-2 p-1">
            <button onClick={() => handleDeleteForeverClick(id)}>
              <span class="material-icons">delete_forever</span>
            </button>
            <button onClick={() => handleDeleteClick(id)}>
              <span className="material-symbols-outlined">
                {!isDeleted ? "delete" : "source_notes"}
              </span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
