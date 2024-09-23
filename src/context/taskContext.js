import { useContext, createContext, useReducer } from "react";
import { taskReducer } from "../reducers/taskReducer";

const taskContext = createContext();

//provider
const TaskProvider = ({ children }) => {
  const initialState = {
    text: "",
    title: "",
    isPinned: false,
    isArchived: false,
    taskList: [],
  };
  const [{ title, text, taskList, isPinned, isArchived }, dispatch] =
    useReducer(taskReducer, initialState);
  return (
    <taskContext.Provider
      value={{ title, text, taskList, isPinned, isArchived, dispatch }}
    >
      {children}
    </taskContext.Provider>
  );
};

//consumer
const useTask = () => useContext(taskContext);

export { TaskProvider, useTask };
