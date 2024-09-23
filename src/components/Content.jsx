import { useReducer } from "react";
import { taskReducer } from "../reducers/taskReducer";
import { PinnedTask } from "./PinnedTask";

export const Content = () => {
  const initialState = {
    text: "",
    title: "",
    taskList: [],
  };
  const [{ title, text, taskList }, dispatch] = useReducer(
    taskReducer,
    initialState
  );

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
    <div className="content flex flex-col gap-6 p-4">
      <div className="flex justify-center">
        <div className="addTask flex flex-col relative w-48 h-34 border">
          <div className="title">
            <input
              value={title}
              className="w-full h-full"
              placeholder="Enter Title"
              onChange={handleTitle}
            />
          </div>
          <div className="task">
            <textarea
              value={text}
              className="w-full h-full outline-none p-2 bg-transparent"
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
      <div className="pinnedTasks flex flex-wrap gap-6">
        <PinnedTask taskList={taskList} dispatch={dispatch} />
      </div>
    </div>
  );
};
