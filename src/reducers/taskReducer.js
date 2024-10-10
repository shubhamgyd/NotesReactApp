import { v4 as uuid } from "uuid";
export const taskReducer = (state, { type, payload }) => {
  let state1 = state;
  switch (type) {
    case "TITLE":
      state1 = {
        ...state,
        title: payload,
      }
      localStorage.setItem("notes", JSON.stringify(state1.taskList))
      return state1;
    case "TEXT":
      state1 = {
        ...state,
        text: payload,
      };
      localStorage.setItem("notes", JSON.stringify(state1.taskList));
      return state1;
    case "ADD_NOTE":
      state1 = {
        ...state,
        taskList: [
          ...state.taskList,
          {
            title: state.title,
            text: state.text,
            isPinned: state.isPinned,
            isArchived: state.isArchived,
            isDeleted: state.isDeleted,
            isImportant: state.isImportant,
            id: uuid(),
          },
        ],
      };
      localStorage.setItem("notes", JSON.stringify(state1.taskList));
      return state1
    case "CLEAR":
      state1 = {
        ...state,
        title: "",
        text: "",
      };
      localStorage.setItem("notes", JSON.stringify(state1.taskList));
      return state1
    case "DELETE":
      state1 = {
        ...state,
        taskList: payload,
      };
      localStorage.setItem("notes", JSON.stringify(state1.taskList));
      return state1
    case "TOGGLE_PIN":
      state1 = {
        ...state,
        taskList: state.taskList.map((task) =>
          task.id === payload ? { ...task, isPinned: !task.isPinned } : task
        ),
      };
      localStorage.setItem("notes", JSON.stringify(state1.taskList));
      return state1
    case "TOGGLE_ARCHIVE":
      state1 = {
        ...state,
        taskList: state.taskList.map((task) =>
          task.id === payload ? { ...task, isArchived: !task.isArchived } : task
        ),
      };
      localStorage.setItem("notes", JSON.stringify(state1.taskList));
      return state1
    case "RECOVERY_DELETE":
      state1 = {
        ...state,
        taskList: state.taskList.map((task) =>
          task.id === payload ? { ...task, isDeleted: !task.isDeleted } : task
        ),
      };
      localStorage.setItem("notes", JSON.stringify(state1.taskList));
      return state1
    case "TOGGLE_IMPORTANT":
      state1 = {
        ...state,
        taskList: state.taskList.map((task) =>
          task.id === payload
            ? { ...task, isImportant: !task.isImportant }
            : task
        ),
      };
      localStorage.setItem("notes", JSON.stringify(state1.taskList));
      return state1
    default:
      return state;
  }
};
