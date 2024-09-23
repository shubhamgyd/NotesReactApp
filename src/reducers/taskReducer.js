import { v4 as uuid } from "uuid";
export const taskReducer = (state, { type, payload }) => {
  switch (type) {
    case "TITLE":
      return {
        ...state,
        title: payload,
      };
    case "TEXT":
      return {
        ...state,
        text: payload,
      };
    case "ADD_NOTE":
      return {
        ...state,
        taskList: [
          ...state.taskList,
          {
            title: state.title,
            text: state.text,
            isPinned: state.isPinned,
            isArchived: state.isArchived,
            id: uuid(),
          },
        ],
      };
    case "CLEAR":
      return {
        ...state,
        title: "",
        text: "",
      };
    case "DELETE":
      return {
        ...state,
        taskList: payload,
      };
    case "TOGGLE_PIN":
      return {
        ...state,
        taskList: state.taskList.map((task) =>
          task.id === payload ? { ...task, isPinned: !task.isPinned } : task
        ),
      };
    default:
      return state;
  }
};
