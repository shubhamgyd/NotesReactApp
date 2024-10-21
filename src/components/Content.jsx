import { PinnedTask } from "./PinnedTask";
import { useTask } from "../context/taskContext";

export const Content = () => {
  const { title, text, dispatch } = useTask();

  const handleTitle = (e) => {
    dispatch({
      type: "TITLE",
      payload: e.target.value,
    });
  };

  const handleText = (e) => {
    dispatch({
      type: "TEXT",
      payload: e.target.value,
    });
  };

  const handleAddButton = () => {
    dispatch({
      type: "ADD_NOTE",
    });
    dispatch({
      type: "CLEAR",
    });
  };

  return (
    <div className="flex flex-col gap-6 p-4">
      <div className="flex justify-center">
        <div className="flex flex-col relative w-80 min-h-[9rem] border p-2 rounded">
          <div className="title w-full">
            <input
              value={title}
              className="w-full h-full outline-none"
              placeholder="Enter Title"
              onChange={handleTitle}
            />
          </div>
          <div className="w-full  h-full break-words">
            <textarea
              value={text}
              className="w-full h-full outline-none bg-transparent"
              placeholder="Enter Task"
              onChange={handleText}
            />
          </div>
          <button
            className="addButton absolute bottom-0 right-0"
            onClick={handleAddButton}
            disabled={title.length === 0 && text.length === 0}
          >
            <span className="material-symbols-outlined">add_circle</span>
          </button>
        </div>
      </div>
      <div className="pinnedTasks flex flex-wrap justify-around gap-6">
        <PinnedTask />
      </div>
    </div>
  );
};
