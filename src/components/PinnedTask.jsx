export const PinnedTask = ({ taskList, dispatch }) => {
  const handleDelete = (id) => {
    let newTaskList = taskList.filter((task) => {
      return task.id !== id;
    });
    dispatch({
      type: "DELETE",
      payload: newTaskList,
    });
  };
  return taskList?.length > 0
    ? taskList.map(({ title, text, id }) => (
        <div
          key={id}
          className="pinnedTask w-48 min-h-[10rem] border border-red-500 box-border flex flex-col justify-between"
        >
          <div className="notes">
            <div className="title flex justify-between">
              {title}
              <span className="material-symbols-outlined">keep</span>
            </div>
            {text}
          </div>
          <div className="">
            <div className="icons ">
              <span className="material-symbols-outlined">archive</span>
              <button onClick={() => handleDelete(id)}>
                <span className="material-symbols-outlined">delete</span>
              </button>
            </div>
          </div>
        </div>
      ))
    : "";
};
